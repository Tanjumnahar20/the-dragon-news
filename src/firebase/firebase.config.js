// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9ibqVl15y2WUl3-azEMRLjDld09MUK2M",
  authDomain: "the-dragon-news-c6f61.firebaseapp.com",
  projectId: "the-dragon-news-c6f61",
  storageBucket: "the-dragon-news-c6f61.appspot.com",
  messagingSenderId: "646715914641",
  appId: "1:646715914641:web:6de55ff23e4719a3278230"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;