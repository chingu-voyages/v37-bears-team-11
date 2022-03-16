// type search result
export type SearchResult = {
    id: number
    name: string
    phone: string
    hours: string
    country: string
    city: string
    state?: string
    street: string
    zip?: string
}

// type expected json response
export type JSONResponse =
    | {
          success: true
          data: SearchResult[]
      }
    | {
          success: false
          msg: string
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
    const JSONresponse: JSONResponse = await response.json()
    const { success } = JSONresponse

    // return data
    if (success) {
        const { data } = JSONresponse

        return data

        // handle error in response
    } else {
        const { msg } = JSONresponse
        return Promise.reject(msg)
    }
}

const searchServices = { getSearchResults }
export default searchServices
