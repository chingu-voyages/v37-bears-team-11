const router = require("express").Router();
const passport = require("passport");
const utils = require("../../lib/utils");
const path = require("path");
const filename = path.basename(__filename);
const Logger = require("../../lib/logger")(filename);
const searchServices = require("./services");

//retrieve food trucks that match user query
router.get("/:query", async function (req, res, next) {
	Logger.info(`/:query`);

	try {
		const query = req.params.query;
		const data = await searchServices.searchByUserQuery(query);
		return res.json({ success: true, data });
	} catch (error) {
		Logger.error(error);
		res
			.status(500)
			.json({
				success: false,
				msg: "Something went wrong while retrieving the resource",
			});
	}
});

module.exports = router;
