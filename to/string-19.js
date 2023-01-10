
//Date to "YYYY-MM-DD hh:mm:ss"
module.exports = function (dt, toUtc) {
	if (!dt) dt = new Date();

	var s = toUtc ?
		(dt.getUTCFullYear() + "-" + (dt.getUTCMonth() + 1) + "-" + dt.getUTCDate() + " " + dt.getUTCHours() + ":" + dt.getUTCMinutes() + ":" + dt.getUTCSeconds())
		:
		(dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate() + " " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds());

	return s.replace(/\b(\d)\b/g, "0$1");
}
