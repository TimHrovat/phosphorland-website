import firebase from "firebase/compat/app";
import "firebase/compat/auth";

if (
  !(
    process.env.REACT_APP_FIREBASE_API_KEY &&
    process.env.REACT_APP_FIREBASE_AUTH_DOMAIN &&
    process.env.REACT_APP_FIREBASE_PROJECT_ID &&
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET &&
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID &&
    process.env.REACT_APP_FIREBASE_APP_ID &&
    process.env.REACT_APP_FIREBASE_DATABASE_URL
  )
)
  alert("please configure your .env file correctly");

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
});

export const auth = app.auth();
export default app;
