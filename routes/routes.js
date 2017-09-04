var express = require("express");
var router = express.Router();
var models = require("../models/models.js");

/* GET users listing. */
router.get("/123", function(req, res) {
	console.log("/123 called");
	models.removeAll(function(data) {
		models.add("Andy", function(data) {
			models.all(function(data) {
				console.log(data);
				res.json(data);
			});
		});
	});

	/*res.json([{
		id: 1,
		username: "samsepi0l"
	}, {
		id: 2,
		username: "D0loresH4ze"
	}]);*/
});

module.exports = router;
