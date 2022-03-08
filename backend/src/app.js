const express = require('express')
const cors = require('cors')
const passport = require('passport')
const morganMiddleware = require('./config/morganMiddleware')

/**
 * -------------- GENERAL SETUP ----------------
 */

//create express app
const app = express()

//require knex function to communicate with database
require('./database/connection')

// Pass the global passport object into the configuration function
require('./config/passport')(passport)

// This will initialize the passport object on every request
app.use(passport.initialize())

//configure app
// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morganMiddleware)

// Allows our application to make HTTP requests to Express application
app.use(cors())

// Imports all of the routes from ./routes/index.js
app.use(require('./routes'))

module.exports = app
