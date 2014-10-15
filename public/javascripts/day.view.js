var DayView = function(day) {
	this.day = day;
	this.$el = $(this.template(this.day));
	console.log(this.$el)
	console.log(this.day.hotel)
	// this.addEventListeners();
}

DayView.prototype.template = _.template($('#day_template').html());

DayView.prototype.render = function() {
	console.log('test')
  $('body').append(this.$el);
}

