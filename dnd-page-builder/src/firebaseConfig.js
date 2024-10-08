import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCLFplSiZqk-6EevCPu_qD9Hbo6PMQJbVk",
    authDomain: "my-playlist-app-53e7c.firebaseapp.com",
    projectId: "my-playlist-app-53e7c",
    storageBucket: "my-playlist-app-53e7c.appspot.com",
    messagingSenderId: "1001852028063",
    appId: "1:1001852028063:web:6983a587a1a2f564f7ceaa",
    measurementId: "G-WCCN80QERJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);