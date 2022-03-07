const express = require('express')
const cors = require('cors')
const passport = require('passport')

/**
 * -------------- GENERAL SETUP ----------------
 */

//create express app
const app = express()

//require knex function to communicate with database
const knex = require('./database/connection')

// Pass the global passport object into the configuration function
require('./config/passport')(passport)

// This will initialize the passport object on every request
app.use(passport.initialize())

//configure app
// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Allows our application to make HTTP requests to Express application
app.use(cors())

/**
 * -------------- ROUTES ----------------
 */

// Imports all of the routes from ./routes/index.js
app.use(require('./routes'))

/**
 * sample route
 * create route to GET all users from database
 **/

app.get('/users', async (req, res) => {
    try {
        //query database using knex function
        const data = await knex('users').select('*')
        return res.json(data)
    } catch (err) {
        return res.send('error')
    }
})

module.exports = app
