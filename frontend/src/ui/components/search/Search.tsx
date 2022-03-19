import React, { useState } from 'react'
import searchServices from '../../../services/api/search/search'
import { useSetSearch } from './SearchProvider'
import { useNavigate } from 'react-router-dom'

function Search() {
    // control input in state
    const [input, setInput] = useState('')

    //dispatch function to update parent state
    const dispatch = useSetSearch()

    //navigate function to handle redirect
    let navigate = useNavigate()

    // set search input in state
    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setInput(event.target.value)
    }

    // handle submitting the form
    async function handleSubmit(event: React.FormEvent): Promise<void> {
        // prevent the browser from refreshing when submitting the form
        event.preventDefault()

        //fetch data and update parent state value

        try {
            dispatch({ type: 'SET_LOADING', query: input })
            const data = await searchServices.getSearchResults(input)
            dispatch({ type: 'SET_SEARCH_RESULT', results: data })
            navigate(`/search/`)
        } catch (error) {
            //handle errors
            dispatch({ type: 'SET_ERROR' })
        }
    }

    return (
        <form
            id='search'
            name='search'
            className='flex-grow'
            role='search'
            onSubmit={(event) => handleSubmit(event)}
        >
            <input
                className='rounded-lg bg-white h-11 w-full py-2 pl-10 sm:pl-16 lg:pl-24 bg-search bg-no-repeat bg-[5%_center] sm:bg-[] focus:outline-none'
                type='text'
                id='search'
                name='search'
                placeholder='Search'
                aria-label='Search'
                onChange={(event) => handleChange(event)}
            />
        </form>
    )
}

export default Search
