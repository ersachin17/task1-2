// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKbFNrYawj3m2_ncPSJUvpmPrY4xYnT2c",
  authDomain: "task1-cc6c3.firebaseapp.com",
  projectId: "task1-cc6c3",
  storageBucket: "task1-cc6c3.appspot.com",
  messagingSenderId: "985053274842",
  appId: "1:985053274842:web:506f14f465f21d9f7b3be3"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export {auth}
