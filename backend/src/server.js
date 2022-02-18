require('dotenv').config({path:__dirname+'../.env'})
const app = require('./app')

//environment variables
const {PORT} = process.env


//initialize server
app.listen(PORT, () => {
	console.log("listening");
});
