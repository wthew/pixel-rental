import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCddZhQ4-SCy7W1uR7Q7hs03JWmdaEQf_c",
  authDomain: "pixel-rental.firebaseapp.com",
  databaseURL: "https://pixel-rental-default-rtdb.firebaseio.com",
  projectId: "pixel-rental",
  storageBucket: "pixel-rental.firebasestorage.app",
  messagingSenderId: "121893716115",
  appId: "1:121893716115:web:45018674a9881f09fecd66",
  measurementId: "G-93TYDCNLT0"
};


const app = initializeApp(firebaseConfig);
export default app