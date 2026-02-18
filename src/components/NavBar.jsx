import React, { useState } from 'react'
import { logo, layergroup, grid, Upload, usericon, cart, shippingtruck,creditcard, Setting } from 'Central.js';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function NavBar() {

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('currentUser')) || []);

    const navigate = useNavigate();

    const menus = {
        dashboard: {
            icon: layergroup,
            title: 'Dashboard',
            link: '/dashboard'
        },
        products: {
            icon: grid,
            title: 'Products',
            link: '/dashboard/products'
        },
        customers: {
            icon: usericon,
            title: 'Customers',
            link: '/customers'
        },
        orders: {
            icon: cart,
            title: 'Orders',
            link: '/orders'
        },
        shippments: {
            icon: shippingtruck,
            title: 'Shippments',
            link: '/shippments'
        },
        transactions: {
            icon: creditcard,
            title: 'Transactions',
            link: '/transactions'
        },
        settings: {
            icon: Setting,
            title: 'Settings',
            link: '/settings'
        },
        logout: {
            icon: Upload,
            title: 'Logout',
            link: '/'
        }
    }

    const logout = () => {
        localStorage.removeItem('currentUser');
        setUsers([]);
        navigate('/');
        navigate(0);
    }
    return (
        <>
            <div className="main-container flex flex-col gap-30 items-center min-h-screen">
                <div className="logo pt-10 flex items-center justify-center gap-3">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="menus flex flex-col gap-10">
                    {Object.keys(menus).map((menu, index) => (
                        <NavLink to={menus[menu].link} key={index} className={({ isActive }) => `flex items-center gap-3 px-5 py-2 rounded-lg ${isActive ? 'underline' : 'bg-transparent'}`} onClick={menu === 'logout' ? logout : null}>
                            <img src={menus[menu].icon} alt={`${menus[menu].title} Icon`} />
                            <span className="text-lg">{menus[menu].title}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NavBar
