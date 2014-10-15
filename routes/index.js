var express = require('express');
var router = express.Router();

var models = require('../models');
router.get('/',
	function(req, res, next) {
		models.Hotel.find(function(err, results) {
			req.body.hotels = results;
			next();
		});
	},
	function(req, res, next) {
		models.ThingsToDo.find(function(err, results) {
			req.body.thingsToDo = results;
			next();
		})
	},
	function(req, res, next) {
		models.Restaurant.find(function(err, results) {
			req.body.restaurants = results;
			next();
		})
	},
	function(req, res, next) {
		models.Day.find()
		.populate('hotel thingsToDo restaurants')
		.exec(function(err, results) {
			req.body.days = results;
			next();
		})
	},
	function(req, res) {
		res.render('index', {
			days: req.body.days,
			hotels: req.body.hotels,
			things_to_do: req.body.thingsToDo,
			restaurants: req.body.restaurants,
			title: "Trip Planner"
		});
	}
);



module.exports = router;
