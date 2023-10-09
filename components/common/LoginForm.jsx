import React, { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { initializeApp } from 'firebase/app';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(null); // Clear error on email change
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError(null); // Clear error on password change
  };

 const firebaseConfig = {
    apiKey: "AIzaSyCJgBZmZwjlnplli6OV6ml1_ImqBVMAxJQ",
    authDomain: "bayescape851013.firebaseapp.com",
    projectId: "bayescape851013",
    storageBucket: "bayescape851013.appspot.com",
    messagingSenderId: "91014614162",
    appId: "1:91014614162:web:746fe48da864855d302a4b",
    measurementId: "G-3EYK1T0KE3"
  };

  const auth = getAuth(initializeApp(firebaseConfig));

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User successfully logged in:', userCredential.user.uid);

      // Redirect to the personal dashboard
      router.push(`/dashboard/${userCredential.user.uid}`);
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid login credentials. Please try again.');
    }
  };

  return (
    <form className="row y-gap-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Don&apos;t have an account yet?{" "}
          <a href="/others-pages/signup" className="text-blue-1">
            Sign up for free
          </a>
        </p>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input type="text" required value={email} onChange={handleEmailChange} />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input type="password" required value={password} onChange={handlePasswordChange} />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
      </div>

      <div className="col-12">
        {error && <div className="error-message">{error}</div>} {/* Display error message */}
      </div>

      <div className="col-12">
        <a href="#" className="text-14 fw-500 text-blue-1 underline">
          Forgot your password?
        </a>
      </div>

      <div className="col-12">
        <button type="submit" className="button py-20 -dark-1 bg-blue-1 text-white w-100">
          Sign In <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
