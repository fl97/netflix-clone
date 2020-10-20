import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC9u0DmsgK0ouMXpT8AmGFMt-eBW2CgvGU",
    authDomain: "netflix-clone-792d1.firebaseapp.com",
    databaseURL: "https://netflix-clone-792d1.firebaseio.com",
    projectId: "netflix-clone-792d1",
    storageBucket: "netflix-clone-792d1.appspot.com",
    messagingSenderId: "967521821761",
    appId: "1:967521821761:web:4d28222ee72785385952c0",
    measurementId: "G-ND9E8LFG9L"
}

const firebase = Firebase.initializeApp(config)

export {firebase}