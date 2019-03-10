import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCEK9P9cf8qKNLHMnpo9wj-YrKtY73CMLs",
  authDomain: "csk-project-6038e.firebaseapp.com",
  databaseURL: "https://csk-project-6038e.firebaseio.com",
  projectId: "csk-project-6038e",
  storageBucket: "csk-project-6038e.appspot.com",
  messagingSenderId: "333736632345"
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
