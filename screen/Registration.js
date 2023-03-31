import React, { useState, useRef } from "react";
import { styles, } from "../styles/Registration_Css";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    TextInput, ScrollView, Image
} from "react-native";

import { SelectList } from 'react-native-dropdown-select-list'
import { firebaseConfig } from '../config';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from 'firebase/compat/app';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function Registeration({ navigation }) {


    
    
    const recaptchaVerifier = useRef(null);
    const [error, setError] = useState("");

    const [RegData, setRegData] = useState({
        Fname: "",
        Lname: "",
        phoneNumber: "",
        Email: "",
        password: "",
        gender: "",
    })

    const data = [
        { key: '1', value: 'Male', },
        { key: '2', value: 'Female' },
        { key: '4', value: 'Other', },
    ]

    const sendVerification = async () => {
        try {

            const phoneProvider = new firebase.auth.PhoneAuthProvider();

            const veriy = await phoneProvider.verifyPhoneNumber(RegData.phoneNumber, recaptchaVerifier.current)
            alert("OTP send ")
            navigation.navigate("OTP-auth", { paramKey: veriy, paramKey2: RegData })
            setVerificationId(veriy)
        }

        catch (e) {
            console.log(e)
            alert("Errorrrrrr", e)
        }
    };

    const check = () => {
        if (RegData.Fname == "" ||RegData.Lname == "" ||RegData.phoneNumber == "" ||RegData.Email == "" ||RegData.password == "" ||RegData.gender == "") {
            setError("Please Enter All fild")
            alert(error)
        }
        else{
            sendVerification()
        }
    }



    //    const confirmCode = async ()=>{

    //     try{
    //         console.log(verificationId,"lalala")
    //     const credential = firebase.auth.PhoneAuthProvider.credential(
    //         verificationId,
    //         code
    //     );

    //      await firebase.auth().signInWithCredential(credential)
    //     .then(()=>{
    //         // setcode('');
    //         navigation.navigate("QR_code_Page",{paramKey:RegData})


    //     })
    //     .catch((error)=>{
    //         //show an aleart in case of error
    //         alert(error);
    //     })

    //    }
    //    catch(e){
    //     alert("Error",e)
    //    }
    // }



    return (
        <KeyboardAwareScrollView ShowsVerticalScrollIndicator={false}>

            <SafeAreaView style={{ marginTop: 35, }}>
                <FirebaseRecaptchaVerifierModal
                    style={{ margin: 100 }}
                    ref={recaptchaVerifier}
                    firebaseConfig={firebaseConfig}

                />

                <View style={{
                    height: 800,
                    backgroundColor: '#a3c7c7',
                    // backgroundColor: 'rgba(255,255,255,0.5)',
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    alignItems: 'center',
                }}>
                    <Image source={require('../assets/logo.png')} style={{ height: 100, width: 100, marginTop: 40, borderRadius: 50 }}></Image>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', marginLeft: 20, }}>Register </Text>
                    <Text style={{ fontSize: 20, color: 'white', marginLeft: 22, marginTop: 10 }}>Register to generate your QR Code</Text>
                    {/* <ScrollView style={{height:800,}}> */}
                    <ScrollView style={{ height: 800, width: 350, backgroundColor: 'white', borderRadius: 30, marginTop: 30, padding: 20, marginBottom: 60, borderWidth: 2, borderColor: '#a3c7c7' }} showsVerticalScrollIndicator={false}>

                        <View style={styles.inputview}>
                            <MaterialIcons name="person" size={20} color="blue" style={{ marginRight: 10, padding: 5, }} />
                            <TextInput value={RegData.Fname} placeholder="First Name" style={styles.TextInput} keyboardType="name-phone-pad" onChangeText={Fname => setRegData({ ...RegData, Fname })} />
                        </View>

                        <View style={styles.inputview}>
                            <MaterialIcons name="person" size={20} color="blue" style={{ marginRight: 10, padding: 5, }} />
                            <TextInput value={RegData.Lname} placeholder="Last Name" style={styles.TextInput} keyboardType="name-phone-pad" onChangeText={Lname => setRegData({ ...RegData, Lname })} />
                        </View>

                        <View style={styles.inputview}>
                            <MaterialIcons name="phone" size={20} color="blue" style={{ marginRight: 10, padding: 5, }} />
                            <TextInput require={true} value={RegData.phoneNumber} placeholder="Phone number" style={styles.TextInput} keyboardType="phone-pad" onChangeText={phoneNumber => setRegData({ ...RegData, phoneNumber })} />
                        </View>

                        <View style={[styles.inputview]}>
                            <MaterialIcons name="email" size={20} color="blue" style={{ marginRight: 10, padding: 5, }} />
                            <TextInput value={RegData.Email} placeholder="Email" style={styles.TextInput} keyboardType="email-address" onChangeText={Email => setRegData({ ...RegData, Email })} />
                        </View>

                        <View style={styles.inputview}>
                            <Ionicons name="ios-lock-closed" size={20} color="blue" style={{ marginRight: 10, padding: 5, }} />
                            <TextInput value={RegData.password} placeholder="Password" secureTextEntry={true} style={styles.TextInput} onChangeText={password => setRegData({ ...RegData, password })} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons name="person" size={20} color="blue" style={{ marginRight: 10, }} />
                            <Text style={{ marginRight: 20, }}>Select gender</Text>

                            <SelectList
                                setSelected={(gender) => setRegData({ ...RegData, gender })}
                                data={data}
                                save="value"
                            />

                        </View>

                        <FirebaseRecaptchaVerifierModal
                            ref={recaptchaVerifier}
                            firebaseConfig={firebaseConfig}
                        />

                        <TouchableOpacity onPress={check} style={styles.loginButton}>
                            <Text style={styles.loginbuttonText}>Register</Text>
                        </TouchableOpacity>


                        {/*         
        <View style={styles.inputview}>
        <TextInput placeholder="Confirm otp" onChangeText={setcode} style={styles.TextInput} keyboardType="numeric"/>
        </View>


        <View style={{marginTop:20,}}>
            
        <TouchableOpacity style={{backgroundColor:"#42DAFF",
         height:50 , 
         width:300,
         color:"white",
        //  borderRadius:20,
         marginBottom:30,}} onPress={confirmCode}>
        <Text style={{  fontWeight:"700", 
                fontSize:16,
                textAlign:"center",
                color:"white",
                marginTop:10,}}>Confirm code</Text>
        </TouchableOpacity>  
        </View> */}


                    </ScrollView>
                    {/* </ScrollView> */}

                </View>

            </SafeAreaView>
        </KeyboardAwareScrollView>

    );
}


