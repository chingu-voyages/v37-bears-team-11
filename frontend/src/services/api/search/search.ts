// type search result
export type SearchResult = {
    id: string
    name: string
    phone: string
    hours: string
    address: string
}

// type expected json response
export type JSONResponse = {
    data: SearchResult[]
    error?: { message: string }
}

// http get request at search endpoint
async function getSearchResults(query: string): Promise<SearchResult[]> {
    // make request using node-fetch
    const response = await fetch(`${process.env.REACT_APP_API_URL}/search/${query}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    // await response
    const { data, error }: JSONResponse = await response.json()

    // handle errors in response
    if (!response.ok) {
        return Promise.reject(error)
    }

    // return  results

    return data
}

const searchServices = { getSearchResults }
export default searchServices
