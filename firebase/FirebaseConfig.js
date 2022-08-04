import * as firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyBtxo9fnUO7Pg6Ef10mIYje6d-J-TtsCN4",
    authDomain: "dataitem-74903.firebaseapp.com",
    databaseURL: "https://dataitem-74903-default-rtdb.firebaseio.com",
    projectId: "dataitem-74903",
    storageBucket: "dataitem-74903.appspot.com",
    messagingSenderId: "806751705603",
    appId: "1:806751705603:web:59e473d946fca4c1b40c36",
    measurementId: "G-M8CL8WHBGW"
  };
  export const firebaseApp = firebase.initializeApp(firebaseConfig)