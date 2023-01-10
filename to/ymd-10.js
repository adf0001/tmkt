
//Date to "YYYY-MM-DD"
module.exports = function (dt, toUtc) {
	if (!dt) dt = new Date();
	var s = toUtc ?
		(dt.getUTCFullYear() + "-" + (dt.getUTCMonth() + 1) + "-" + dt.getUTCDate())
		:
		(dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate());

	return s.replace(/\b(\d)\b/g, "0$1");
}
