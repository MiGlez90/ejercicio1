import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

firebase.initializeApp({
	apiKey: "AIzaSyCgdhR6u5F2QUie8Ysatw496AGLuuigDMc",
    authDomain: "ejercicio1-43fab.firebaseapp.com",
    databaseURL: "https://ejercicio1-43fab.firebaseio.com",
    projectId: "ejercicio1-43fab",
    storageBucket: "",
    messagingSenderId: "165485868080"
});

ReactDOM.render(<App />, document.getElementById('root'));

