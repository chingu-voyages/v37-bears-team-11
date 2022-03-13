import React, { createContext, useReducer } from 'react'
import { useContext } from 'react'
import { SearchResult } from '../../../services/api/search/search'

//credit Kent C. Dodds' tutorial: https://kentcdodds.com/blog/how-to-use-react-context-effectively

// type context state
type State = {
    error: boolean
    loading: boolean
    query: string
    results: SearchResult[]
}

// type setter function
type Dispatch = React.Dispatch<Action>

// type custom Provider component to receive child nodes
type SearchProviderProps = {
    children: React.ReactNode
}

// initial state
const initialContext = {
    error: false,
    loading: false,
    query: '',
    results: [],
}

// create context with initial value undefined
const searchContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined)
// get Provider component from context object
const { Provider } = searchContext

/*
    - type reducer Action
    - the type property sets the value for the case in the switch statement in the reducer function
*/
export type Action =
    | {
          type: 'SET_LOADING'
          query: string
      }
    | { type: 'SET_ERROR' }
    | { type: 'SET_SEARCH_RESULT'; results: SearchResult[] }

//create reducer function to pass into useReducer hook; returns updated state depending on the case

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, query: action.query, error: false, loading: true }
        case 'SET_ERROR':
            return { ...state, error: true, loading: false }
        case 'SET_SEARCH_RESULT':
            return { ...state, error: false, loading: false, results: action.results }

        default:
            throw new Error()
    }
}

// custom Provider function
function SearchProvider({ children }: SearchProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialContext)

    return <Provider value={{ state, dispatch }}>{children}</Provider>
}

//custom helper hook that returns the search results stored in context
function useSearchResults() {
    const context = useContext(searchContext)
    if (context === undefined) {
        throw new Error('SearchProvider is missing')
    } else {
        return context.state.results
    }
}

//custom helper hook that returns the dispatch function to update context
function useSetSearch() {
    const context = useContext(searchContext)
    if (context === undefined) {
        throw new Error('SearchProvider is missing')
    } else {
        return context.dispatch
    }
}

export { SearchProvider, useSearchResults, useSetSearch }
