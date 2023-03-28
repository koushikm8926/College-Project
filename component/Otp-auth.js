import React from "react";
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, StyleSheet} from "react-native";

function Otp_auth({navigation}) {
  return(

    <SafeAreaView style={{flex:1, backgroundColor:'whitesmoke'}}>  
    <View style={{
            height: 300,
            backgroundColor:'#a3c7c7',
            borderBottomLeftRadius: 40, 
            borderBottomRightRadius: 40
            }}>
                {/* <Image source={require('../assets/logo.png')} style={{height:100, width:100, marginLeft:140, marginTop:40, borderRadius:50}}></Image> */}
                <Text style={{fontSize:25,fontWeight:'bold', color:'white', marginLeft:20,}}> OTP </Text>
                <Text style={{fontSize:20, color:'white', marginLeft:22, marginTop:10}}>Verification</Text>

            <View style={{height:500, width:350, backgroundColor:'whitesmoke', borderRadius:30, marginTop:100, marginLeft:20, padding:20, borderWidth:2, borderColor:'#a3c7c7' }}>
            

              <Text style={styles.text2}>Enter Mail OTP </Text>

 <TextInput placeholder="XXXXXX" style={styles.input}></TextInput>

 <TouchableOpacity style={styles.button1} > 

 <Text style={styles.text3}>Send</Text> 
 </TouchableOpacity>


 <TouchableOpacity style={styles.button2} > 

 <Text style={styles.text4}>Verify</Text> 
 </TouchableOpacity>

 <Text style={styles.text2}>Enter Phone OTP </Text>

 

 <TextInput placeholder="XXXXXX" style={styles.input}></TextInput>
 

<TouchableOpacity style={styles.button1} > 

 <Text style={styles.text3}>Send</Text> 
 </TouchableOpacity>


 <TouchableOpacity style={styles.button2} > 

 <Text style={styles.text4}>Verify</Text> 
 </TouchableOpacity>

          
 <TouchableOpacity style={styles.button5} > 

<Text style={styles.text5}>Generate QR Code</Text> 
</TouchableOpacity>


            </View>
            </View>

    </SafeAreaView>
  
  )
}
export default Otp_auth;

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'whitesmoke',
  },
  text1:{
    fontSize:30, 
    marginLeft:20, 
    marginTop:100
  },
text2:{
  fontSize:15, 
  fontWeight:'bold', 
  marginLeft:32, 
  marginTop:50, 
},
input:{
  fontSize:20,
  height:40, 
  width:300, 
  marginLeft:0, 
  paddingLeft:20, 
  backgroundColor:'white', 
  borderRadius:15, 
  borderColor:'#a3c7c7', 
  borderWidth:3, 
},
button1:{
  height:40, 
  width:120, 
  backgroundColor:'white', 
  marginLeft:20, 
  marginTop:30,  
},
button2:{
  height:40, 
  width:120, 
  backgroundColor:'#a3c7c7', 
  marginLeft:170, 
  marginTop:-40, 
},
text3:{
  textAlign:'center', 
  paddingTop:6, 
  fontSize:18,
  fontWeight:'bold',
},
text4:{
  textAlign:'center', 
  paddingTop:6, 
  fontSize:18, 
  color:'white',
  fontWeight:'bold',
},
button5:{
  height:40, 
  width:200, 
  backgroundColor:'#a3c7c7', 
  marginLeft:50,
  marginTop:20,
  
},
text5:{
  textAlign:'center', 
  paddingTop:6, 
  fontSize:18, 
  color:'white',
  fontWeight:'bold'
}

})
