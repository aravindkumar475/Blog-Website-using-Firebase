import {initializeApp} from "firebase/app"

import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAHXn6ERnhqqbc5RcRql6dGtXBdSxqTd_E",
  authDomain: "blog-49e39.firebaseapp.com",
  projectId: "blog-49e39",
  storageBucket: "blog-49e39.appspot.com",
  messagingSenderId: "122561713064",
  appId: "1:122561713064:web:e10cf0814df3ffd643c39d",
};

initializeApp(firebaseConfig);

const db=getFirestore()

export {db}