const express = require("express");

//create express app
const app = express();
//require knex function to communicate with database
const knex = require("./database/connection");

//configure app
//handle cors error (temporary fix) 
 app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

  /**
 * sample routes
 * create route to GET all users from database
 * create route to Get all food trucks
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

app.get("/search/*", async (req, res) => {
	try {
		//query database using knex function
		const data = await knex("food_trucks").select("*");
		return res.json({data});
	} catch (err) {
		return res.send("error");
	}
});



module.exports = app;
