import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const Config =

{
    apiKey: "AIzaSyDgzagtw-_HFOAhFkjxwp10BiAEvuKtj_o",
    authDomain: "crown-clothingdb-8422f.firebaseapp.com",
    databaseURL: "https://crown-clothingdb-8422f.firebaseio.com",
    projectId: "crown-clothingdb-8422f",
    storageBucket: "crown-clothingdb-8422f.appspot.com",
    messagingSenderId: "257704513220",
    appId: "1:257704513220:web:54b6cce73c6c168e610391",
    measurementId: "G-8LJZ3M884H"
}

firebase.initializeApp(Config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;