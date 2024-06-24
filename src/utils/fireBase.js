// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuMwvggddv9QaA5234235Fkl5TYCsmqfw",
  authDomain: "netflixgpt-8af00.firebaseapp.com",
  projectId: "netflixgpt-8af00",
  storageBucket: "netflixgpt-8af00.appspot.com",
  messagingSenderId: "401467541090",
  appId: "1:401467541090:web:22c7c75baccfbc8e6f733b",
  measurementId: "G-PK39CNYHGY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// console.log(analytics);

export const auth = getAuth();
