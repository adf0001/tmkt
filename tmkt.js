
// tmkt @ npm, time kit.

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
var monthEnd = function (dt) { return new Date(dt.getFullYear(), dt.getMonth() + 1, 1, 0, 0, 0, -1); }

//get previous month start Date: YYYY-MM-01 00:00:00
var previousMonthStart = function (dt) { return new Date(dt.getFullYear(), dt.getMonth() - 1, 1, 0, 0, 0); }

//get previous month end Date: YYYY-MM-31/30/28/29 23:59:59.999
var previousMonthEnd = function (dt) { return new Date(dt.getFullYear(), dt.getMonth(), 1, 0, 0, 0, -1); }

//get next month start Date: YYYY-MM-01 00:00:00
var nextMonthStart = function (dt) { return new Date(dt.getFullYear(), dt.getMonth() + 1, 1, 0, 0, 0); }

//get next month end Date: YYYY-MM-31/30/28/29 23:59:59.999
var nextMonthEnd = function (dt) { return new Date(dt.getFullYear(), dt.getMonth() + 2, 1, 0, 0, 0, -1); }

//get month day number
var monthDayNumber = function (dt) {
	return (nextMonthStart(dt) - monthStart(dt)) / DAY_MILLISECONDS;
}

//Date diff string "*d *h *m *s", or "[*d ][*h ][*m ]*s" for `shorten`
var diffDhms = function (startTime, endTime, shorten, charset) {
	var n = endTime - startTime;		//milliseconds

	var sign = (n < 0) ? "-" : "";
	if (sign) n = -n;

	//var milliseconds= n%1000;
	n = Math.round(n / 1000);	//seconds
	var seconds = n % 60;
	n = Math.round(n / 60);	//minutes
	var minutes = n % 60;
	n = (n - minutes) / 60;	//hours
	var hours = n % 24;
	n = (n - hours) / 24;	//days
	var days = n;

	//charset
	var s;
	if (charset) {
		if (charset.match(/^(gb|ch|zh|936|chinese)$/i)) {
			s = sign + days + '天' + hours + '时' + minutes + '分' + seconds + "秒";
		}
	}

	if (!s) s = sign + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';

	//shorten
	return shorten ? s.replace(/(\d+)(\D+)(?!$)/g, function (m, p1) { return (p1 === "0") ? "" : m; }) : s;
}

//Date diff string "*d *h *m", or "[*d] [*h] *m" for `shorten`
var diffDhm = function (startTime, endTime, shorten, charset) {
	var s = diffDhms(startTime, endTime, false, charset).replace(/\s*\d+(\D+)?$/, "");	//remove the last number

	//shorten
	return shorten ? s.replace(/(\d+)(\D+)(?!$)/g, function (m, p1) { return (p1 === "0") ? "" : m; }) : s;
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

	diffDhms: diffDhms,
	diffDhm: diffDhm,

};

