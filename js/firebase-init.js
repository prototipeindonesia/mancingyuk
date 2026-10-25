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
    apiKey: "AIzaSyBlAfIdidxvZjl9DxkXMcdyQaBVS19CPac",
    authDomain: "mancingyukapp.firebaseapp.com",
    projectId: "mancingyukapp",
    storageBucket: "mancingyukapp.firebasestorage.app",
    messagingSenderId: "403557606873",
    appId: "1:403557606873:web:bebe8944d792b93b12a5c8"
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