import React, { useState } from 'react'
import { Button, Input } from '../../Central';

function Settings() {

    const user = JSON.parse(localStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('Users'));
    const [message, setMessage] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!password) {
            alert("Please enter new password");
            return;
        }

        const userIndex = users.findIndex(u => u.email === user.email);
        if (userIndex === -1) {
            setMessage("User not found");
            return;
        }

        users[userIndex].password = password;        
        localStorage.setItem("Users", JSON.stringify(users));
        const updatedUser = { ...user, password };
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        setMessage("Password updated successfully");
        setPassword("");
    };

    return (
        <div className="flex justify-center items-start lg:items-center min-h-screen p-4 md:p-6">

            <div className="setting-container w-full max-w-xl bg-white rounded-lg shadow-md p-5 md:p-8">

                <h1 className="text-xl md:text-2xl font-bold mb-6">
                    Welcome, {user?.fullname}
                </h1>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                    <div>
                        <label>Full Name</label>
                        <Input value={user?.fullname} disabled />
                    </div>

                    <div>
                        <label>Email</label>
                        <Input value={user?.email} disabled />
                    </div>

                    <div>
                        <label>Password</label>
                        <Input
                            type="password"
                            placeholder="Enter new password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {message && <p className="text-green-500">{message}</p>}

                    <Button text="Update Profile" type="submit" />

                </form>
            </div>
        </div>
    )
}

export default Settings;
