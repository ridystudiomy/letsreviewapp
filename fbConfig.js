import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const Config = {
    apiKey: "AIzaSyBXYtP1EBmb_wa63uGev83YpnRv0nsMec8",
    authDomain: "appreviews-5ab8e.firebaseapp.com",
    databaseURL: "https://appreviews-5ab8e.firebaseio.com",
    projectId: "appreviews-5ab8e",
    storageBucket: "appreviews-5ab8e.appspot.com",
    messagingSenderId: "259036874061",
    appId: "1:259036874061:web:7d7c77a8d46a4b3ae42304",
    measurementId: "G-9ZXCB35YE2"
  };
  

const firebaseApp = firebase.initializeApp(Config);

export default firebaseApp.firestore()
