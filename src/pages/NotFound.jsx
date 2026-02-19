import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <h1 className='text-[clamp(2.5rem,8vw,8rem)] text-gray-500'>404</h1>
            <h2 className='text-[clamp(2.5rem,8vw,6rem)] text-gray-500'>Page Not Found</h2>
            <br />
            <Link to="/welcome/dashboard" className='text-2xl underline text-blue-500'>Go to HomePage</Link>
        </div>
    )
}

export default NotFound
