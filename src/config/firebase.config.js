import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFixGhVzBmsx0SQTUN3IGE92s8r9_FNqY",
  authDomain: "practo-56a3a.firebaseapp.com",
  projectId: "practo-56a3a",
  storageBucket: "practo-56a3a.appspot.com",
  messagingSenderId: "57244654288",
  appId: "1:57244654288:web:30ffb631769d0d8727dcd5",
  measurementId: "G-2KMTQC7Z4M",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCV3E1HORYIIyyPkc6cE887tJ6GBsqu3IA",
//   authDomain: "pactro-b81fd.firebaseapp.com",
//   projectId: "pactro-b81fd",
//   storageBucket: "pactro-b81fd.appspot.com",
//   messagingSenderId: "1086342004977",
//   appId: "1:1086342004977:web:81fa602739af6c0d272950",
//   measurementId: "G-QKQ3M56JK0",
// };

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
