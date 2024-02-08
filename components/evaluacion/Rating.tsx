import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import EmptyStar from './EmptyStar';
import FilledStar from './FilledStar';

export type RateProps = {
    rate: number;
    onRateChange: any;
}

export type StarProp = {
    position: number;
    onClick: any;
}

const Rating = (props: RateProps) => {

        const handleOnClick = (position:number)=>{
            props.onRateChange(position+1) 

        }

    return <View style={styles.contenedor}>
        {props.rate==0 && <EmptyStar onClick={handleOnClick} position={0}/>}
        {props.rate>=1 && <FilledStar onClick={handleOnClick} position={0}/>}
        {props.rate < 2 && <EmptyStar onClick={handleOnClick} position={1}/>}
        {props.rate>=2 && <FilledStar onClick={handleOnClick} position={1}/>}
        {props.rate < 3 && <EmptyStar onClick={handleOnClick} position={2}/>}
        {props.rate>=3 && <FilledStar onClick={handleOnClick} position={2}/>}
        {props.rate < 4 && <EmptyStar onClick={handleOnClick} position={3}/>}
        {props.rate>=4 && <FilledStar onClick={handleOnClick} position={3}/>}
        {props.rate < 5 && <EmptyStar onClick={handleOnClick} position={4}/>}
        {props.rate>=5 && <FilledStar onClick={handleOnClick} position={4}/>}


    
        
        
        
    </View>;
}

const styles = StyleSheet.create({
    contenedor:{
        display: 'flex',
        flexDirection: 'row'
    }
})

export default Rating;