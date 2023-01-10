
var from_fake_utc = require("./fake-utc");

//"YYYY-MM-DD hh:mm:ss.fff" to Date
module.exports = function (s, fromUtc) {
	var sa = s.split(/\D/);
	var dt = new Date(parseInt(sa[0], 10), sa[1] - 1, sa[2], sa[3], sa[4], sa[5], parseInt(sa[6], 10));
	return fromUtc ? from_fake_utc(dt) : dt;
}
