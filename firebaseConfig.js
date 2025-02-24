// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    initializeAuth, 
    getReactNativePersistence 
  } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";
  import { getDatabase } from "firebase/database";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  
const firebaseConfig = {
    apiKey: "AIzaSyDv9gC7jtBc3I1a2f1iZW-FbgfJ-En-gTI",
    authDomain: "dance-class-a65c1.firebaseapp.com",
    databaseURL: "https://dance-class-a65c1-default-rtdb.firebaseio.com",
    projectId: "dance-class-a65c1",
    storageBucket: "dance-class-a65c1.firebasestorage.app",
    messagingSenderId: "611595268882",
    appId: "1:611595268882:web:0577b18d28207046ba79cb",
    measurementId: "G-BSR1NR3QYK"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
  
  export { auth };
  export const firestore = getFirestore(app);
  export const storage = getStorage(app);
  export const database = getDatabase(app);
  export default app;