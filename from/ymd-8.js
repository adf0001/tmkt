
//"yyyymmdd" to Date
module.exports = function (s) {
	return new Date(
		parseInt(s.substring(0, 4), 10),
		s.substring(4, 6) - 1,
		s.substring(6, 8),
		0, 0, 0
	);
}
