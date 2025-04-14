// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-136a6.firebaseapp.com",
  projectId: "blog-app-136a6",
  storageBucket: "blog-app-136a6.firebasestorage.app",
  messagingSenderId: "327807132074",
  appId: "1:327807132074:web:fe8fa52d9bf76638ca0bd3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
