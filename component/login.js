import React,{ useState } from "react";
import { styles,  } from "../styles/login page style";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { 
    View, 
    Text,
    TouchableOpacity, 
    SafeAreaView ,
    TextInput,ScrollView, Image} from "react-native";

import { SelectList } from 'react-native-dropdown-select-list'

export default function Register({navigation}){

    

    const [RegData,setRegData]=useState({
        Fname:"",
        Lname:"",
        phoneNumber:"",
        Email:"",
        password:"",
        gender:"",
    })

    const data = [
        {key:'1', value:'Male',},
        {key:'2', value:'Female'},
        {key:'4', value:'Other',},  
    ]

    return(
    <SafeAreaView style={{flex:1, backgroundColor:'whitesmoke'}}>  
    <View style={{
            height: 300,
            backgroundColor:'#a3c7c7',
            // backgroundColor: 'rgba(255,255,255,0.5)',
            borderBottomLeftRadius: 40, 
            borderBottomRightRadius: 40
            }}>
                <Image source={require('../assets/logo.png')} style={{height:100, width:100, marginLeft:140, marginTop:40, borderRadius:50}}></Image>
                <Text style={{fontSize:25,fontWeight:'bold', color:'white', marginLeft:20,}}> Sign in </Text>
                <Text style={{fontSize:20, color:'white', marginLeft:22, marginTop:10}}>Sign in to generate your QR Code</Text>

            <View style={{height:500, width:350, backgroundColor:'whitesmoke', borderRadius:30, marginTop:30, marginLeft:20, padding:20, borderWidth:2, borderColor:'#a3c7c7' }}>

            <View style={styles.inputview}>
        <MaterialIcons name="person" size={20} color="blue" style={{marginRight:10,padding:5,}}/>
        <TextInput placeholder="First Name" style={styles.TextInput} keyboardType="name-phone-pad" onChangeText={Fname=>setRegData({...RegData,Fname})}/>    
        </View>

        <View style={styles.inputview}>
        <MaterialIcons name="person" size={20} color="blue" style={{marginRight:10,padding:5,}}/>
        <TextInput placeholder="Last Name" style={styles.TextInput} keyboardType="name-phone-pad" onChangeText={Lname=>setRegData({...RegData,Lname})}/>    
        </View>

        <View style={styles.inputview}>
        <MaterialIcons name="phone" size={20} color="blue" style={{marginRight:10,padding:5,}}/>
        <TextInput placeholder="Phone number" style={styles.TextInput} keyboardType="numeric" onChangeText={phoneNumber=>setRegData({...RegData,phoneNumber})}/>
        </View>

        <View style={[styles.inputview,{marginTop:20}]}>
        <MaterialIcons name="email" size={20} color="blue" style={{marginRight:10,padding:5,}}/>
        <TextInput placeholder="Email" style={styles.TextInput} keyboardType="email-address" onChangeText={Email=>setRegData({...RegData,Email})}/>    
        </View>

        <View style={styles.inputview}>
        <Ionicons name="ios-lock-closed" size={20} color="blue" style={{marginRight:10,padding:5,}}/>
        <TextInput placeholder="Password" secureTextEntry={true}  style={styles.TextInput} onChangeText={password=>setRegData({...RegData,password})} /> 
        </View>

        <View style={{flexDirection:'row',alignItems:'center',}}>
       <MaterialIcons name="person" size={20} color="blue" style={{marginRight:10,}}/>
       <Text style={{marginRight:20,}}>Select gender</Text>
     
        <SelectList 
        setSelected={(gender) => setRegData({...RegData,gender})} 
        data={data} 
        save="value"
        />
       
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('OTP-auth')} style={styles.loginButton}>
        <Text style={styles.loginbuttonText}>Register</Text>
        </TouchableOpacity> 

            </View>
            </View>

    </SafeAreaView>
    );
}
