import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registeration from './screen/Registration';
import Otp_auth from './screen/Otp-auth';
import QR_page from './screen/QR_page';

const Stack = createNativeStackNavigator();

export default function Navigation({navigation}) {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Register" >
        <Stack.Screen name="Register" component={Registeration} options={{headerShown: false}}  />
        <Stack.Screen name="OTP-auth" component={Otp_auth} options={{headerShown: false}}/>
        <Stack.Screen name="QR_code_Page" component={QR_page} options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}