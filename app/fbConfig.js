import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBCxIyAShmt2H9GFCic4oUj5b53gTEwMSw",
    authDomain: "chekov-yc.firebaseapp.com",
    projectId: "chekov-yc",
    storageBucket: "chekov-yc.appspot.com",
    messagingSenderId: "861407056407",
    appId: "1:861407056407:web:935c2cc40563f9b0f7c252"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);