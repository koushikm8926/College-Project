import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig ={
    apiKey: "AIzaSyC6YA2ORZ6QRSeA0ZouF-K2NEhx1DH1XN4",

    authDomain: "collage-project-41974.firebaseapp.com",
  
    projectId: "collage-project-41974",
  
    storageBucket: "collage-project-41974.appspot.com",
  
    messagingSenderId: "294403933498",
  
    appId: "1:294403933498:web:4e0838bfcbdf8be59f3c03",
  
    measurementId: "G-JCPYC1XFVH"
  
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}