import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
//components
import { SearchProvider } from './ui/components/search/SearchProvider'
import Layout from './ui/components/Layout'
import LoadingPage from './ui/pages/loading/LoadingPage'
import Login from './ui/pages/registration/Login'
import Registration from './ui/pages/registration/Registration'
import Home from './ui/pages/Home/Home'
import SearchResultsList from './ui/components/searchResults/SearchResultsList'
// services
import ApiServices from './services/apiServices'
import TokenServices from './services/tokenServices'

function App() {
    const [loading, setLoading] = useState(true)
    const [id, setId] = useState('')
    const [token, setToken] = useState('')

    //component did mount
    useEffect(() => {
        if (id !== '' && token !== '') {
            getUser()
        }
    }, [id, token])

    //component did update(add to "dependency array")
    // useEffect(() => {

    // }, [variable])

    const getUser = async () => {
        const localToken = TokenServices.getAuthToken()
        if (!localToken) {
            throw Error('Missing local token')
        }
        // const newId = TokenServices.decodeToken(localToken).id
        // const newId = TokenServices.decodeToken().id
        // setId(newId)
        setToken(localToken)
        // this.setState({ id: id, token: localToken })
        try {
            const data = await ApiServices.getUser(id, `bearer ${localToken}`)
            //have data available here

            // this.setState({
            //     items: data.user.pantry,
            //     groceryItems: data.user.cart,
            // })
        } catch (error) {
            console.log('error: ', error)
        }
    }

    return (
        <div className='App'>
            <SearchProvider>
                <Routes>
                    {loading ? (
                        <Route path='/' element={<LoadingPage setLoading={setLoading} />} />
                    ) : (
                        <>
                            <Route path='/' element={<Layout />}>
                                <Route index element={<Login setId={setId} setToken={setToken} />} />
                                <Route
                                    path='register'
                                    element={<Registration setId={setId} setToken={setToken} />}
                                />
                                <Route path='/search' element={<SearchResultsList />} />
                            </Route>
                            <Route path='home' element={<Home />} />
                        </>
                    )}
                </Routes>
            </SearchProvider>
        </div>
    )
}

export default App
