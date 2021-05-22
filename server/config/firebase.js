const firebase = require('firebase')
require('firebase/database');
var firebaseConfig = {
    apiKey: "AIzaSyCHr_FqKER__XR8ptVozAV29_imwCcde5c",
    authDomain: "diploma-38b59.firebaseapp.com",
    databaseURL: "https://diploma-38b59-default-rtdb.firebaseio.com",
    projectId: "diploma-38b59",
    storageBucket: "diploma-38b59.appspot.com",
    messagingSenderId: "652370882400",
    appId: "1:652370882400:web:67896b0b80bd635b947805"
};

firebase.initializeApp(firebaseConfig);

module.exports = {
    testsDb: firebase.database().ref("tests/")
}