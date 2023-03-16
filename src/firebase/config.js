import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyA1W9zksbNTZvw2AU1qiOBWY9XOZAPwjDw",
    authDomain: "thedojosite-60d7f.firebaseapp.com",
    projectId: "thedojosite-60d7f",
    storageBucket: "thedojosite-60d7f.appspot.com",
    messagingSenderId: "764259905320",
    appId: "1:764259905320:web:bda44acd8eae7a9b28ea1d"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }