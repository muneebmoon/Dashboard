import React from 'react'
import { Routes , Route, Navigate } from 'react-router-dom'
import { AuthLayout, Login, SignUp, DashboardLayout, Dashboard, Products, Customers,Settings, Orders, Shippments, Transactions } from 'Central.js'
import ForgotPassword from '../pages/ForgotPassword'
import PrivateRoute from './PrivateRoute'; 

function AppRoutes() {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path='forgot-password' element={<ForgotPassword />} />
            </Route>

            
            <Route element={<PrivateRoute />}>
                <Route path='welcome' element={<DashboardLayout />}>
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='products' element={<Products />} />
                    <Route path='customers' element={<Customers />} />
                    <Route path='orders' element={<Orders />} />
                    <Route path='shippments' element={<Shippments />} />
                    <Route path='transactions' element={<Transactions />} />
                    <Route path='settings' element={<Settings />} />
                </Route>
            </Route>
            
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default AppRoutes
