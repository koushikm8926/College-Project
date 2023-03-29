import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './component/login';
import Otp_auth from './component/Otp-auth';
import QR_page from './component/QR_page';

const Stack = createNativeStackNavigator();

export default function Navigation({navigation}) {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Register" >
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}  />
        <Stack.Screen name="OTP-auth" component={Otp_auth} options={{headerShown: false}}/>
        <Stack.Screen name="QR_code_Page" component={QR_page} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}