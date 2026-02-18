import React from 'react'
import { Routes , Route, Navigate } from 'react-router-dom'
import { AuthLayout, Login, SignUp, DashboardLayout, Dashboard, Products } from 'Central.js'
import ForgotPassword from '../pages/ForgotPassword'
import PrivateRoute from './PrivateRoute'; // Path to your helper

function AppRoutes() {
    return (
        <Routes>
            {/* PUBLIC ROUTES - Do NOT wrap these in PrivateRoute */}
            <Route element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path='forgot-password' element={<ForgotPassword />} />
            </Route>

            {/* PROTECTED ROUTES - Only Dashboard stuff goes here */}
            <Route element={<PrivateRoute />}>
                <Route path='dashboard' element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='products' element={<Products />} />
                </Route>
            </Route>
            
            {/* Optional: Redirect any unknown path to login */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default AppRoutes
