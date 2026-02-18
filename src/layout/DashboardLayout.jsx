import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function DashboardLayout() {
    return (
        <>
            <div className="main-container flex min-h-screen">
                <div className="navbar w-[15%]">
                    <NavBar />
                </div>
                <div className="content flex-grow bg-[#F3F3F3]">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default DashboardLayout
