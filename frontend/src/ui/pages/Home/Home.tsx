import React from 'react'
import Categories from './Categories'
import Search from '../../components/search/Search'
import SearchButton from '../../components/search/SearchButton'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='flex flex-col w-screen h-screen'>
            <div className='flex flex-col justify-around bg-home bg-cover bg-no-repeat h-1/3'>
                <div className='text-3xl text-white font-mplus font-medium px-5 py-3'>Troka</div>
                <div className='flex flex-col gap-5 px-5 w-full'>
                    <p className='text-white text-2xl font-mplus'>Looking for a place?</p>
                    <div className='flex gap-2'>
                        <Search />
                        <SearchButton />
                    </div>
                </div>
            </div>
            {/* Temporary Links */}
            <div className='flex flex-row'>
                <Link to='/register' className='mx-4'>
                    Sign Up
                </Link>
                <Link to='/' className='mx-4'>
                    Login
                </Link>
                <Link to='/search' className='mx-4'>
                    Search
                </Link>
                <Link to='/add-business' className='mx-4'>
                    Add Business
                </Link>
            </div>
            <Categories />
        </div>
    )
}

export default Home
