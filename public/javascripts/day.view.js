
var DayView = function(day) {
	this.day = day;
	this.$el = $(this.template(this.day));
	//this.addEventListeners();
}

DayView.prototype.template = _.template($('#day_template').html());

DayView.prototype.render = function() {
	
  $('body').append(this.$el);
}
