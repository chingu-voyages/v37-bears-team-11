import React, { useReducer } from 'react'
import Categories from './Categories'
import Search from '../../components/search/Search'
import SearchButton from '../../components/search/SearchButton'
import { SearchResult } from '../../../services/api/search/search'

//type component state
export type StateHome = {
    error: boolean
    loading: boolean
    searchResult: SearchResult[]
}

/*
    - type reducer Action
    - the type property sets the value for the case in the switch statement in the reducer function
*/
export type ActionHome = {
    type: string
    searchResult?: SearchResult[]
}

//create reducer function to pass into useReducer hook; returns updated state depending on the case

function reducer(state: StateHome, action: ActionHome) {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, error: false, loading: true }
        case 'SET_ERROR':
            return { ...state, error: true, loading: false }
        case 'SET_SEARCH_RESULT':
            if (action.searchResult) {
                return { ...state, error: false, loading: false, searchResult: action.searchResult }
            }
        default:
            throw new Error()
    }
}

function Home() {
    //call useReducer hook to get initial state and dispatch function that updates state
    const [state, dispatch] = useReducer(reducer, { error: false, loading: false, searchResult: [] })

    return (
        <div className='flex flex-col w-screen h-screen'>
            <div className='flex flex-col justify-around bg-home bg-cover bg-no-repeat h-1/3'>
                <div className='text-3xl text-white font-mplus font-medium px-5 py-3'>Troka</div>
                <div className='flex flex-col gap-5 px-5 w-full'>
                    <p className='text-white text-2xl font-mplus'>Looking for a place?</p>
                    <div className='flex gap-2'>
                        <Search dispatch={dispatch} />
                        <SearchButton />
                    </div>
                </div>
            </div>
            <Categories />
            {state.searchResult.map((result, index) => {
                return <p key={index}>{result.name}</p>
            })}
        </div>
    )
}

export default Home
