import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Search from './search/Search'

function Layout() {
    return (
        <div className='w-screen h-screen'>
            <nav className='h-1/6 flex flex-col justify-center items-center border-b-2 pb-1 bg-orange-default gap-4'>
                <div className='flex justify-center w-4/5 relative'>
                    <Link to='/home' className=''>
                        <div className='bg-left-arrow w-10 h-10 bg-no-repeat absolute left-0'></div>
                    </Link>
                    <p className='text-white text-xl'>TROKA</p>
                </div>
                <div className=' w-4/5'>
                    <Search />
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout
