import { SvgXml } from "react-native-svg";
import { StarProp } from "./Rating";
import { Pressable } from "react-native";

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" fill="#eba421" width="800px" height="800px" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
`;

const FilledStar = (props: StarProp)=>{
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



export default FilledStar;