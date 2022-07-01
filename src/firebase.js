import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCFu50NQGr-jm9qpD5oxS7B1JJovsUaq4M",
    authDomain: "jolock-6a462.firebaseapp.com",
    databaseURL: "https://jolock-6a462-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "jolock-6a462",
    storageBucket: "jolock-6a462.appspot.com",
    messagingSenderId: "690505327861",
    appId: "1:690505327861:web:33624ea3a17ad9589011bc",
    measurementId: "G-PM4Z8EDF0R"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;