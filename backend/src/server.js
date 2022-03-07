const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '..', '.env') })
const app = require('./app')

//environment variables
const { PORT } = process.env

//initialize server
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})
