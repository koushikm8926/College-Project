import React,{useState,useRef} from "react";
import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet
} from "react-native";


import firebase from 'firebase/compat/app';
import { firebaseConfig } from '../config';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


function Otp_auth({route,navigation}) {
    const recaptchaVerifier = useRef(null);
    
    const [phonecode, setPhonecode]=useState('')
    const [error, setError] = useState("");


  const [check,setCheck]=useState({
    verifyMail:"false",
    verifyPhone:"false"
  })
  const [PhoneVeriytext , setPhoneVeriytext]=useState("verify")

  const verification=route.params.paramKey
  const regData=route.params.paramKey2

  const checked = () => {
    if (phonecode=="") {
        setError("Please Enter All fild")
        alert(error)
    }
    else{
        navigate()
    }
}

const ResendVerification = async () => {
    setPhoneVeriytext("Verify")
    setCheck({...check,verifyPhone:"false"})
    setPhonecode("")

    try {

        const phoneProvider = new firebase.auth.PhoneAuthProvider();

        await phoneProvider.verifyPhoneNumber(regData.phoneNumber, recaptchaVerifier.current)
        alert("OTP send again ")
        
    }

    catch (e) {
        console.log(e)
        alert(e)
    }
};
 
  
    const confirmCodePhone = async () => {
        try {
            const credential = firebase.auth.PhoneAuthProvider.credential(verification, phonecode);

            await firebase.auth().signInWithCredential(credential).then(() => { 

                
              setCheck({...check,verifyPhone:"true"})
              setPhoneVeriytext("Verified")
              console.log(check.verifyPhone)
              

            })

        } 
        catch (e) {
            console.log(e)
            if(PhoneVeriytext=="Verified"){
                setError("The SMS code has expired. Please re-send the verification code to try again.")
            }
            else{
                setError(e)
            }
            alert(error)
        }
    }

   const navigate=()=>{
    if(check.verifyMail=="false"&&check.verifyPhone=="true"){

      navigation.navigate("QR_code_Page",{paramKey:regData})
    }
    else{
      alert("Please Enter Otp")
    }
   }
    return (

        
      
        <KeyboardAwareScrollView ShowsVerticalScrollIndicator={false}>
            <FirebaseRecaptchaVerifierModal
                    style={{ margin: 100 }}
                    ref={recaptchaVerifier}
                    firebaseConfig={firebaseConfig}

                />
        <SafeAreaView
         style={
            {
                flex: 1,
                backgroundColor: 'whitesmoke',
                
            }
        }>
           
            <View style={
                {
                    height: "40%",
                    backgroundColor: '#a3c7c7',
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40
                }
            }>
                {/* <Image source={require('../assets/logo.png')} style={{height:100, width:100, marginLeft:140, marginTop:40, borderRadius:50}}></Image> */}
                <Text style={
                    {
                        paddingTop:"20%",
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: 'white',
                        marginLeft: 20
                    }
                }>
                    OTP
                </Text>
                <Text style={
                    {
                        fontSize: 20,
                        color: 'white',
                        marginLeft: 22,
                        marginTop: 10
                    }
                }>Verification</Text>

                <View style={
                    {
                        alignSelf:"center",

                        height: 500,
                        width: 350,
                        backgroundColor: 'whitesmoke',
                        borderRadius: 30,
                        marginTop: 100,
                        marginLeft: "auto",
                        marginRight:"auto",
                        padding: 20,
                        borderWidth: 2,
                        borderColor: '#a3c7c7'
                    }
                }>


                    <Text style={
                        styles.text2
                    }>Enter Mail OTP
                    </Text>

                    <TextInput placeholder="XXXXXX"
                        style={
                            styles.input
                    }></TextInput>

                    <TouchableOpacity style={
                        styles.button1
                    }>

                        <Text style={
                            styles.text3
                        }>Resend</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={
                        styles.button2
                    }>

                        <Text style={
                            styles.text4
                        }>Verify</Text>
                    </TouchableOpacity>

                    <Text style={
                        styles.text2
                    }>Enter Phone OTP
                    </Text>


                    <TextInput placeholder="XXXXXX"
                        style={
                            styles.input
                    }
                    value={phonecode}
                    onChangeText={phonecode=>setPhonecode(phonecode)} 
                    ></TextInput>


                    <TouchableOpacity style={
                        styles.button1
                    }
                    onPress={ResendVerification}>

                        <Text style={
                            styles.text3
                        }>Resend</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={
                        styles.button2
                    }
                    onPress={confirmCodePhone}>

                        <Text style={
                            styles.text4
                        }>{PhoneVeriytext}</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={
                        styles.button5
                    }
                    onPress={checked}>

                        <Text style={
                            styles.text5
                        }>Generate QR Code</Text>
                    </TouchableOpacity>


                </View>
            </View>

        </SafeAreaView>
        </KeyboardAwareScrollView>

    )
}
export default Otp_auth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke'
    },
    text1: {
        fontSize: 30,
        marginLeft: 20,
        marginTop: 100
    },
    text2: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 32,
        marginTop: 50
    },
    input: {
        fontSize: 20,
        height: 40,
        width: 300,
        marginLeft: 0,
        paddingLeft: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: '#a3c7c7',
        borderWidth: 3
    },
    button1: {
        height: 40,
        width: 120,
        backgroundColor: 'white',
        marginLeft: 20,
        marginTop: 30
    },
    button2: {
        height: 40,
        width: 120,
        backgroundColor: '#a3c7c7',
        marginLeft: 170,
        marginTop: -40
    },
    text3: {
        textAlign: 'center',
        paddingTop: 6,
        fontSize: 18,
        fontWeight: 'bold'
    },
    text4: {
        textAlign: 'center',
        paddingTop: 6,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    button5: {
        height: 40,
        width: 200,
        backgroundColor: '#a3c7c7',
        marginLeft: 50,
        marginTop: 20

    },
    text5: {
        textAlign: 'center',
        paddingTop: 6,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }

})
