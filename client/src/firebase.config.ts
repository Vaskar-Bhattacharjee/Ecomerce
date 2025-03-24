// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1lCfEDBhfxSSpOS-0jBfs-kOOU8DgM88",
  authDomain: "hatbazar-b6c33.firebaseapp.com",
  projectId: "hatbazar-b6c33",
  storageBucket: "hatbazar-b6c33.firebasestorage.app",
  messagingSenderId: "322184718174",
  appId: "1:322184718174:web:2347c7a01808f4e52751cf",
  measurementId: "G-1ZGR2R5FY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;