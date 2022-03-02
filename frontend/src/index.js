import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import WebFont from 'webfontloader'
import App from './App'
import reportWebVitals from './reportWebVitals'

WebFont.load({
    google: {
        // families: ['PT Sans:regular,italic,bold,bold-italic']
        families: ['M PLUS Rounded 1c:500,700,800,900'],
    },
})

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
