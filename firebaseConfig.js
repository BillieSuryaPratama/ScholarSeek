import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCSZxPDo7I4E52QJp8qvLHmiN4U9bU2NDU",
    authDomain: "scholarseek-9e701.firebaseapp.com",
    projectId: "scholarseek-9e701",
    storageBucket: "scholarseek-9e701.firebasestorage.app",
    messagingSenderId: "981837603249",
    appId: "1:981837603249:web:3303045ab5cd7b00ad9d90"
  };

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app)
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
