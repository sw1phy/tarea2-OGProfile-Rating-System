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

const ProfileMidgard = ({navigation}) =>{

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
              <Image style={styles.fotoPerfil} source={require('../img/MidgardImg.jpg')}/>
              <Rating
                  rate={calification}
                  onRateChange={handleRateChange}
                />
              <View>

                <Text style={styles.profileText}>Midgard Said Amador Varela</Text>
                <Text style={styles.texth2}>Nacido el 7 de junio de 2003 en el pintoresco pueblo de Yuscarán, El Paraíso.</Text>
                <Text style={styles.texth3}>Es un estudiante universitario de 20 años. Sus principales pasatiempos incluyen desde dedicarse a la cultura en todas sus variantes hasta el ocio, aspecto ineludible de la vida cotidiana.</Text>
                <Text style={styles.texth3}>En la lectura, disfruta leer particularmente las obras de H. P. Lovecraft, padre del horror cósmico.</Text>
                <Text style={styles.texth3}>Su novela favorita es Metro 2033, de Dmitry Glukhovsky, y para alimentar el bagaje cultural, prefiere la colección "Para dummies", así como la editorial O'Reilly para formarse en su área profesional (Ing. en Infotecnología).</Text>
                <Text style={styles.texth3}>El mundo moderno es el mundo del ocio, para entrenerse, a menudo Midgard toma asiento para mirar una que otra serie de ánime, leer manga o jugar un videojuego (gachas, metroidvanias, fps). Su serie de ánime y manga favoritos son Steins;Gate y Monster.</Text>
                <Text style={styles.texth3}>Su género musical favorito es el city-pop.</Text>
    
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
      backgroundColor: '#6f71cb'
  
  
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

  export default ProfileMidgard;