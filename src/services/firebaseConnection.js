import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCvaoUTY8LDRw117ZvZcglJwDkSZYDnpYY",
    authDomain: "meuapp-15b98.firebaseapp.com",
    projectId: "meuapp-15b98",
    storageBucket: "meuapp-15b98.appspot.com",
    messagingSenderId: "208365258004",
    appId: "1:208365258004:web:dfca693ec9cbeb13a46e01",
    measurementId: "G-YYSKZY6CKJ"
};

if (!firebase.apps.length) {
    // Abrir minha conexão
    firebase.initializeApp(firebaseConfig);
}

export default firebase;