// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "your-space-4b198.firebaseapp.com",
  projectId: "your-space-4b198",
  storageBucket: "your-space-4b198.appspot.com",
  messagingSenderId: "927029518528",
  appId: "1:927029518528:web:65d150708a14e08c694d25"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
