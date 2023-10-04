import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import { setDoc, doc, runTransaction, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebase/firebaseConfig';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const validatePassword = (password, confirmPassword) => {
  return password === confirmPassword && password.length >= 6;
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleUserRegistration = async (req, res) => {
  try {
    console.log('Received request:', req.body);

    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (!validatePassword(password, confirmPassword)) {
      console.log('Password validation failed.');
      return res.status(400).json({ message: 'Passwords do not match or are too weak.' });
    }

    if (!validateEmail(email)) {
      console.log('Email validation failed.');
      return res.status(400).json({ message: 'Invalid email format. Please provide a valid email address.' });
    }

    const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);

    console.log('User registered successfully:', userCredential.user);

    const userId = userCredential.user.uid;
    const user = { email, firstName, lastName, password, subscribe: false };

    const userRef = doc(db, 'users', userId);
    await runTransaction(db, async (transaction) => {
      await setDoc(userRef, user);
    });

    await sendEmailVerification(userCredential.user);

    res.status(200).json({
      message: 'User registered successfully. Please check your email for verification instructions.',
      user: userCredential.user,
      emailVerificationSent: true,
    });
  } catch (error) {
    console.error('Error registering user:', error);

    let errorMessage = 'Error registering user';

    if (error.code === 'auth/invalid-email') {
      errorMessage = 'Invalid email format. Please provide a valid email address.';
    } else if (error.code === 'auth/email-already-in-use') {
      errorMessage = 'Email is already in use. Please use a different email.';
    }

    res.status(500).json({ message: errorMessage, emailVerificationSent: false });
  }
};

export default handleUserRegistration;
