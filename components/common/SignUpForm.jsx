import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import handleUserRegistration from '../../pages/api/signup';
import { useRouter } from 'next/router';
import { initializeApp } from 'firebase/app';
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
    // ...other form input fields...
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
        setPasswordMatchError('密碼不符。請再試一次。');
        return;
      } else {
        setPasswordMatchError('');
      }

      const response = await handleUserRegistration({
        body: {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          subscribe,
          // ...other form input fields...
        },
      });

      setSuccessMessage(response.message);

    } catch (error) {
      let errorMessage = '註冊用戶時發生錯誤';

      if (error.message === '密碼不符合要求，請嘗試更強的密碼。') {
        errorMessage = '密碼不符合要求，請嘗試更強的密碼。';
      } else if (error.message === '此電子郵件已在使用中。請使用其他電子郵件。') {
        errorMessage = '此電子郵件已在使用中。請使用其他電子郵件。';
      }

      setErrorMessage(errorMessage);
    }
  };

  useEffect(() => {
    if (successMessage) {
      // Redirect to a specific path after successful registration
      router.push('/');
    }
  }, [successMessage]);

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

      {/* ...other form input fields... */}

      <div className="col-12">
        {successMessage && <div className="success-message">{successMessage}</div>}
        {passwordMatchError && <div className="error-message" style={{ color: 'red' }}>{passwordMatchError}</div>}
        {errorMessage && <div className="error-message" style={{ color: 'red' }}>{errorMessage}</div>}
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
