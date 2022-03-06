const ApiServices = {
    postLogin({ email, password }) {
        return fetch(`${process.env.REACT_APP_API_ENDPOINT}/users/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()))
    },

    postUser(user) {
        return fetch(`${process.env.REACT_APP_API_ENDPOINT}/users/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()))
    },

    getUser(userID, authToken) {
        return fetch(`${process.env.REACT_APP_API_ENDPOINT}/users/${userID}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                Authorization: authToken,
            },
        }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()))
    },
}

export default ApiServices
