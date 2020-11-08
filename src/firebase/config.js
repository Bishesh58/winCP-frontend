import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDfLs8CW5IXEv_KpHm0GX6TcAnLL2_0E-I',
  authDomain: 'wincp-9d49a.firebaseapp.com',
  databaseURL: 'https://wincp-9d49a.firebaseio.com',
  projectId: 'wincp-9d49a',
  storageBucket: 'wincp-9d49a.appspot.com',
  messagingSenderId: '596475602299',
  appId: '1:596475602299:web:6e1f9892bf401281e249de',
  measurementId: 'G-X6MJG1T4QY',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.firestore();

export { storage, db, firebase as default };
