import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyAjLSELcvxvvmb7qb9yIpirbzZVElmA30A",
    authDomain: "man-city-1091c.firebaseapp.com",
    databaseURL: "https://man-city-1091c.firebaseio.com",
    projectId: "man-city-1091c",
    storageBucket: "man-city-1091c.appspot.com",
    messagingSenderId: "488759095984"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}