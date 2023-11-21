// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
   GoogleAuthProvider,
   getAuth,
   signInWithPopup,
   signInWithEmailAndPassword,
   createUserWithEmailAndPassword,
   sendPasswordResetEmail,
   signOut,
  } from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvyCXQ6Be-DYnY8BbO9iP2HHTQSFmybIM",
    authDomain: "eventrov-events.firebaseapp.com",
    databaseURL: "https://eventrov-events-default-rtdb.firebaseio.com",
    projectId: "eventrov-events",
    storageBucket: "eventrov-events.appspot.com",
    messagingSenderId: "461267172849",
    appId: "1:461267172849:web:32d31bba9048a4e2e2d850",
    measurementId: "G-NS3RK3MZDN"
};

// apiKey: process.env.REACT_API_KEY,
// authDomain: process.env.REACT_AUTH_DOMAIN,
// databaseURL: process.env.REACT_DATABASE_URL,
// projectId: process.env.REACT_PROJECT_ID,
// storageBucket: process.env.REACT_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_ID,
// measurementId: process.env.REACT_MEASUREMENT_ID,

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  app,
  auth,
  db,
  storage,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};