// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS00ba_Wx73BMPwl4MHeCyO6NveBId6j4",
  authDomain: "task12-a4bb7.firebaseapp.com",
  projectId: "task12-a4bb7",
  storageBucket: "task12-a4bb7.appspot.com",
  messagingSenderId: "580982270984",
  appId: "1:580982270984:web:ee09ac6ae3f1429f0475bd"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export {auth}


