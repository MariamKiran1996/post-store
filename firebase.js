// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdebYYwMupupVwDYy0KQepqXuFpEvJL3Q",
  authDomain: "cloud-functions-test-361706.firebaseapp.com",
  projectId: "cloud-functions-test-361706",
  storageBucket: "cloud-functions-test-361706.appspot.com",
  messagingSenderId: "985973427089",
  appId: "1:985973427089:web:d62a67b85b15839b61a830",
  measurementId: "G-WY60BZKHP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);