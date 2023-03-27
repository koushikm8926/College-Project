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
    <SafeAreaView style={{flex:1,justifyContent:"center",}}>  
    <ScrollView style={{marginTop:60}} > 
        <View style={{marginHorizontal:25}}>
        
        <Text style={styles.loginText}>Registration Form</Text>
        

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

        <TouchableOpacity onPress={()=>navigation.navigate('')} style={styles.loginButton}>
        <Text style={styles.loginbuttonText}>Register</Text>
        </TouchableOpacity> 

        
        {/* <Text>{RegData.Fname}</Text>
        <Text>{RegData.Lname}</Text>
        <Text>{RegData.phoneNumber}</Text>
        <Text>{RegData.Email}</Text> 
        <Text>{RegData.password}</Text>
        <Text>{RegData.gender}</Text> */}

            
    </View>
    </ScrollView>
    </SafeAreaView>
    );
}
