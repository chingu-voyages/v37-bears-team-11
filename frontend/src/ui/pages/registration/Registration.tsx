import React, { useState } from 'react'
import ApiServices from '../../../services/apiServices'
import TokenServices from '../../../services/tokenServices'
import { Link, useNavigate } from 'react-router-dom'

type RegistrationProps = {
    //create prop types here
    setId: (id: string) => void
    setToken: (id: string) => void
}

function Registration(props: RegistrationProps) {
    const history = useNavigate()
    const [error, setError] = useState('')
    // Make react controlled form

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        setError('')
        const { username, password, email, phone, address, first_name, last_name, is_operator } =
            e.currentTarget
        ApiServices.postUser({
            username: username.value,
            password: password.value,
            email: email.value,
            phone: phone.value,
            address: address.value,
            first_name: first_name.value,
            last_name: last_name.value,
            is_operator: is_operator.checked,
        })
            .then((res) => {
                username.value = ''
                email.value = ''
                password.value = ''
                TokenServices.saveAuthToken(res.token)
                console.log(res.token)
                props.setId(TokenServices.decodeToken().id)
                props.setToken(res.token)
                if (is_operator.checked) {
                    history('/create-business')
                } else {
                    history('/dashboard')
                }
            })
            .catch((res) => {
                setError(res)
                console.log(error)
            })
    }
    return (
        <React.Fragment>
            <section className='main'>
                <div>
                    <header role='banner'>
                        <h1>Register</h1>
                    </header>
                </div>
                <div className='login center'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className='login-container'>
                                <label className='hide' htmlFor='username' id='username'>
                                    Username
                                </label>
                                <input
                                    type='text'
                                    id='username'
                                    name='username'
                                    placeholder='Username'
                                    required
                                />

                                <label className='hide' htmlFor='password' id='password'>
                                    Password
                                </label>
                                <input
                                    type='password'
                                    id='password'
                                    name='password'
                                    placeholder='Password'
                                    required
                                />

                                <label className='hide' htmlFor='email' id='email'>
                                    Email
                                </label>
                                <input type='text' id='email' name='email' placeholder='Email' required />
                                <label className='hide' htmlFor='phone' id='phone'>
                                    Phone Number
                                </label>
                                <input
                                    type='text'
                                    id='phone'
                                    name='phone'
                                    placeholder='XXX-XXX-XXXX'
                                    required
                                />
                                <label className='hide' htmlFor='address' id='address'>
                                    Address
                                </label>
                                <input type='text' id='address' name='address' placeholder='Address' />

                                <label className='hide' htmlFor='first_name' id='first_name'>
                                    First Name
                                </label>
                                <input
                                    type='text'
                                    id='first_name'
                                    name='first_name'
                                    placeholder='First Name'
                                    required
                                />

                                <label className='hide' htmlFor='last_name' id='last_name'>
                                    Last Name
                                </label>
                                <input
                                    type='text'
                                    id='last_name'
                                    name='last_name'
                                    placeholder='Last Name'
                                    required
                                />

                                <label className='hide' htmlFor='is_operator' id='is_operator'>
                                    Register As A Busines Account
                                </label>
                                <input type='checkbox' id='is_operator' name='is_operator' />

                                <div className='center'>
                                    <button type='submit'>Register</button>
                                </div>
                            </div>
                        </div>
                        <div className='center'></div>
                        <p className='center'>Already have an account?</p>
                        <div className='center'>
                            <Link to='/login'>
                                <button className='register'>Login</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Registration
