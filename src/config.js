import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDVO83oYIXHNgidZozTc5CfFSM6MSJ4nck",
  authDomain: "resumebuilder-39ad3.firebaseapp.com",
  projectId: "resumebuilder-39ad3",
  storageBucket: "resumebuilder-39ad3.appspot.com",
  messagingSenderId: "180513403757",
  appId: "1:180513403757:web:03e45c1fb436e92b6a2064"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;