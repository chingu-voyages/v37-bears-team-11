import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
//components
import Layout from './ui/components/Layout'
import LandingPage from './ui/pages/landing/LandingPage'
import Login from './ui/pages/registration/Login'
import Registration from './ui/pages/registration/Registration'

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path='register' element={<Registration />} />
                    <Route path='login' element={<Login />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
