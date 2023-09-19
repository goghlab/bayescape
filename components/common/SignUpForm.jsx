import { useState } from 'react';
import Link from 'next/link';  // Correct import statement

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      // Log the form data to the console
  console.log('Form Data:', formData);

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User registered successfully!');
      } else {
        console.error('User registration failed.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <form className="row y-gap-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <h1 className="text-22 fw-500">灣程BayEscape用戶註冊</h1>
        <p className="mt-10">
          已有帳戶嗎?{" "}
          <Link href="/others-pages/login" className="text-blue-1">
            登入
          </Link>
        </p>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">名字</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">姓氏</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">電子郵件</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">密碼</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">確認密碼</label>
        </div>
      </div>

      <div className="col-12">
        <div className="d-flex">
          <div className="form-checkbox mt-5">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  subscribe: e.target.checked,
                })
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
