import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthProvider/AuthContext';
import { toast } from 'react-toastify';
import logo from '../../assets/Icons/logo-50.png'

const Navbar = () => {

    const { user , logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignOut = () => {
        logout()
            .then(() => {
                navigate('/')
                toast.success('Logged out successfully', {position: 'top-center'})
            })
    }

    const links =
        <>
            <Link className='mx-3' to={'/'}> Home </Link>
            <Link className='mx-3' to={'/addJob'}> Add jobs </Link>
            <Link className='mx-3' to={'/myposts'}> My Post </Link>
        </>
    return (
        <div>
            <div className="navbar max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 -mx-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex'>
                        <img className='w-8 h-8 my-auto' src={logo} alt="" />
                        <a className="btn btn-ghost text-xl -ml-4">Job Portal</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <Link onClick={handleSignOut} className="btn bg-purple-600 text-white">Logout</Link>
                            :
                            <Link to={'/login'} className="btn bg-purple-600 text-white">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;