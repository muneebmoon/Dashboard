import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { AuthLayout, Login, SignUp, DashboardLayout, Dashboard } from 'Central.js'
import ForgotPassword from '../pages/ForgotPassword'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path='forgot-password' element={<ForgotPassword />} />
            </Route>

            <Route path='dashboard' element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
