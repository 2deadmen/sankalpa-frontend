// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth,GoogleAuthProvider, signInWithPopup,FacebookAuthProvider,GithubAuthProvider,RecaptchaVerifier  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBv9KQlXK1j9npTbwDLTWwWuWFf-KLyJ4A",
    authDomain: "sankalpa-b7b13.firebaseapp.com",
    projectId: "sankalpa-b7b13",
    storageBucket: "sankalpa-b7b13.appspot.com",
    messagingSenderId: "248021982260",
    appId: "1:248021982260:web:85043a5580a4f5b1cd3e61",
    measurementId: "G-777FHJ9472"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const  auth = getAuth(app);
export{auth,storage}
