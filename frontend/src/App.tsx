import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// components
import Layout from './ui/components/Layout'
import LoadingPage from './ui/pages/loading/LoadingPage'
import Login from './ui/pages/registration/Login'
import UserRegistration from './ui/pages/registration/UserRegistration'
import OwnerRegistration from './ui/pages/registration/OwnerRegistration'
import Home from './ui/pages/Home/Home'
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
        const newId = TokenServices.decodeToken().id
        setId(newId)
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

    // componentDidMount() {
    //     try {
    //       const localToken = TokenServices.getAuthToken();
    //       const id = TokenServices.decodeToken(localToken).id;
    //       this.setState({ id: id, token: localToken });
    //       ApiServices.getUser(
    //         // email: testwy1@test.com
    //         // password: 123
    //         id,
    //         `bearer ${localToken}`
    //       ).then((data) => {
    //         this.setState({
    //           items: data.user.pantry,
    //           groceryItems: data.user.cart,
    //         });
    //       });
    //     } catch (e) {}
    //   }

    //   componentDidUpdate() {
    //     if (this.state.id === "" && this.state.token === "") {
    //       return;
    //     }
    //     ApiServices.getUser(
    //       // email: testwy1@test.com
    //       // password: 123
    //       this.state.id,
    //       `bearer ${this.state.token}`
    //     ).then((data) => {
    //       this.setState({ items: data.user.pantry, groceryItems: data.user.cart });
    //     });
    //   }

    // setId = (id) => {
    //     this.setState({ id: id });
    // };

    // setToken = (newToken) => {
    //     this.setState({ token: newToken });
    // };

    return (
        <div className='App'>
            <Routes>
                {loading ? (
                    <Route path='/' element={<LoadingPage setLoading={setLoading} />} />
                ) : (
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Login setId={setId} setToken={setToken} />} />
                        <Route
                            path='user-registration'
                            element={<UserRegistration setId={setId} setToken={setToken} />}
                        />
                        <Route
                            path='owner-registration'
                            element={<OwnerRegistration setId={setId} setToken={setToken} />}
                        />
                        <Route path='home' element={<Home />} />
                    </Route>
                )}
            </Routes>
        </div>
    )
}

export default App
