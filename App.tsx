/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileMidgard from './views/ProfileMidgard';
import Inicio from './views/Inicio';
import KeanuProfile from './views/KeanuProfile';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return(
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
        />
        <Stack.Screen
          name="Perfil"
          component={ProfileMidgard}
        />
        <Stack.Screen
          name="Keanu"
          component={KeanuProfile}
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
 
}



export default App;
