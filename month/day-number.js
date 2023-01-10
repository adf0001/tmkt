
var month_next_start = require("./next-start");
var month_start = require("./start");
var DAY_MILLISECONDS = require("../day/milliseconds");

//get month day number
module.exports = function (dt) {
	return (month_next_start(dt) - month_start(dt)) / DAY_MILLISECONDS;
}