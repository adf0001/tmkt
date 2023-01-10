
var from_fake_utc = require("./fake-utc");

//"yyyymmddHHMMSS" to Date
module.exports = function (s, fromUtc) {
	var dt = new Date(
		parseInt(s.substring(0, 4), 10),
		s.substring(4, 6) - 1,
		s.substring(6, 8),
		s.substring(8, 10),
		s.substring(10, 12),
		s.substring(12, 14)
	);

	return fromUtc ? from_fake_utc(dt) : dt;
}
