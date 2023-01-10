
//Date to "hh:mm:ss"
module.exports = function (dt, toUtc) {
	if (!dt) dt = new Date();
	var s = toUtc ?
		(dt.getUTCHours() + ":" + dt.getUTCMinutes() + ":" + dt.getUTCSeconds())
		:
		(dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds());

	return s.replace(/\b(\d)\b/g, "0$1");
}
