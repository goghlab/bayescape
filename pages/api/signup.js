import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import { setDoc, doc, runTransaction, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

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

const validatePassword = (password, confirmPassword) => {
  return password === confirmPassword && password.length >= 6;
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleUserRegistration = async ({ body }) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = body;

    if (!validatePassword(password, confirmPassword)) {
      throw new Error('密碼不符或太弱。請再試一次。');
    }

    if (!validateEmail(email)) {
      throw new Error('電子郵件格式無效。請提供有效的電子郵件地址。');
    }

    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    const userId = userCredential.user.uid;
    const user = { email, firstName, lastName, password, subscribe: false };

    const userRef = doc(db, 'users', userId);
    await runTransaction(db, async (transaction) => {
      await setDoc(userRef, user);
    });

    await sendEmailVerification(userCredential.user);

    return {
      status: 'success',
      message: '用戶註冊成功。請檢查您的電子郵件以獲取驗證指示。',
      user: userCredential.user,
      emailVerificationSent: true,
    };
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      throw new Error('此電子郵件已在使用中。請使用其他電子郵件。');
    } else {
      throw new Error('註冊用戶時發生錯誤: ' + error.message);
    }
  }
};

export default handleUserRegistration;
