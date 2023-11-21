
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBMAmJEj6MsKqUHDWP_iJcgyWvW9hTt1uI",
  authDomain: "tiendaconreact.firebaseapp.com",
  projectId: "tiendaconreact",
  storageBucket: "tiendaconreact.appspot.com",
  messagingSenderId: "734161685760",
  appId: "1:734161685760:web:ab15f5c3b7f0b5daec77e5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)