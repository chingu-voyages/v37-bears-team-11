const knex = require("../../database/connection");

/**
 * -------------- SEARCH FUNCTIONS ----------------
 */

/**
 *
 * @param {string} query - The search query received from frontend
 * @returns {Promise}
 *
 * this function queries the database for any food truck names or item names 
 * that matches the query string and returns a promise
 * 
 * Raw POSTGRES query:
 *
 * 	select ft.name, ft.phone, ft.hours, a.country , a.city , a.street, a.zip from food_trucks ft
 * 	join addresses a on a.id=ft.address_id 
 * 		where ft.id in (
 * 			select ft2.id from food_trucks ft2
 *  		where ft2."name" ilike '%query%' 
 * 	    	union
 * 			select ft3.id from food_trucks ft3
 * 			join menu_items mi on mi.food_truck_id=ft3.id 
 * 			join items i on i.id=mi.item_id 
 * 			where i."name" ilike '%query%'
 * 						)

**/

async function searchByUserQuery(query) {
	//declare subquery
	const subquery = knex({ ft2: "food_trucks" })
		.select("ft2.id")
		.where("ft2.name", "Ilike", `%${query}%`)
		.union([
			knex({ ft3: "food_trucks" })
				.select("ft3.id")
				.join("menu_items", "menu_items.food_truck_id", "=", "ft3.id")
				.join("items", "items.id", "=", "menu_items.item_id")
				.where("items.name", "Ilike", `%${query}%`),
		]);

	return knex({ ft: "food_trucks" })
		.select(
			"ft.id",
			"ft.name",
			"ft.phone",
			"ft.hours",
			"a.country",
			"a.city",
			"a.street",
			"a.zip"
		)
		.join({ a: "addresses" }, "a.id", "=", "ft.id")
		.where("ft.id", "in", subquery);
}

async function searchByTag(tag) {
	return knex({ft: 'food_trucks'})
		.select(
			"ft.id",
			"ft.name",
			"ft.phone",
			"ft.hours",
			"a.country",
			"a.city",
			"a.street",
			"a.zip"
		)
		.join("food_truck_tag", "food_truck_tag.tag_id", "=", 'tags.id')
		.join('tags', "tags.id", "=", "food_truck_tag.tag_id" )
		.where('tags.name', '=', tag)


}
module.exports = { searchByUserQuery, searchByTag };
