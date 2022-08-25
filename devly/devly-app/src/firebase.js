import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyDDGUsl3ru1PWtHv5_A1NW3Oc2TOLXqQJo",
    authDomain: "gamebro-4775d.firebaseapp.com",
    projectId: "gamebro-4775d",
    storageBucket: "gamebro-4775d.appspot.com",
    messagingSenderId: "769710796422",
    appId: "1:769710796422:web:cb71d5978939b4ffc92b07"
  };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const database = firebaseApp.firestore();
    
    export default database;