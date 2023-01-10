
//fake utc to local
//get a real date from a fake utc, whose local expression is actually a utc.
module.exports = function (dt) {
	return new Date(dt.getTime() - dt.getTimezoneOffset() * 60000);		//1 minute= 60000 milliseconds
}
