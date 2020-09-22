
var assert = require("assert");

var tmkt = require("../tmkt.js");


var dt = new Date(2020, 0, 1, 12, 34, 56);
var dts = "2020-01-01 12:34:56";

var dtd = new Date(2020, 0, 1, 0, 0, 0);

//China-beijing: GMT+8. Change them manually to your time zone.
var dtUtc = new Date(2020, 0, 1, 4, 34, 56);
var dtsUtc = "2020-01-01 04:34:56";

//Check time zone
if ((dtUtc.getTime() - dtUtc.getTimezoneOffset() * 60 * 1000) != dt.getTime()) throw Error("time zone fail");

describe('tmkt', function () {
	it('DAY_MILLISECONDS', function () {
		assert(tmkt.DAY_MILLISECONDS == 24*60*60*1000);
	});

	it('toString19', function () {
		assert(tmkt.toString19(dt) == dts);
	});
	it('toString19 toUTC', function () {
		assert(tmkt.toString19(dt, true) == dtsUtc);
	});
	it('toString14', function () {
		assert(tmkt.toString14(dt) == dts.replace(/\D/g, ""));
	});
	it('toString14 toUTC', function () {
		assert(tmkt.toString14(dt, true) == dtsUtc.replace(/\D/g, ""));
	});
	it('toMdhms14', function () {
		assert(tmkt.toMdhms14(dt) == dts.slice(-14));
	});
	it('toMdhms14 toUTC', function () {
		assert(tmkt.toMdhms14(dt, true) == dtsUtc.slice(-14));
	});
	it('toYmd10', function () {
		assert(tmkt.toYmd10(dt) == dts.slice(0, 10));
	});
	it('toYmd10 toUTC', function () {
		assert(tmkt.toYmd10(dt, true) == dtsUtc.slice(0, 10));
	});
	it('toYmd8', function () {
		assert(tmkt.toYmd8(dt) == dts.slice(0, 10).replace(/\D/g, ""));
	});
	it('toYmd8 toUTC', function () {
		assert(tmkt.toYmd8(dt, true) == dtsUtc.slice(0, 10).replace(/\D/g, ""));
	});
	it('toYmd6', function () {
		assert(tmkt.toYmd6(dt) == dts.slice(2, 10).replace(/\D/g, ""));
	});
	it('toYmd6 toUTC', function () {
		assert(tmkt.toYmd6(dt, true) == dtsUtc.slice(2, 10).replace(/\D/g, ""));
	});
	it('toHms8', function () {
		assert(tmkt.toHms8(dt) == dts.slice(-8));
	});
	it('toHms8 toUTC', function () {
		assert(tmkt.toHms8(dt, true) == dtsUtc.slice(-8));
	});
	it('toHm5', function () {
		assert(tmkt.toHm5(dt) == dts.slice(-8, -3));
	});
	it('toHm5 toUTC', function () {
		assert(tmkt.toHm5(dt, true) == dtsUtc.slice(-8, -3));
	});

	it('fromString19', function () {
		assert(tmkt.fromString19(dts).getTime() == dt.getTime());
	});
	it('fromString19 fromUtc', function () {
		assert(tmkt.fromString19(dtsUtc, true).getTime() == dt.getTime());
	});
	it('fromString14', function () {
		assert(tmkt.fromString14(dts.replace(/\D/g, "")).getTime() == dt.getTime());
	});
	it('fromString14 fromUtc', function () {
		assert(tmkt.fromString14(dtsUtc.replace(/\D/g, ""), true).getTime() == dt.getTime());
	});
	it('fromYmd10', function () {
		assert(tmkt.fromYmd10(dts.slice(0, 10)).getTime() == dtd.getTime());
	});
	it('fromYmd8', function () {
		assert(tmkt.fromYmd8(dts.replace(/\D/g, "")).getTime() == dtd.getTime());
	});

	it('utcToLocal', function () {
		assert(tmkt.utcToLocal(dtUtc).getTime() == dt.getTime());
	});
	it('localToUtc', function () {
		assert(tmkt.localToUtc(dt).getTime() == dtUtc.getTime());
	});

	it('utcNow', function () {
		console.log("locale", new Date(), "" + new Date());
		console.log("utcNow", tmkt.utcNow(), "" + tmkt.utcNow());
	});

	it('monthStart', function () {
		var dt = tmkt.monthStart(new Date());
		console.log( dt, "" + dt);
	});
	it('monthEnd', function () {
		var dt = tmkt.monthEnd(new Date());
		console.log( dt, "" + dt);
	});
	it('previousMonthStart', function () {
		var dt = tmkt.previousMonthStart(new Date());
		console.log( dt, "" + dt);
	});
	it('previousMonthEnd', function () {
		var dt = tmkt.previousMonthEnd(new Date());
		console.log( dt, "" + dt);
	});
	it('nextMonthStart', function () {
		var dt = tmkt.nextMonthStart(new Date());
		console.log( dt, "" + dt);
	});
	it('nextMonthEnd', function () {
		var dt = tmkt.nextMonthEnd(new Date());
		console.log( dt, "" + dt);
	});
	it('getMonthDayNumber', function () {
		console.log( tmkt.getMonthDayNumber(new Date()));
	});

});
