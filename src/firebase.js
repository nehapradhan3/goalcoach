import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyAdkGARsrXy0VPtRrAv-6j1nWe5-d83Sjw",
  authDomain: "goalcoach-953d5.firebaseapp.com",
  databaseURL: "https://goalcoach-953d5.firebaseio.com",
  projectId: "goalcoach-953d5",
  storageBucket: "",
  messagingSenderId: "934199254711"
};


export const firebaseApp = firebase.initializeApp(config);
export const goalRef= firebase.database().ref('goals');
