// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAOSbG8j5zI6C_Q62uCV0AgjMe-CvgZv-o",
    authDomain: "restaurant-e9c61.firebaseapp.com",
    projectId: "restaurant-e9c61",
    storageBucket: "restaurant-e9c61.appspot.com",
    messagingSenderId: "602154195655",
    appId: "1:602154195655:web:8b6e1575a2a41566eb3ce2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
