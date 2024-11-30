import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCOTcGi6jdskvKezC0y6TrQaE9oUqPOD78",
  authDomain: "feedback-dbed7.firebaseapp.com",
  projectId: "feedback-dbed7",
  storageBucket: "feedback-dbed7.firebasestorage.app",
  messagingSenderId: "959798580968",
  appId: "1:959798580968:web:134e37ee6ce71e28331b5d",
  measurementId: "G-6HMFRQJEBW"
});

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp)

export { firebaseApp, db, storage, auth };
