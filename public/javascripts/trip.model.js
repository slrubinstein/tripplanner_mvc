

var Trip = function() {
	this.currentDay = 1;
  this.days = [];
  //this.view = new DayView(this);
  var day1 = new Day()
  day1.hotel = "Ritz"
  this.days.push(day1);
  day1.view.template()
  day1.view.render()

}



// Day.prototype.addActivity = function(type, id) {
// 	if (type === "hotel") {
//    	this.hotel = id;
//   }
// };

// Day.prototype.removeActivity = function(type, id) {

// };

// Day.prototype.save = function() {
	
// };

var aTrip = new Trip();