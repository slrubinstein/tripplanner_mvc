var Trip = function() {
	this.currentDay = 1;
  this.days = [];
  this.addDay();

}

Trip.prototype.addDay = function() {
	var newDay = new Day('the ritz');
	console.log('new day.view', newDay.view)
	newDay.view.template()
	console.log(newDay.view.template)
  newDay.view.render()	
  this.days.push(newDay);
};


var aTrip = new Trip();
