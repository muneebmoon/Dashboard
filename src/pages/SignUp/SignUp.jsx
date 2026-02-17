import React, { useState } from 'react'
import { logo, Input, Button } from 'Central.js';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {

  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/.test(value)) {
      setError(
        "Password must be at least 6 characters and include uppercase, lowercase, number, and special character."
      );
    } else {
      setError("");
    }
  };

  function saveUser(fullname, email, password) {
    const existingUsers = JSON.parse(localStorage.getItem('Users')) || [];

    const newUser = { fullname, email, password };

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('Users', JSON.stringify(updatedUsers));

    setFullName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  
  function handleSubmit(e) {
    e.preventDefault();

    if (!fullname || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (error) {
      alert('Please enter a valid password');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    saveUser(fullname, email, password);
    navigate('/');
  }

  return (
    <div className="main-container min-h-screen flex items-center justify-center px-4">

      <div className="login-container w-full max-w-6xl min-h-[70vh] flex justify-center items-center max-md:flex-col">

        {/* Left */}
        <div className="left-container w-full h-full flex flex-col justify-center items-center md:items-start gap-10 p-6 md:p-10">

          <div className="logo">
            <img src={logo} alt="logo" className="mx-auto md:mx-0" />
          </div>

          <div className="content text-center md:text-left md:pl-15">
            <h1 className="text-3xl md:text-5xl font-bold text-[#171923] pb-6 md:pb-10">
              Sign Up
            </h1>

            <span className="text-[#718096] text-base md:text-lg">
              Already have an account?
            </span>

            <Link
              to="/"
              className="underline text-[#1C4532] text-base md:text-lg ml-1"
            >
              Login Now
            </Link>
          </div>

          {/* Form */}
          <div className="form-container w-full max-w-md md:pl-15">

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">

              {/* Full Name */}
              <div>
                <label className="text-[#718096]">Full Name</label>
                <Input
                  placeholder="Muneeb Ahmed"
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-[#718096]">Email</label>
                <Input
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-[#718096]">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                {error && (
                  <div className="text-red-500 text-sm mt-1">{error}</div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-[#718096]">Confirm Password</label>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {password && confirmPassword && password !== confirmPassword && (
                  <div className="text-red-500 text-sm">
                    Passwords do not match
                  </div>
                )}
              </div>

              <Button text="Sign Up" type="submit" />

            </form>
          </div>

        </div>

        {/* Right */}
        <div className="right-container hidden md:flex flex-col w-full h-full gap-10 p-6 md:p-10 bg-[#1C4532]">
        </div>

      </div>
    </div>
  )
}

export default SignUp;
