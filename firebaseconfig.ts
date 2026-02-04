import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAHPNqjbT9e6os9yzfspGc-FygY-y4G_vI",

  authDomain: "ica4-new.firebaseapp.com",

  projectId: "ica4-new",

  storageBucket: "ica4-new.firebasestorage.app",

  messagingSenderId: "640078546248",

  appId: "1:640078546248:web:22bc22f67f47b50fa05f7d",

  measurementId: "G-RP810FW5D2"

};




export const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);


export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
