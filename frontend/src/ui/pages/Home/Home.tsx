import React from 'react'
import Categories from './Categories'

function Home() {
    return (
        <div className='flex flex-col w-screen h-screen'>
            <div className='flex bg-home bg-cover bg-no-repeat h-1/3'>
                <div className='text-3xl text-white font-medium px-5 py-3'>Troka</div>
            </div>
            <Categories />
        </div>
    )
}

export default Home
