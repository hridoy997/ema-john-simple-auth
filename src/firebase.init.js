// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMnglJWi3xCdknJuh8cm7QHIRSGi-CEGo",
  authDomain: "ema-john-simple-edfa1.firebaseapp.com",
  projectId: "ema-john-simple-edfa1",
  storageBucket: "ema-john-simple-edfa1.appspot.com",
  messagingSenderId: "16474400340",
  appId: "1:16474400340:web:5d2ffc80442693d9bfefc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;