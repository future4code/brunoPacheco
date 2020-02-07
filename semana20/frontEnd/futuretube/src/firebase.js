import * as firebase from "firebase/app";
import "firebase/firestore";

export function InitializeFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyAoLFG8PasjN4j-UgCpVh7qw6LKdMyoyl4",
        authDomain: "futuretube-bruno.firebaseapp.com",
        databaseURL: "https://futuretube-bruno.firebaseio.com",
        projectId: "futuretube-bruno",
        storageBucket: "futuretube-bruno.appspot.com",
        messagingSenderId: "471299757135",
        appId: "1:471299757135:web:bae405c4e2eabe0bf3863a",
        measurementId: "G-5WNT3WJ0ZB"
    };

    firebase.initializeApp(firebaseConfig);
}
