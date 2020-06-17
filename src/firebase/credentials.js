import firebase from 'firebase'
//import firestore from 'firebase/firestore'

var firebaseConfig = {
        apiKey: "AIzaSyArN43w0EpIRfedtFETJjXHxi01CLIo-OA",
        authDomain: "scheduling-nwt.firebaseapp.com",
        databaseURL: "https://scheduling-nwt.firebaseio.com",
        projectId: "scheduling-nwt",
        storageBucket: "scheduling-nwt.appspot.com",
        messagingSenderId: "635937544798",
        appId: "1:635937544798:web:643efb8d9041c624d1b2cf",
        measurementId: "G-N0G8W7XQPH"
    }

const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({timestampsInSnapshots: true})
export default firebaseApp.firestore()