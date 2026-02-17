import React, {useState} from 'react'
import { Button, Input } from '../Central'
import { Link } from 'react-router-dom'

function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('Users')) || []);
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (email.trim() === '') {
            setMessage("Please enter your email address.");
            return;
        }else {
            const userExists = users.some(user => user.email === email);
            if (!userExists) {
                setMessage("Email address not found. Please check and try again.");
            } else {
                const randomPassword = Math.random().toString(36).slice(-8);
                const updatedUsers = users.map(user => 
                    user.email === email ? { ...user, password: randomPassword } : user
                );
                setUsers(updatedUsers);
                localStorage.setItem('Users', JSON.stringify(updatedUsers));
                console.log(`Password: ${randomPassword}`);
                setMessage("A password has been reset and print on console.");
            }
        }
    }

    return (
        <>
            <div className="main-container flex flex-col gap-6 items-center justify-center min-h-screen bg-[#F7FAFC]">
                <div className="form-container flex flex-col w-full max-w-md p-6 bg-white rounded-lg gap-6">
                    <h1 className='text-3xl font-bold mb-6'>Forgot Password</h1>
                    <p className='text-gray-600 mb-4'>Enter your email address to receive a password reset link.</p>
                    <Input placeholder="Enter your email" type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    />
                    {message && <p className='text-red-500'>{message}</p>}
                    <Button text="Reset Password" onClick={handleSubmit} />
                </div>
                <div className="buttons">
                    <Link to="/" className='underline text-[#1C4532]'>Back to Login</Link>
                    <Link to="/signup" className='underline text-[#1C4532] ml-4'>Create Account</Link>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
