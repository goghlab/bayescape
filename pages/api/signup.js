import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import firebaseConfig from '../firebase/firebaseConfig';

const app = initializeApp(firebaseConfig);

const handleUserRegistration = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (password !== req.body.confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match. Please try again.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password is too weak. It must be at least 6 characters long.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format. Please provide a valid email address.' });
    }

    const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);

    await sendEmailVerification(userCredential.user);

    res.status(200).json({
      message: 'User registered successfully. Please check your email for verification instructions.',
      user: userCredential.user,
      emailVerificationSent: true,
    });
  } catch (error) {
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
