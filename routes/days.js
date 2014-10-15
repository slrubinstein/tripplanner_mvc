var router = require('express').Router();
var models = require('../models');

router.post('/', function(req,res) {
  models.Day.create({hotel: null}, function(err, day) {
  	res.json(day);
  });
});

router.delete('/:dayId', function(req, res) {
	models.Day.findByIdAndRemove(req.params.dayId, function(err, removed) {
		console.log("Removed day: ", removed);
		res.status(200).end();
	})
})
 
router.post('/:dayId/attractions', function(req,res) {

	switch(req.body.attraction_type) {
		case 'hotel' :
			models.Hotel.findById(req.body.attraction_id, function(err, hotel) {
				models.Day.findByIdAndUpdate(req.params.dayId, {
					$set: {hotel: hotel._id}
				}, function(err, day) {
					res.json(hotel);
				});
			})
			break;
		case 'thingToDo' :
			models.ThingsToDo.findById(req.body.attraction_id, function(err, thingToDo) {
				models.Day.findByIdAndUpdate(req.params.dayId, {
					$push: {thingsToDo: thingToDo}
				}, function(err, day) {
					res.json(thingToDo);
				});
			})
			break;
		case 'restaurant' :
			models.Restaurant.findById(req.body.attraction_id, function(err, restaurant) {
				models.Day.findByIdAndUpdate(req.params.dayId, {
					$push: {restaurants: restaurant}
				}, function(err, day) {
					res.json(restaurant);
				});
			})
			break;
	}

});

router.delete('/:dayId/attractions', function(req,res) {
	switch(req.body.attraction_type) {
		case 'hotel' :
			models.Day.findByIdAndUpdate(req.params.dayId, {
				$set: {hotel: null}
			}, function(err, day) {
				res.status(200).end();
			});
		case 'thingToDo' :
			models.Day.findByIdAndUpdate(req.params.dayId, {
				$pull: {thingsToDo: req.body.attraction_id}
			}, function(err, day) {
				res.status(200).end();
			});
		case 'restaurant' :
			models.Day.findByIdAndUpdate(req.params.dayId, {
				$pull: {restaurants: req.body.attraction_id}
			}, function(err, day) {
				res.status(200).end();
			});
	}
})
 
router.get('/', function(req,res) {
	models.Day.find()
	.populate('hotel thingsToDo restaurants')
	.exec(function(err, days) {
		res.json(days);
	})
});

module.exports = router;