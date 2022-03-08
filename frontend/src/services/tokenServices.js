import jwt from 'jsonwebtoken'

const TokenServices = {
    saveAuthToken(token) {
        console.log(token)
        window.localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, token)
    },
    getAuthToken() {
        return window.localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)
    },
    clearAuthToken() {
        window.localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY)
    },
    hasAuthToken() {
        return !!TokenServices.getAuthToken()
    },
    decodeToken() {
        const token = window.localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)
        return jwt.verify(token, process.env.REACT_APP_TOKEN_KEY)
    },
}

export default TokenServices
