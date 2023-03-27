import React from "react";
import { styles } from "../styles/login page style";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { 
    View, 
    Text,
    TouchableOpacity, 
    SafeAreaView ,
    TextInput} from "react-native";

import { SelectList } from 'react-native-dropdown-select-list'
import { useState } from "react";

export default function Register({navigation}){

    const [selected, setSelected] = React.useState("");

    const data = [
        {key:'1', value:'Male',},
        {key:'2', value:'Female'},
        {key:'4', value:'Other',},  
    ]

    return(
    <SafeAreaView style={{flex:1,justifyContent:"center",}}>   
        <View style={{marginHorizontal:25}}>
        
        <Text style={styles.loginText}>Registration Form</Text>
        

        <View style={styles.inputview}>
        <MaterialIcons name="person" size={20} color="blue" style={{marginRight:10,padding:5,}}/>
        <TextInput placeholder="First Name" style={styles.TextInput} keyboardType="email-address"/>    
        </View>
        
        <View style={styles.inputview}>
        <MaterialIcons name="person" size={20} color="blue" style={{marginRight:10,padding:5,}}/>
        <TextInput placeholder="Last Name" style={styles.TextInput} keyboardType="email-address"/>    
        </View>

        <View style={styles.inputview}>
        <MaterialIcons name="phone" size={20} color="blue" style={{marginRight:10,padding:5,}}/>
        <TextInput placeholder="Phone number" style={styles.TextInput} keyboardType="numeric"/>
        </View>

       <View style={{flexDirection:'row',alignItems:'center',}}>
       <MaterialIcons name="person" size={20} color="blue" style={{marginRight:10,}}/>
       <Text style={{marginRight:20,}}>Select gender</Text>
     
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        />
       
        </View>
      

        <View style={[styles.inputview,{marginTop:20}]}>
        <MaterialIcons name="email" size={20} color="blue" style={{marginRight:10,padding:5,}}/>
        <TextInput placeholder="Email" style={styles.TextInput} keyboardType="email-address"/>    
        </View>

        <View style={styles.inputview}>
        <Ionicons name="ios-lock-closed" size={20} color="blue" style={{marginRight:10,padding:5,}}/>
        <TextInput placeholder="Password" style={styles.TextInput}  secureTextEntry={true} /> 
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('')} style={styles.loginButton}>
        <Text style={styles.loginbuttonText}>Register</Text>
        </TouchableOpacity>  

            
    </View>
    </SafeAreaView>
    );
}
