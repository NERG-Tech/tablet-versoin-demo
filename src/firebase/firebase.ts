// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  setPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
  signOut,
  updateProfile,
  updateEmail,
  updatePassword,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from 'firebase/auth';

import {getFirestore, Timestamp} from 'firebase/firestore';

import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  updateDoc,
  deleteField,
} from 'firebase/firestore';
import {getFunctions, httpsCallable} from 'firebase/functions';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyCvkUuOVFyD_B2a7KAvxywQkIK1eC67bKE',
  authDomain: 'nerg-one.firebaseapp.com',
  projectId: 'nerg-one',
  storageBucket: 'nerg-one.appspot.com',
  messagingSenderId: '765501377766',
  appId: '1:765501377766:web:6cf6cb09c7a5537186bf27',
  measurementId: 'G-6507QF8CEZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export {
  orderBy,
  limit,
  functions,
  Timestamp,
  httpsCallable,
  app,
  auth,
  db,
  getDoc,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  collection,
  addDoc,
  setDoc,
  doc,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  setPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
  signOut,
  updateProfile,
  updateEmail,
  updatePassword,
  getDocs,
  query,
  where,
  startAfter,
  updateDoc,
  deleteField,
  isSignInWithEmailLink,
  signInWithEmailLink,
  getAuth,
};
