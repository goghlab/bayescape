import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import handleUserRegistration from '../../pages/api/signup';
import { initializeApp } from 'firebase/app';
import { useRouter } from 'next/router';
import firebaseConfig from '../../pages/firebase/firebaseConfig';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    subscribe: false,
  });

  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter(); // Initialize the router

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { firstName, lastName, email, password, confirmPassword, subscribe } = formData;

      if (password !== confirmPassword) {
        console.log('Passwords do not match.');
        setPasswordMatchError('Passwords do not match. Please try again.');
        return;
      } else {
        setPasswordMatchError('');
      }

      // Call the handleUserRegistration function
      const response = await handleUserRegistration({
        body: {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          subscribe,
        },
      });

      setSuccessMessage(response.message);

      // Redirect only after setting success message
      // This ensures that the success message is displayed before the redirect happens
      router.push('/');
    } catch (error) {
      let errorMessage = 'Error registering user';
      if (error.message) {
        errorMessage = error.message;
      }
      setErrorMessage(errorMessage);
    }
  };

  useEffect(() => {
    if (successMessage) {
      // Redirect to a specific path after successful registration
      router.push('/');
    }
  }, [successMessage, router]);

  return (
    <form className="row y-gap-20" onSubmit={handleSubmit} onReset={() => setSuccessMessage('')}>
      <div className="col-12">
        <h1 className="text-22 fw-500">灣程BayEscape用戶註冊</h1>
        <p className="mt-10">
          已有帳戶嗎? <Link href="/others-pages/login">登入</Link>
        </p>
      </div>

      <div className="col-12">
        <div className="form-input">
          <label htmlFor="firstName" className="lh-1 text-14 text-light-1">
            名字
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <label htmlFor="lastName" className="lh-1 text-14 text-light-1">
            姓氏
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <label htmlFor="email" className="lh-1 text-14 text-light-1">
            電子郵件
          </label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <label htmlFor="password" className="lh-1 text-14 text-light-1">
            密碼
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <label htmlFor="confirmPassword" className="lh-1 text-14 text-light-1">
            確認密碼
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            autoComplete="new-password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="col-12">
        <div className="d-flex">
          <div className="form-checkbox mt-5">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              autoComplete="off"
              checked={formData.subscribe}
              onChange={(e) =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  subscribe: e.target.checked,
                }))
              }
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
          </div>
          <div className="text-15 lh-15 text-light-1 ml-10">
            透過電子郵件寄送BayEscape獨家優惠給我。如隱私政策中所述，我隨時可以選擇取消訂閱。
          </div>
        </div>
      </div>

      <div className="col-12">
        {successMessage && <div className="success-message">{successMessage}</div>}
        {passwordMatchError && <div className="error-message">{passwordMatchError}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>

      <div className="col-12">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          立即註冊 <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;