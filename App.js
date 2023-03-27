import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './component/login';

const Stack = createNativeStackNavigator();

export default function Navigation() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Onboard" >
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}