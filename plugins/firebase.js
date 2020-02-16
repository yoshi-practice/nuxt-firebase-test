import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBz_swn6c1J65lIC_iU2FRXNHJb9CHCmdo",
  authDomain: "vue-firebase-chat-1d461.firebaseapp.com",
  databaseURL: "https://vue-firebase-chat-1d461.firebaseio.com",
  projectId: "vue-firebase-chat-1d461",
  storageBucket: "vue-firebase-chat-1d461.appspot.com",
  messagingSenderId: "734294508397",
  appId: "1:734294508397:web:15d2b008c5d2c1bedad064",
  measurementId: "G-EB79DW2QEK"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase
