import React from 'react'
import { Button } from '../../Central';

function Settings() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return (
        <div className='flex min-h-screen items-center justify-center'>
            <div className="setting-container w-[50%] p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Welcome, {user.fullname}</h1>
                <div className="action-buttons flex items-center justify-center gap-4">
                    <Button text="Edit Name" />
                </div>
            </div>
        </div>
    )
}

export default Settings
