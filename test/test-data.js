
// global, for html page
assert = require("assert");
tmkt = require("../tmkt.js");

module.exports = {

	".DAY_MILLISECONDS": function(done){
		//.DAY_MILLISECONDS		// 24*60*60*1000= 86400000
		assert(tmkt.DAY_MILLISECONDS === 24 * 60 * 60 * 1000);

		done(false);
	},

	'to/from string': function (done) {
		var dt = new Date(2020, 2, 1, 12, 34, 56);	//test date for utc testing
		var dtUtc = new Date(dt.getTime() + dt.getTimezoneOffset() * 60 * 1000);	//minutes of TimezoneOffset to milliseconds

		//.toString19( dt, toUtc )		//Date to "YYYY-MM-DD hh:mm:ss"
		assert(tmkt.toString19(new Date(2020, 2, 1, 12, 34, 56)) === "2020-03-01 12:34:56");

		//.'toString19() toUTC
		assert(tmkt.toString19(dt, true) === tmkt.toString19(dtUtc));

		//.toString23( dt, toUtc )		//Date to "YYYY-MM-DD hh:mm:ss.fff"
		assert(tmkt.toString23(new Date(2020, 2, 1, 12, 34, 56, 123)) === "2020-03-01 12:34:56.123");

		//.toString14( dt, toUtc )		//Date to "yyyymmddHHMMSS"
		assert(tmkt.toString14(new Date(2020, 2, 1, 12, 34, 56)) === "20200301123456");

		//.toString14() toUTC
		assert(tmkt.toString14(dt, true) === tmkt.toString14(dtUtc));

		//.toMdhms14( dt, toUtc )		//Date to "MM-DD hh:mm:ss"
		assert(tmkt.toMdhms14(new Date(2020, 2, 1, 12, 34, 56)) === "03-01 12:34:56");

		//.toMdhms14() toUTC
		assert(tmkt.toMdhms14(dt, true) === tmkt.toMdhms14(dtUtc));

		//.toYmd10( dt, toUtc )		//Date to "YYYY-MM-DD"
		assert(tmkt.toYmd10(new Date(2020, 2, 1, 12, 34, 56)) === "2020-03-01");

		//.toYmd10() toUTC
		assert(tmkt.toYmd10(dt, true) === tmkt.toYmd10(dtUtc));

		//.toYmd8( dt, toUtc )		//Date to "YYYYMMDD"
		assert(tmkt.toYmd8(new Date(2020, 2, 1, 12, 34, 56)) === "20200301");

		//.toYmd8() toUTC
		assert(tmkt.toYmd8(dt, true) === tmkt.toYmd8(dtUtc));

		//.toYmd6( dt, toUtc )		//Date to "YYMMDD"
		assert(tmkt.toYmd6(new Date(2020, 2, 1, 12, 34, 56)) === "200301");

		//.toYmd6() toUTC
		assert(tmkt.toYmd6(dt, true) === tmkt.toYmd6(dtUtc));

		//.toHms8( dt, toUtc )		//Date to "hh:mm:ss"
		assert(tmkt.toHms8(new Date(2020, 2, 1, 12, 34, 56)) === "12:34:56");

		//.toHms8() toUTC
		assert(tmkt.toHms8(dt, true) === tmkt.toHms8(dtUtc));

		//.toHm5( dt, toUtc )		//Date to "hh:mm"
		assert(tmkt.toHm5(new Date(2020, 2, 1, 12, 34, 56)) === "12:34");

		//.toHm5() toUTC
		assert(tmkt.toHm5(dt, true) === tmkt.toHm5(dtUtc));

		//.fromString19( s, fromUtc )        //"YYYY-MM-DD hh:mm:ss" to Date
		assert(tmkt.fromString19("2020-03-01 12:34:56").getTime() === (new Date(2020, 2, 1, 12, 34, 56)).getTime());

		//.fromString19() fromUtc
		assert(tmkt.fromString19(tmkt.toString19(dtUtc), true).getTime() === dt.getTime());

		//.fromString23( s, fromUtc )		//"YYYY-MM-DD hh:mm:ss.fff" to Date
		assert(tmkt.fromString23("2020-03-01 12:34:56.123").getTime() === (new Date(2020, 2, 1, 12, 34, 56, 123)).getTime());

		//.fromString14( s, fromUtc )		//"yyyymmddHHMMSS" to Date
		assert(tmkt.fromString14("20200301123456").getTime() === (new Date(2020, 2, 1, 12, 34, 56)).getTime());

		//.fromString14() fromUtc
		assert(tmkt.fromString14(tmkt.toString14(dtUtc), true).getTime() === dt.getTime());

		//.fromYmd10( s )		//"YYYY-MM-DD" to Date
		assert(tmkt.fromYmd10("2020-03-01").getTime() === (new Date(2020, 2, 1, 0, 0, 0)).getTime());

		//.fromYmd8( s )		//"YYYYMMDD" to Date
		assert(tmkt.fromYmd8("20200301").getTime() === (new Date(2020, 2, 1, 0, 0, 0)).getTime());

		done(false);
	},

	"utc/local/utcNow": function(done){
		var dt = new Date(2020, 2, 1, 12, 34, 56);	//test date for utc testing
		var dtUtc = new Date(dt.getTime() + dt.getTimezoneOffset() * 60 * 1000);	//minutes of TimezoneOffset to milliseconds

		//.utcToLocal( dt )		//utc to local
		assert(tmkt.utcToLocal(dtUtc).getTime() === dt.getTime());

		//.localToUtc( dt )		//local to utc
		assert(tmkt.localToUtc(dt).getTime() === dtUtc.getTime());

		//.utcNow()		//utc now
		console.log("locale", new Date(), "" + new Date());
		console.log("utcNow", tmkt.utcNow(), "" + tmkt.utcNow());

		done(false);
	},

	"month-first/last-day": function(done){
		//.monthStart( dt )		//month start: YYYY-MM-01 00:00:00
		assert(tmkt.monthStart(new Date(2020, 2, 15)).getTime() === (new Date(2020, 2, 1, 0, 0, 0, 0)).getTime());

		//.monthEnd( dt )		//month end: YYYY-MM-31/30/28/29 23:59:59.999
		assert(tmkt.monthEnd(new Date(2020, 2, 15)).getTime() === (new Date(2020, 2, 31, 23, 59, 59, 999)).getTime());

		//.previousMonthStart( dt )		//previous month start: YYYY-MM-01 00:00:00
		assert(tmkt.previousMonthStart(new Date(2020, 2, 15)).getTime() === (new Date(2020, 1, 1, 0, 0, 0, 0)).getTime());

		//.previousMonthEnd( dt )		//previous month end: YYYY-MM-31/30/28/29 23:59:59.999
		assert(tmkt.previousMonthEnd(new Date(2020, 2, 15)).getTime() === (new Date(2020, 1, 29, 23, 59, 59, 999)).getTime());

		//.nextMonthStart( dt )		//next month start: YYYY-MM-01 00:00:00
		assert(tmkt.nextMonthStart(new Date(2020, 2, 15)).getTime() === (new Date(2020, 3, 1, 0, 0, 0, 0)).getTime());

		//.nextMonthEnd( dt )		//next month end: YYYY-MM-31/30/28/29 23:59:59.999
		assert(tmkt.nextMonthEnd(new Date(2020, 2, 15)).getTime() === (new Date(2020, 3, 30, 23, 59, 59, 999)).getTime());
		
		done(false);
	},

	".monthDayNumber()": function(done){

		//.monthDayNumber( dt )              //get month day number, 28/29/30/31
		assert(tmkt.monthDayNumber(new Date(2020, 1, 15)) === 29);

		done(false);
	},

	".diffDhms()": function(done){
		//.diffDhms(startTime, endTime, shorten, charset)		//date diff to "0d 0h 0m 0s", or "[0d ][0h ][0m ]0s" for `shorten`
		assert(tmkt.diffDhms(new Date(2000, 1, 3, 5, 5, 6), new Date(2000, 1, 4, 5, 6, 7)) === '1d 0h 1m 1s');
		assert(tmkt.diffDhms(new Date(2000, 1, 4, 5, 6, 7), new Date(2000, 1, 3, 5, 5, 6)) === '-1d 0h 1m 1s');	//negative

		assert(tmkt.diffDhms(new Date(2000, 1, 4, 5, 6, 7), new Date(2000, 1, 3, 5, 5, 6), null, "ch") === '-1天0时1分1秒');	//only support charset=chinese

		assert(tmkt.diffDhms(new Date(2000, 1, 3, 5, 5, 6), new Date(2000, 1, 4, 5, 6, 7),true) === '1d 1m 1s');	//shorten
		assert(tmkt.diffDhms(new Date(2000, 1, 3, 5, 5, 6), new Date(2000, 1, 3, 5, 6, 7),true) === '1m 1s');	//shorten
		assert(tmkt.diffDhms(new Date(2000, 1, 3, 5, 5, 6), new Date(2000, 1, 3, 5, 6, 6),true) === '1m 0s');	//the last is not shorten
		assert(tmkt.diffDhms(new Date(2000, 1, 3, 5, 6, 6), new Date(2000, 1, 3, 5, 6, 6),true, "ch") === '0秒');

		done(false);
	},

	".diffDhm()": function(done){
		//.diffDhm(startTime, endTime, shorten, charset)		//date diff to "0d 0h 0m", or "[0d ][0h ]0m" for `shorten`
		assert(tmkt.diffDhm(new Date(2000, 1, 3, 5, 5, 6), new Date(2000, 1, 4, 5, 6, 7)) === '1d 0h 1m');
		assert(tmkt.diffDhm(new Date(2000, 1, 4, 5, 6, 7), new Date(2000, 1, 3, 5, 5, 6)) === '-1d 0h 1m');	//negative

		assert(tmkt.diffDhm(new Date(2000, 1, 4, 5, 6, 7), new Date(2000, 1, 3, 5, 5, 6), null, "ch") === '-1天0时1分');	//only support charset=chinese

		assert(tmkt.diffDhm(new Date(2000, 1, 3, 5, 5, 6), new Date(2000, 1, 4, 5, 6, 7),true) === '1d 1m');	//shorten
		assert(tmkt.diffDhm(new Date(2000, 1, 3, 5, 5, 6), new Date(2000, 1, 3, 5, 6, 7),true) === '1m');	//shorten
		assert(tmkt.diffDhm(new Date(2000, 1, 3, 5, 5, 6), new Date(2000, 1, 3, 5, 6, 6),true) === '1m');	//the last is not shorten
		assert(tmkt.diffDhm(new Date(2000, 1, 3, 5, 6, 6), new Date(2000, 1, 3, 5, 6, 6),true, "ch") === '0分');

		done(false);
	},
};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('mocha-test', function () { for (var i in module.exports) { it(i, module.exports[i]); } });
