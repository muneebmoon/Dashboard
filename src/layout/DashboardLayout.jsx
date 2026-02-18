import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {

    const [open, setOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-[#F3F3F3]">

            
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            
            <div className={`
                fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50
                transform transition-transform duration-300
                ${open ? "translate-x-0" : "-translate-x-full"}
                lg:translate-x-0 lg:static
            `}>
                <NavBar closeSidebar={() => setOpen(false)} />
            </div>

           
            <div className="flex-1 ">

                {/* Mobile Header */}
                <div className="lg:hidden flex items-center justify-between p-4 bg-white shadow">

                    <button
                        onClick={() => setOpen(true)}
                        className="text-2xl"
                    >
                        ☰
                    </button>

                    <h1 className="font-bold">Dashboard</h1>

                </div>
                <Outlet />
            </div>

        </div>
    )
}

export default DashboardLayout
