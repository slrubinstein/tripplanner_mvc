var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripplanner');

var placeSchema = new mongoose.Schema({
  address: String,
  city: String,
  state: String,
  phone: String,
  location: [Number, Number]
});

var hotelSchema = new mongoose.Schema({
  name: String,
  place: [placeSchema],
  num_stars: Number,
  amenities: String
});

var thingsToDoSchema = new mongoose.Schema({
	name: String,
	place: [placeSchema],
	age_range: String
});

var restaurantSchema = new mongoose.Schema({
	name: String,
	cuisine: String,
	place: [placeSchema],
	price: {
		type: Number,
		require: true,
		min: 1,
		max: 5
	}
});

var daySchema = new mongoose.Schema({
	hotel: {type: mongoose.Schema.ObjectId, ref: 'Hotel'},
	restaurants: [{type: mongoose.Schema.ObjectId, ref: 'Restaurant'}],
	thingsToDo: [{type: mongoose.Schema.ObjectId, ref: 'ThingsToDo'}]
});

module.exports = {
	Day: mongoose.model('Day', daySchema),
	Place: mongoose.model('Place', placeSchema),
	Hotel: mongoose.model('Hotel', hotelSchema),
	ThingsToDo: mongoose.model('ThingsToDo', thingsToDoSchema),
	Restaurant: mongoose.model('Restaurant', restaurantSchema)
};



