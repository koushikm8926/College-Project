import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig ={
    apiKey: "AIzaSyAFMFz2UnV4lx-Kl5FTUpJ2YmebT7mqVFo",
    authDomain: "otp-verification-c7ecd.firebaseapp.com",
    projectId: "otp-verification-c7ecd",
    storageBucket: "otp-verification-c7ecd.appspot.com",
    messagingSenderId: "702798100011",
    appId: "1:702798100011:web:e25b2ebe3fa0b0f5845c6e",
    measurementId: "G-0SJ8SWNRXB"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}