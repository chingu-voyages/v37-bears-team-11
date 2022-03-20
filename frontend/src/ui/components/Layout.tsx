import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Search from './search/Search'

function Layout() {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <div className='w-screen h-screen'>
            <nav className='h-1/6 flex flex-col justify-center items-center border-b-2 pb-1 bg-orange-default gap-4'>
                <div className='flex justify-center items-center w-11/12 relative'>
                    <div
                        className='bg-left-arrow w-10 h-10 bg-no-repeat absolute left-0'
                        onClick={() => navigate(-1)}
                    ></div>
                    <p
                        className='text-3xl text-white font-mplus font-bold px-5 py-3'
                        onClick={() => navigate('/home')}
                    >
                        Troka
                    </p>
                </div>
                {location.pathname === '/search' && (
                    <div className=' w-4/5'>
                        <Search />
                    </div>
                )}
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout
