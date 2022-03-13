// type search result
export type SearchResult = {
    id: number
    name: string
    phone: string
    hours: string
    country: string
    city: string
    street: string
    zip: string
}

// type expected json response
export type JSONResponse =
    | {
          success: true
          data: SearchResult[]
          msg?: never
      }
    | {
          success: false
          data?: never
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
    const { success, data, msg }: JSONResponse = await response.json()

    // return data
    if (success) {
        return data

        // handle error in response
    } else {
        return Promise.reject(msg)
    }
}

const searchServices = { getSearchResults }
export default searchServices
