// Firebase setup — ES module, hasilnya di-expose ke window.FB
// supaya bisa dipakai dari script.js (yang non-module).

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    addDoc,
    getDocs,
    query,
    where,
    orderBy,
    onSnapshot,
    deleteDoc,
    collection,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB9PmYeF70sCTe8wWu9BHatFNYPjdE1Zd4",
    authDomain: "mancingyuk-5c56d.firebaseapp.com",
    projectId: "mancingyuk-5c56d",
    storageBucket: "mancingyuk-5c56d.firebasestorage.app",
    messagingSenderId: "585479494777",
    appId: "1:585479494777:web:d259ae9d22fe4b50b948a8"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Helper auth & firestore di-expose ke global, karena script.js
// tidak memakai module. Semua fungsi ini juga bisa dipakai manual
// dari console saat debugging.
window.FB = {
    app, auth, db,

    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider,

    doc, setDoc, getDoc, updateDoc, addDoc, getDocs,
    query, where, orderBy, onSnapshot, deleteDoc, collection,
    serverTimestamp
};

window.firebaseReady = true;
console.log('[firebase] ready:', firebaseConfig.projectId);
