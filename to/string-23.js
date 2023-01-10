
var to_string_19 = require("./string-19");

//Date to "YYYY-MM-DD hh:mm:ss.fff"
module.exports = function (dt, toUtc) {
	if (!dt) dt = new Date();
	return to_string_19(dt) + "." + ("00" + (toUtc ? dt.getUTCMilliseconds() : dt.getMilliseconds())).slice(-3);
}
