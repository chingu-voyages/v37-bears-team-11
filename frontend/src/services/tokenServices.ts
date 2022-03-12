import jwt_decode from 'jwt-decode'

const TokenServices = {
    saveAuthToken(token: any) {
        console.log(token)
        if (process.env.REACT_APP_TOKEN_KEY)
            window.localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, token)
    },
    getAuthToken() {
        if (process.env.REACT_APP_TOKEN_KEY)
            return window.localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)
    },
    clearAuthToken() {
        if (process.env.REACT_APP_TOKEN_KEY) window.localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY)
    },
    hasAuthToken() {
        return !!TokenServices.getAuthToken()
    },
    decodeToken(): any {
        if (process.env.REACT_APP_TOKEN_KEY) {
            const token = window.localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)
            if (token) {
                const tokenWithoutBearer = token.replace('Bearer ', '')
                console.log('decoded token: ', jwt_decode(tokenWithoutBearer))
                return jwt_decode(tokenWithoutBearer)
            }
        }
    },
}

export default TokenServices
