import { SvgXml } from "react-native-svg";
import { StarProp } from "./Rating";
import { Pressable } from "react-native";

const xml = `
<svg width="800px" height="800px" viewBox="0 0 24 24" id="star_outlined" data-name="star outlined" xmlns="http://www.w3.org/2000/svg">
  <rect id="Rectangle_4" data-name="Rectangle 4" width="24" height="24" fill="none"/>
  <path id="Star" d="M10,15,4.122,18.09l1.123-6.545L.489,6.91l6.572-.955L10,0l2.939,5.955,6.572.955-4.755,4.635,1.123,6.545Z" transform="translate(2 3)" fill="none" stroke="#eba421" stroke-miterlimit="10" stroke-width="1.5"/>
</svg>
`;



const EmptyStar = (props: StarProp)=>{
        const handleOnPress = ()=>{
            props.onClick(props.position);
        }
    return(
        <Pressable
        onPress={handleOnPress}>
            <SvgXml xml={xml} width={35} height={35}/>
        </Pressable>
        
    )
}

export default EmptyStar;