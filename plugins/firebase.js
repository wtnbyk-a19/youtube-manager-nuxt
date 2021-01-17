import firebase from "firebase/app";
import "firebase/auth"

if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCOkNErQY-4kbckP4GdFx9DNFwhydZWQMw",
        authDomain: "manager-49220.firebaseapp.com",
        databaseURL: "https://manager-49220.firebaseio.com",
        projectId: "manager-49220",
        storageBucket: "",
        messagingSenderId: "983113205304",
        appId: "1:983113205304:web:f03a5e605369823ae188cd"
    })
}

export default firebase;