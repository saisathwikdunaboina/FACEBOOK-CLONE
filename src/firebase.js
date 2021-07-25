import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAUGawwPfhzb_EHexFZqveRcXjQPdaFiJM",
    authDomain: "facebook-clone-496f8.firebaseapp.com",
    projectId: "facebook-clone-496f8",
    storageBucket: "facebook-clone-496f8.appspot.com",
    messagingSenderId: "776600723514",
    appId: "1:776600723514:web:31956570ecab5a6b481503",
    measurementId: "G-DH1FVEZCD9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;