import React, { useEffect, useState } from 'react'
import { logo, Input, Button } from 'Central.js';
import { Link, useNavigate } from 'react-router-dom';


function Login() {

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('Users')) || []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('currentUser'));

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/welcome/dashboard');
    }
  }, [isLoggedIn, navigate]);

  function handleLogin(e) {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/welcome/dashboard');
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <>
      <div className="main-container min-h-screen flex items-center justify-center px-4">
        {/* Login Container  */}
        <div className="login-container w-full max-w-6xl min-h-[70vh] flex justify-center items-center max-md:flex-col">

          {/* Left Container  */}
          <div className="left-container w-full h-full flex flex-col justify-center items-center md:items-start gap-10 p-6 md:p-10">

            {/* Logo */}
            <div className="logo">
              <img src={logo} alt="logo" className="mx-auto md:mx-0" />
            </div>

            {/* Content */}
            <div className="content text-center md:text-left md:pl-15">
              <h1 className="text-3xl md:text-5xl font-bold text-[#171923] pb-6 md:pb-10">
                Sign In
              </h1>

              <span className="text-[#718096] text-base md:text-lg">
                Don't have account?
              </span>

              <Link
                to="/signup"
                className="underline text-[#1C4532] text-base md:text-lg ml-1"
              >
                Create Now
              </Link>
            </div>

            {/* Form */}
            <div className="form-container w-full max-w-md md:pl-15">
              <form className="flex flex-col gap-6 md:gap-8">

                <div className="email-container">
                  <label htmlFor="email" className="text-[#718096] text-sm md:text-base">
                    Email
                  </label>
                  <Input
                    placeholder="example@gmail.com"
                    name="email"
                    type="email"
                    id="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="password-container">
                  <label htmlFor="password" className="text-[#718096] text-sm md:text-base">
                    Password
                  </label>
                  <Input
                    placeholder="@#*%"
                    name="password"
                    type="password"
                    id="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {error && <p className="text-red-500">{error}</p>}
                </div>

                <div className="form-actions flex items-center justify-between text-sm md:text-base">
                  <div className="rememberme flex items-center gap-2">
                    <input type="checkbox" name="rememberme" id="rememberme" />
                    <label htmlFor="rememberme" className="text-[#718096]">
                      Remember me
                    </label>
                  </div>

                  <div className="forgot-password">
                    <Link
                      to="/forgot-password"
                      className="underline text-[#1C4532]"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <Button text="Sign In" onClick={handleLogin} />
              </form>
            </div>

          </div>

          {/* Right Container  */}
          <div className="hidden md:flex w-full h-full relative overflow-hidden bg-[#184D3B] rounded-2xl">

            {/* Background Circle */}
            <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full top-[-150px] right-[-150px]"></div>

            <div className="relative z-10 flex flex-col justify-between w-full p-10 text-white">

              {/* Top Support */}
              <div className="flex items-center gap-2 opacity-90">
                <span className="text-lg">🎧</span>
                <span className="text-sm">Support</span>
              </div>

              {/* Card Section */}
              <div className="bg-white rounded-xl p-8 text-[#1A202C] shadow-lg max-w-md">

                <h2 className="text-2xl font-bold mb-4">
                  Reach financial goals faster
                </h2>

                <p className="text-gray-500 text-sm mb-6">
                  Use your card around the world with no hidden fees.
                  Hold, transfer and spend money easily.
                </p>

                <button className="bg-[#184D3B] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#123c2e] transition">
                  Learn more
                </button>

              </div>

              {/* Bottom Content */}
              <div className="text-center mt-10">
                <h3 className="text-3xl font-semibold mb-3">
                  Introducing new features
                </h3>

                <p className="text-sm text-white/70 max-w-md mx-auto">
                  Analyzing previous trends ensures that businesses always make
                  the right decision and scale effectively over time.
                </p>

                {/* Slider Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  <span className="w-2 h-2 bg-white/40 rounded-full"></span>
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="w-2 h-2 bg-white/40 rounded-full"></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
