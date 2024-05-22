// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChcF04uvPVGzwaBdGB_u71aHUE3FgcfCc",
  authDomain: "netflixgpt-646ba.firebaseapp.com",
  projectId: "netflixgpt-646ba",
  storageBucket: "netflixgpt-646ba.appspot.com",
  messagingSenderId: "480098988143",
  appId: "1:480098988143:web:7d6800c7b345768e9fdd9a",
  measurementId: "G-B48L8JH0Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();