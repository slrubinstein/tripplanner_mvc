
var HotelView = function(hotel) {
	this.hotel = hotel;
	this.$el = $(this.template(this.hotel));
	this.addEventListeners();
}


HotelView.prototype.template = _.template($('#hotel_template').html());

HotelView.prototype.render = function() {
  $('body').append(this.$el);
}


HotelView.prototype.addEventListeners = function() {
	this.$el.on('click', function(event) {
		console.log('foo')
		 var hotelName = $(event.target).html();
	    aTrip.days[aTrip.currentDay-1].addActivity("hotel", hotelName);
	})
};

 all_hotels.forEach(function(hotel) {
  var newHotel = new Hotel(hotel.name);
  newHotel.view.template()
  newHotel.view.render()
})