// ==========================================
// Firebase Initialization for MancingYuk!
// ==========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    updateProfile 
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

// ==========================================
// KONFIGURASI FIREBASE (dari Firebase Console)
// ==========================================
const firebaseConfig = {
    apiKey: "AIzaSyBlAfIdidxvZjl9DxkXMcdyQaBVS19CPac",
    authDomain: "mancingyukapp.firebaseapp.com",
    projectId: "mancingyukapp",
    storageBucket: "mancingyukapp.firebasestorage.app",
    messagingSenderId: "403557606873",
    appId: "1:403557606873:web:bebe8944d792b93b12a5c8"
};

// ==========================================
// INISIALISASI
// ==========================================
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ==========================================
// EXPOSE KE WINDOW AGAR BISA DIAKSES DARI script.js
// ==========================================
window.FB = {
    // Core
    app, auth, db,
    
    // Auth functions
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    
    // Firestore functions
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
};

window.firebaseReady = true;
console.log('🔥 Firebase initialized successfully');
console.log('📧 Project:', firebaseConfig.projectId);