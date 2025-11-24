import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBNuS0W0Tb-JlS6V4WAWM3Oz6yCbl9Gn78",
  authDomain: "aulanativerebeca.firebaseapp.com",
  projectId: "aulanativerebeca",
  storageBucket: "aulanativerebeca.firebasestorage.app",
  messagingSenderId: "745155979086",
  appId: "1:745155979086:web:116acdf63ecb7c9f82a01f",
  measurementId: "G-2Z7KZDTKYX"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);