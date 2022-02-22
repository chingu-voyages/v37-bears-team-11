import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className='w-screen'>
            <nav className='flex justify-center border-b-2 pb-1'>
                <Link to='/' className='mx-4'>
                    Landing Page
                </Link>
                <Link to='/register' className='mx-4'>
                    Sign Up
                </Link>
                <Link to='/login' className='mx-4'>
                    Login
                </Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout
