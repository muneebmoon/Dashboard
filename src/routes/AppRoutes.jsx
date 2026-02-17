import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { AuthLayout, Login, SignUp, DashboardLayout, Dashboard } from 'Central.js'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="signup" element={<SignUp />} />
            </Route>

            <Route path='dashboard' element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
