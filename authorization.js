const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDyfRulOLslISbQ0vMrbTHMlPyQKfDIrIQ",
    authDomain: "polina-english-platform.firebaseapp.com",
    projectId: "polina-english-platform",
    storageBucket: "polina-english-platform.appspot.com",
    messagingSenderId: "304028741044",
    appId: "1:304028741044:web:c858a0d75ca207139156e1",
    measurementId: "G-TFN1901BHS"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
    const email = document.getElementById ("login").value
    const password = document.getElementById ("password").value
    auth.createUserWithEmailAndPassword (email, password)
    .then ((res) => {
        console.log (res.user)
    })
    .then ((err) => {
        aler (err.message)
        console.log (err.message)
        console.log (err.code)
    })
}

const login = () => {
    const email = document.getElementById ("login").value
    const password = document.getElementById ("password").value
    auth.signInWithEmailAndPassword (email, password)
    .then ((res) => {
        console.log (res.user)
        return window.location.href = "main-page.html";
    })
    .then ((err) => {
        console.log (err.message)
        console.log (err.code)
        alert ("Неверный логин или пароль")
    })
}