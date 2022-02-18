const express = require("express");
//create express app
const app = express();
//require knex function to communicate with database
const knex = require("./database/connection");

//configure app

/**
 * sample route
 * create route to GET all users from database
 **/

app.get("/users", async (req, res) => {
	try {
		//query database using knex function
		const data = await knex("users").select("*");
		return res.json(data);
	} catch (err) {
		return res.send("error");
	}
});



module.exports = app;
