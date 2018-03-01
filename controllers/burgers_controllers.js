var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObj = {
			burgers: data
		};
		res.render("index", hbsObj);
	});
});

router.post("/api/burgers", function(req, res) {
	burger.insertOne("burger_name", req.body.burger_name, function(result) {
		res.redirect("/");
	});
});

router.put("/api/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	burger.updateOne({
		devoured: true
	}, condition, function(data) {
		res.redirect("/");
	});
});

module.exports = router;