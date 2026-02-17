import React, {useState} from 'react'
import { logo } from 'Central.js';
import { NavLink, useNavigate } from 'react-router-dom';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('currentUser')) || []);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('currentUser');
        setUsers([]);
        navigate('/');
        navigate(0); 
    }
    return (
        <div>
            <nav className='NavBar'>
                <div className='navbar-container'>
                    <div className='flex items-center justify-between w-full px-4 py-3'>
                        <div className='navbar-logo'>
                            <img src={logo} alt='Logo' />
                        </div>

                        {/* Hamburger Menu */}
                        <button 
                            className='md:hidden flex flex-col gap-1 cursor-pointer'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className='w-6 h-0.5 bg-black'></span>
                            <span className='w-6 h-0.5 bg-black'></span>
                            <span className='w-6 h-0.5 bg-black'></span>
                        </button>

                        {/* Desktop Navigation */}
                        <ul className='navbar-links hidden md:flex gap-6'>
                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/services'>Services</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                            <li><NavLink onClick={logout}>Logout</NavLink></li>
                        </ul>

                        <div className='navbar-user hidden md:block'>
                            <span>Welcome, {users.fullname}</span>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <ul className='md:hidden flex flex-col gap-3 px-4 py-3 bg-gray-100'>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/services'>Services</a></li>
                            <li><a href='/contact'>Contact</a></li>
                            <li><span>Welcome, {users.fullname}</span></li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default NavBar
