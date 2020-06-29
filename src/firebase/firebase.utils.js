import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDmyOiAZaid5l7_zKjvFltq8uFuNJRd-3Q",
  authDomain: "crown-db-583c9.firebaseapp.com",
  databaseURL: "https://crown-db-583c9.firebaseio.com",
  projectId: "crown-db-583c9",
  storageBucket: "crown-db-583c9.appspot.com",
  messagingSenderId: "103153829641",
  appId: "1:103153829641:web:df9e2752cf43b98a0a75d8",
  measurementId: "G-FB0ZGE6WHK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;