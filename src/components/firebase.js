// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAy5Azy0FcG-9OmslW0UdjBlaW4cqhk4qU",
  authDomain: "login-auth-da7a0.firebaseapp.com",
  projectId: "login-auth-da7a0",
  storageBucket: "login-auth-da7a0.appspot.com",
  messagingSenderId: "684716958204",
  appId: "1:684716958204:web:249c4c29a4eaed8844d279",
  measurementId: "G-CSEM8X8251"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export default app;