
import React,{ useState } from "react";
import { styles } from "../styles/login page style";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { 
    View, 
    Text,
    TouchableOpacity, 
    SafeAreaView ,
    TextInput,ScrollView} from "react-native";
  
    import QRCode from 'react-native-qrcode-svg';


function QR_page({route}) {
    const data=route.params

  return (
    <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center"}} >
         <QRCode 
      value={JSON.stringify(data.paramKey)}
      logoSize={200}
      size={190}
      color="black"
    />
    <View>
   {/* <Text>{JSON.stringify(data)}</Text> */}
    </View>

    </SafeAreaView>
  )
}

export default QR_page
