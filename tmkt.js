
/*
	Time kit
*/

//Milliseconds of one day, 24*60*60*1000= 86400000
var DAY_MILLISECONDS = 86400000;

//utc to local
var utcToLocal = function (dt) {
	return new Date(dt.getTime() - dt.getTimezoneOffset() * 60000);		//1 minute= 60000 milliseconds
}

//local to utc
var localToUtc = function (dt) {
	return new Date(dt.getTime() + dt.getTimezoneOffset() * 60000);		//1 minute= 60000 milliseconds
}

//get utc now
var utcNow = function () { return localToUtc(new Date()); }

//Date to "YYYY-MM-DD hh:mm:ss"
var toString19 = function (dt, toUtc) {
	if (!dt) dt = new Date();

	var s = toUtc ?
		(dt.getUTCFullYear() + "-" + (dt.getUTCMonth() + 1) + "-" + dt.getUTCDate() + " " + dt.getUTCHours() + ":" + dt.getUTCMinutes() + ":" + dt.getUTCSeconds())
		:
		(dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate() + " " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds());

	return s.replace(/\b(\d)\b/g, "0$1");
}

//Date to "yyyymmddHHMMSS"
var toString14 = function (dt, toUtc) { return toString19(dt, toUtc).replace(/\D/g, ""); }

//Date to "MM-DD hh:mm:ss"
var toMdhms14 = function (dt, toUtc) { return toString19(dt, toUtc).slice(-14); }

//Date to "YYYY-MM-DD hh:mm:ss.fff"
var toString23 = function (dt, toUtc) {
	if (!dt) dt = new Date();
	return toString19(dt) + "." + ("00" + (toUtc ? dt.getUTCMilliseconds() : dt.getMilliseconds())).slice(-3);
}

//"yyyymmddHHMMSS" to Date
var fromString14 = function (s, fromUtc) {
	var dt = new Date(
		parseInt(s.substring(0, 4), 10),
		s.substring(4, 6) - 1,
		s.substring(6, 8),
		s.substring(8, 10),
		s.substring(10, 12),
		s.substring(12, 14)
	);

	return fromUtc ? utcToLocal(dt) : dt;
}

//"yyyymmdd" to Date
var fromYmd8 = function (s) {
	return new Date(
		parseInt(s.substring(0, 4), 10),
		s.substring(4, 6) - 1,
		s.substring(6, 8),
		0, 0, 0
	);
}

//"YYYY-MM-DD hh:mm:ss" to Date
var fromString19 = function (s, fromUtc) {
	var sa = s.split(/\D/);
	var dt = new Date(parseInt(sa[0], 10), sa[1] - 1, sa[2], sa[3], sa[4], sa[5]);
	return fromUtc ? utcToLocal(dt) : dt;
}

//"YYYY-MM-DD hh:mm:ss.fff" to Date
var fromString23 = function (s, fromUtc) {
	var sa = s.split(/\D/);
	var dt = new Date(parseInt(sa[0], 10), sa[1] - 1, sa[2], sa[3], sa[4], sa[5], parseInt(sa[6], 10));
	return fromUtc ? utcToLocal(dt) : dt;
}

//"YYYY-MM-DD" to Date
var fromYmd10 = function (s) {
	var sa = s.split(/\D/);
	return new Date(parseInt(sa[0], 10), sa[1] - 1, sa[2], 0, 0, 0);
}

//Date to "hh:mm:ss"
var toHms8 = function (dt, toUtc) {
	if (!dt) dt = new Date();
	var s = toUtc ?
		(dt.getUTCHours() + ":" + dt.getUTCMinutes() + ":" + dt.getUTCSeconds())
		:
		(dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds());

	return s.replace(/\b(\d)\b/g, "0$1");
}

//Date to "hh:mm"
var toHm5 = function (dt, toUtc) { return toHms8(dt, toUtc).slice(0, 5); }

//Date to "YYYY-MM-DD"
var toYmd10 = function (dt, toUtc) {
	if (!dt) dt = new Date();
	var s = toUtc ?
		(dt.getUTCFullYear() + "-" + (dt.getUTCMonth() + 1) + "-" + dt.getUTCDate())
		:
		(dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate());

	return s.replace(/\b(\d)\b/g, "0$1");
}

//Date to "YYYYMMDD"
var toYmd8 = function (dt, toUtc) { return toYmd10(dt, toUtc).replace(/\D/g, ""); }

//Date to "YYMMDD"
var toYmd6 = function (dt, toUtc) { return toYmd8(dt, toUtc).slice(-6); }

//get month start Date: YYYY-MM-01 00:00:00
var monthStart = function (dt) { return new Date(dt.getFullYear(), dt.getMonth(), 1, 0, 0, 0); }

//get month end Date: YYYY-MM-31/30/28/29 23:59:59.999
var monthEnd = function (dt) {
	dt = new Date(dt.getTime() + (32 - dt.getDate()) * DAY_MILLISECONDS);		//next month
	return new Date(monthStart(dt).getTime() - 1);
}

//get previous month start Date: YYYY-MM-01 00:00:00
var previousMonthStart = function (dt) {
	dt = new Date(dt.getTime() - (dt.getDate() + 1) * DAY_MILLISECONDS);		//previous month
	return monthStart(dt);
}

//get previous month end Date: YYYY-MM-31/30/28/29 23:59:59.999
var previousMonthEnd = function (dt) {
	return new Date(monthStart(dt).getTime() - 1);
}

//get next month start Date: YYYY-MM-01 00:00:00
var nextMonthStart = function (dt) {
	dt = new Date(dt.getTime() + (32 - dt.getDate()) * DAY_MILLISECONDS);		//next month
	return monthStart(dt);
}

//get next month end Date: YYYY-MM-31/30/28/29 23:59:59.999
var nextMonthEnd = function (dt) {
	dt = new Date(dt.getTime() + (64 - dt.getDate()) * DAY_MILLISECONDS);		//next 2nd months
	dt = new Date(dt.getFullYear(), dt.getMonth(), 1, 0, 0, 0);
	return new Date(dt.getTime() - 1);
}

//get month day number
var monthDayNumber = function (dt) {
	return (nextMonthStart(dt) - monthStart(dt)) / DAY_MILLISECONDS;
}

module.exports = {
	DAY_MILLISECONDS: DAY_MILLISECONDS,

	utcToLocal: utcToLocal,
	localToUtc: localToUtc,
	utcNow: utcNow,

	toString19: toString19,
	toString14: toString14,
	toMdhms14: toMdhms14,
	toString23: toString23,

	fromString14: fromString14,
	fromYmd8: fromYmd8,
	fromString19: fromString19,
	fromYmd10: fromYmd10,
	fromString23: fromString23,

	toHms8: toHms8,
	toHm5: toHm5,

	toYmd10: toYmd10,
	toYmd8: toYmd8,
	toYmd6: toYmd6,

	monthStart: monthStart,
	monthEnd: monthEnd,
	previousMonthStart: previousMonthStart,
	previousMonthEnd: previousMonthEnd,
	nextMonthStart: nextMonthStart,
	nextMonthEnd: nextMonthEnd,

	monthDayNumber: monthDayNumber,

};

