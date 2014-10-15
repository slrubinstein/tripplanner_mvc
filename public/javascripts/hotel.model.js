

var Hotel = function(name, id, place, num_stars, amenities) {
	this.name = name;
	this.id = id;
	this.place = place;
	this.num_stars = num_stars;
	this.amenities = amenities;
	this.view = new HotelView(this);
}


