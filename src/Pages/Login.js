import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 6;
};

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setEmailError('');
    setPasswordError('');

    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long');
      isValid = false;
    }

    if (!isValid) return;

    try {
      const response = await axios.post('http://localhost:8000/login', { email, password });
      const userData = response.data;

      if (userData) {
        sessionStorage.setItem('role', userData.role); // Store user role
        if (userData.role === 'Admin') {
          sessionStorage.setItem('adminid', userData.adminUserId);
          console.log("Admin Login Success")

          navigate('/AdminDashboard');
        } else if (userData.role === 'user') {
          sessionStorage.setItem('userid', userData.cid);
          console.log("Customer Login Success")
          navigate('/user');
        }else if (userData.role === 'Technician') {
            sessionStorage.setItem('techid', userData.techId);
            sessionStorage.setItem('techpwd',password)
            console.log(userData.TechId)
            console.log("Technician Login Success")
            navigate('/techie');
          } else {
          setError('Login failed: Invalid user');
        }
      } else {
        setError('Login failed: Invalid email or password');
      }
    } catch (error) {
      setError('Login failed: Invalid email or password');
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Welcome Back!! </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
         Lets Get Started
        </p>

        <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <p className="text-center text-lg font-medium">Sign in to your account</p>

          <div>
            <label htmlFor="email" className="sr-only">Email</label>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Password</label>

            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>

          {error && <p className="text-red-500 text-center text-sm">{error}</p>}

          <p className="text-center text-sm text-gray-500">
            No account?
            <a className="underline" href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
