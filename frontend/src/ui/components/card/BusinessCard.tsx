import React from 'react'
import { SearchResult } from '../../../services/api/search/search'

type BusinessCardProps = SearchResult & {
    category?: string
}

function BusinessCard(props: BusinessCardProps) {
    const { name, phone, hours, country, city, street, zip } = props

    return (
        <div className='flex flex-row'>
            <img src='' className='w-1/4 bg-orange-default'></img>
            <div className='flex flex-col'>
                <h2>{name}</h2>
                <p>{`Phone: ${phone}`}</p>
                <div>
                    <p>{`Hours: ${hours}`}</p>
                    <p>{street}</p>
                    <p>{`${city}, ${country}, ${zip}`}</p>
                </div>
            </div>
        </div>
    )
}

export default BusinessCard
