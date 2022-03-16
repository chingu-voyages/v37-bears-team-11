import React from 'react'
import BusinessCard from '../card/BusinessCard'
import { useSearchResults } from '../search/SearchProvider'

function SearchResultsList() {
    //get Search Results from SearchProvider context
    const results = useSearchResults()

    return (
        <div className='flex flex-col gap-4 divide-y-2'>
            {results.map((result) => {
                return <BusinessCard {...result} key={result.id}></BusinessCard>
            })}
        </div>
    )
}

export default SearchResultsList
