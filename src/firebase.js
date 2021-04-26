import firebase from 'firebase';


  const firebaseConfig = {
    apiKey: "AIzaSyD6pcyYeDm9aYi5wP4ONRRtbmT35ckgGcw",
    authDomain: "disneyplus-clone-ca6be.firebaseapp.com",
    projectId: "disneyplus-clone-ca6be",
    storageBucket: "disneyplus-clone-ca6be.appspot.com",
    messagingSenderId: "424998499559",
    appId: "1:424998499559:web:46a0f9339860a5b24c5e42"
  };
 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


  export { auth, provider, storage };
  export default db;