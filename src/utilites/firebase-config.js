import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtj3efBB9dtErpykjaxPuHgXr0TRWXFlc",
  authDomain: "house-marketplace-app-809ce.firebaseapp.com",
  projectId: "house-marketplace-app-809ce",
  storageBucket: "house-marketplace-app-809ce.appspot.com",
  messagingSenderId: "1045408828270",
  appId: "1:1045408828270:web:fae967c5cb534e9edd8f7f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();