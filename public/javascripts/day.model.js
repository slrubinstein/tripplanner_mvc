

var Day = function() {
	this.hotel = null;
	this.restaurants = [];
	this.thingsToDO = [];
  this.view = new DayView(this);
}



Day.prototype.addActivity = function(type, id) {
	if (type === "hotel") {
   	this.hotel = id;
  }
};

Day.prototype.removeActivity = function(type, id) {

};

Day.prototype.save = function() {
	
};