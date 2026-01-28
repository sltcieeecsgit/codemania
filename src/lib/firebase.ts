import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA1qGrUsYHRItiEjlKfJ2Pv7oo7vFFFGFg",
    authDomain: "codemaniav6.firebaseapp.com",
    projectId: "codemaniav6",
    storageBucket: "codemaniav6.firebasestorage.app",
    messagingSenderId: "162022594926",
    appId: "1:162022594926:web:8c9402b1b83d2f5456497f",
    measurementId: "G-X4ZL2NQVW7"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
