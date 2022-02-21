import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <nav
                style={{
                    borderBottom: 'solid 1px',
                    paddingBottom: '1rem',
                }}
            >
                <Link to='/register'>Sign Up</Link>
                <Link to='/login'>Login</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout
