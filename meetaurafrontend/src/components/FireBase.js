import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyAhmVquLjuOxVmeT61GSnH4JlXeg1K2f6s",
    authDomain: "learning-firebase-f1ff8.firebaseapp.com",
    projectId: "learning-firebase-f1ff8",
    storageBucket: "learning-firebase-f1ff8.appspot.com",
    messagingSenderId: "856753374199",
    appId: "1:856753374199:web:affe74c92430cc3cf6e4f2",
  databaseURL:"https://learning-firebase-f1ff8-default-rtdb.firebaseio.com"
  
};

  export const app=initializeApp(firebaseConfig)