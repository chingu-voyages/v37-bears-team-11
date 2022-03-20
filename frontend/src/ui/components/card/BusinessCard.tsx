import React from 'react'
import { SearchResult } from '../../../services/api/search/search'

type BusinessCardProps = SearchResult & {
    category?: string
}

function BusinessCard(props: BusinessCardProps) {
    const { name, phone, hours, country, state, city, street, zip } = props

    return (
        <div className='flex flex-row px-6 py-6 gap-4'>
            <div className=' flex justify-center items-center w-1/4 bg-orange-default rounded-lg'>
                <p className='text-white text-2xl'>{name[0]}</p>
            </div>
            <div className='flex flex-col font-sans gap-3'>
                <h2 className='self-center text-2xl font-bold'>{name}</h2>
                <div className='flex flex-col gap-2'>
                    <p>{`Phone: ${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6)}`}</p>
                    <p>{`Hours: ${hours}`}</p>
                    <p>{`${street}, ${city}, ${state}, ${country}, ${zip}`}</p>
                </div>
            </div>
        </div>
    )
}

export default BusinessCard
