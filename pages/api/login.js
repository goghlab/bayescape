import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { doc, getFirestore, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { useRouter } from 'next/router';

const firebaseConfig = {
  apiKey: "AIzaSyCJgBZmZwjlnplli6OV6ml1_ImqBVMAxJQ",
  authDomain: "bayescape851013.firebaseapp.com",
  projectId: "bayescape851013",
  storageBucket: "bayescape851013.appspot.com",
  messagingSenderId: "91014614162",
  appId: "1:91014614162:web:746fe48da864855d302a4b",
  measurementId: "G-3EYK1T0KE3" 
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const loginEndpointHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Authenticate the user using Firebase Authentication
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // Redirect to the personal dashboard with the userId
    res.status(200).json({ userId: userCredential.user.uid });
  } catch (error) {
    // Handle login error
    res.status(400).json({ error: 'Login failed. Please check your credentials.' });
  }
};

export default loginEndpointHandler;
