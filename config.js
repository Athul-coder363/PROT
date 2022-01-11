import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyByCJ4x8Uwo8Ap6b6IG91r11YbXU1ggXkE",
    authDomain: "newsletter-fba82.firebaseapp.com",
    databaseURL: "https://newsletter-fba82-default-rtdb.firebaseio.com",
    projectId: "newsletter-fba82",
    storageBucket: "newsletter-fba82.appspot.com",
    messagingSenderId: "946200980392",
    appId: "1:946200980392:web:44371c6d02d0e911458b9d"
  };

  firebase.InitaializeApp(firebaseConfig)
  export default firebase.firestore();