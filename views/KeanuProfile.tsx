import React, {useState} from 'react';
import { Button } from "react-native";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
  } from 'react-native';
import Rating from '../components/evaluacion/Rating';

const KeanuProfile = ({navigation}) =>{


    const handlePress = ()=>{
      navigation.navigate('Inicio');
    }




  const [calification, setCalification] = useState(0);
  const handleRateChange = (rate:number)=>{
    if(calification == 1 && rate == 1){
      setCalification(0);
    }else{
      setCalification(rate);   
    }
  }
    return (
        <SafeAreaView>
          <ScrollView contentContainerStyle={styles.svContenedor}
            contentInsetAdjustmentBehavior="automatic">
              <Image style={styles.fotoPerfil} source={require('../img/KeanuImg.jpg')}/>
              <Rating
                  rate={calification}
                  onRateChange={handleRateChange}
                />
              <View>
                <Text style={styles.profileText}>Keanu Charles Reeves</Text>
                <Text style={styles.texth2}>Nacimiento: 2 de septiembre de 1964.</Text>
                <Text style={styles.texth3}>(Keanu Charles Reeves; Beirut, Líbano, 1964) Actor de cine estadounidense. De padre chino-hawaiano y de madre británica, Keanu Reeves creció en Toronto y se trasladó a los 16 años a Los Ángeles para trabajar como actor. De hecho ya antes, durante su estancia en Canadá, había actuado en el Theatre Arts High School. </Text>
                <Text style={styles.texth3}>Sus primeras interpretaciones tuvieron lugar en series de televisión como Hanging. A los veintidós años debutó en el cine: en las películas Flying (1986), de Paul Lynch, y Forja de campeones (1986), de Peter Markle, se le asignaron papeles secundarios y de no mucha calidad. También participó como secundario en Las amistades peligrosas (1988), de Stephen Frears, película de gran éxito basada en la novela homónima de Pierre Choderlos de Laclos que reunió en su momento a una serie de actores destinados a lograr un gran prestigio en los años sucesivos (Michelle Pfeiffer, Uma Thurman y el propio Reeves). </Text>
                <Text style={styles.texth3}>Su popularidad alcanzó la cota máxima con Matrix (1999), dirigida por los hermanos Wachowski, que fue uno de los éxitos del año. En la película, Keanu Reeves encarna el papel de un especialista en informática que se da cuenta de que la humanidad está manejada por una serie de ordenadores malignos.</Text>
            </View>

            <Button
                title='Volver a Inicio'
                onPress={handlePress}
                />
    
    
            </ScrollView>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    profileText:{
      fontSize:24,
      fontWeight: 'bold',
      color: 'black',
      textAlignVertical: "center",
      textAlign: "center",
  
    },
    svContenedor:{
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#ad5e6f'
  
  
    },
    fotoPerfil:{
      margin: 15,
      width:220,
      height:240,
      borderColor: 'white',
      borderWidth: 2
    },
    texth2:{
      fontSize: 20,
      color: 'black',
      textAlignVertical: "center",
      textAlign: "center",
      fontStyle: 'italic',
      marginTop: 20,
      margin: 12,
      
    },
  
    texth3:{
      fontSize: 21,
      color: 'black',
      marginStart: 12,
      marginTop: 20,
      marginBottom: 10,
    }
   
  });

  export default KeanuProfile;
  