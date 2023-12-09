import React, { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { initializeApp } from 'firebase/app';
import Link from 'next/link'; // Import the Link component

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
    // Your Firebase configuration
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
        <h1 className="text-22 fw-500">歡迎回來</h1>
        <p className="mt-10">
          尚未擁有帳號嗎？{' '}
          <Link href="/others-pages/signup">
            <a className="text-blue-1">免費註冊</a>
          </Link>
        </p>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input type="text" required value={email} onChange={handleEmailChange} />
          <label className="lh-1 text-14 text-light-1">電子郵件</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input type="password" required value={password} onChange={handlePasswordChange} />
          <label className="lh-1 text-14 text-light-1">密碼</label>
        </div>
      </div>

      <div className="col-12">
        {error && <div className="error-message">{error}</div>} {/* Display error message */}
      </div>

      <div className="col-12">
        <a href="#" className="text-14 fw-500 text-blue-1 underline">
          忘記密碼了嗎？
        </a>
      </div>

      <div className="col-12">
        <button type="submit" className="button py-20 -dark-1 bg-blue-1 text-white w-100">
          登入 <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
