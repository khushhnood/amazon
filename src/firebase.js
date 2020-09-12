
import firebase from 'firebase'
const dotenv = require('dotenv')
dotenv.config();

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATA_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASURE_ID
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db =  firebaseApp.firestore();
  const auth =  firebaseApp.auth()

  export { db , auth};