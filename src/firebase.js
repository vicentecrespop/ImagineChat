import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCyuOnZB3frEcqcwfZRC02siX-HKny1m4A",
    authDomain: "unichat-2d5cf.firebaseapp.com",
    projectId: "unichat-2d5cf",
    storageBucket: "unichat-2d5cf.appspot.com",
    messagingSenderId: "887220127603",
    appId: "1:887220127603:web:21c0f21b27395adef86706"
  }).auth();