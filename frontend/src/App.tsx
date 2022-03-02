import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
//components
import Layout from './ui/components/Layout'
import LoadingPage from './ui/pages/loading/LoadingPage'
import Login from './ui/pages/registration/Login'
import Registration from './ui/pages/registration/Registration'
import Home from './ui/pages/Home/Home'

function App() {
    const [loading, setLoading] = useState(true)

    return (
        <div className='App'>
            <Routes>
                {loading ? (
                    <Route path='/' element={<LoadingPage setLoading={setLoading} />} />
                ) : (
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Login />} />
                        <Route path='register' element={<Registration />} />
                        <Route path='home' element={<Home />} />
                    </Route>
                )}
            </Routes>
        </div>
    )
}

export default App
