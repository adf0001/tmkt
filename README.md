# tmkt
Time kit.

## Install

```
npm install tmkt
```

## Example

```
var tmkt= require("tmkt");

tmkt.toString19(dt);
```

## Usage & Api

```javascript

tmkt = require("tmkt");

//.DAY_MILLISECONDS		// 24*60*60*1000= 86400000
assert(tmkt.DAY_MILLISECONDS === 24 * 60 * 60 * 1000);

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

//.toMdhms14( dt, toUtc )		//Date to "MM-DD hh:mm:ss"
assert(tmkt.toMdhms14(new Date(2020, 2, 1, 12, 34, 56)) === "03-01 12:34:56");

//.toYmd10( dt, toUtc )		//Date to "YYYY-MM-DD"
assert(tmkt.toYmd10(new Date(2020, 2, 1, 12, 34, 56)) === "2020-03-01");

//.toYmd8( dt, toUtc )		//Date to "YYYYMMDD"
assert(tmkt.toYmd8(new Date(2020, 2, 1, 12, 34, 56)) === "20200301");

//.toYmd6( dt, toUtc )		//Date to "YYMMDD"
assert(tmkt.toYmd6(new Date(2020, 2, 1, 12, 34, 56)) === "200301");

//.toHms8( dt, toUtc )		//Date to "hh:mm:ss"
assert(tmkt.toHms8(new Date(2020, 2, 1, 12, 34, 56)) === "12:34:56");

//.toHm5( dt, toUtc )		//Date to "hh:mm"
assert(tmkt.toHm5(new Date(2020, 2, 1, 12, 34, 56)) === "12:34");

//.fromString19( s, fromUtc )        //"YYYY-MM-DD hh:mm:ss" to Date
assert(tmkt.fromString19("2020-03-01 12:34:56").getTime() === (new Date(2020, 2, 1, 12, 34, 56)).getTime());

//.fromString19() fromUtc
assert(tmkt.fromString19(tmkt.toString19(dtUtc), true).getTime() === dt.getTime());

//.fromString23( s, fromUtc )		//"YYYY-MM-DD hh:mm:ss.fff" to Date
assert(tmkt.fromString23("2020-03-01 12:34:56.123").getTime() === (new Date(2020, 2, 1, 12, 34, 56, 123)).getTime());

//.fromString14( s, fromUtc )		//"yyyymmddHHMMSS" to Date
assert(tmkt.fromString14("20200301123456").getTime() === (new Date(2020, 2, 1, 12, 34, 56)).getTime());

//.fromYmd10( s )		//"YYYY-MM-DD" to Date
assert(tmkt.fromYmd10("2020-03-01").getTime() === (new Date(2020, 2, 1, 0, 0, 0)).getTime());

//.fromYmd8( s )		//"YYYYMMDD" to Date
assert(tmkt.fromYmd8("20200301").getTime() === (new Date(2020, 2, 1, 0, 0, 0)).getTime());

//.utcToLocal( dt )		//utc to local
assert(tmkt.utcToLocal(dtUtc).getTime() === dt.getTime());

//.localToUtc( dt )		//local to utc
assert(tmkt.localToUtc(dt).getTime() === dtUtc.getTime());

//.utcNow()		//utc now
console.log("locale", new Date(), "" + new Date());
console.log("utcNow", tmkt.utcNow(), "" + tmkt.utcNow());

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

//.monthDayNumber( dt )              //get month day number, 28/29/30/31
assert(tmkt.monthDayNumber(new Date(2020, 1, 15)) === 29);

//.diffDHMS(startTime, endTime, shorten, charset)		//date diff to "0d 0h 0m 0s", or "[0d ][0h ][0m ]0s" for `shorten`
assert(tmkt.diffDHMS(new Date(2000, 1, 3, 5, 5, 6), new Date(2000, 1, 4, 5, 6, 7)) === '1d 0h 1m 1s');
assert(tmkt.diffDHMS(new Date(2000, 1, 4, 5, 6, 7), new Date(2000, 1, 3, 5, 5, 6)) === '-1d 0h 1m 1s');	//negative

assert(tmkt.diffDHMS(new Date(2000, 1, 4, 5, 6, 7), new Date(2000, 1, 3, 5, 5, 6), null, "ch") === '-1天0时1分1秒');	//only support charset=chinese

assert(tmkt.diffDHMS(new Date(2000, 1, 3, 5, 5, 6), new Date(2000, 1, 4, 5, 6, 7),true) === '1d 1m 1s');	//shorten
assert(tmkt.diffDHMS(new Date(2000, 1, 3, 5, 5, 6), new Date(2000, 1, 3, 5, 6, 7),true) === '1m 1s');	//shorten
assert(tmkt.diffDHMS(new Date(2000, 1, 3, 5, 5, 6), new Date(2000, 1, 3, 5, 6, 6),true) === '1m 0s');	//the last is not shorten
assert(tmkt.diffDHMS(new Date(2000, 1, 3, 5, 6, 6), new Date(2000, 1, 3, 5, 6, 6),true, "ch") === '0秒');

//.diffDHM(startTime, endTime, shorten, charset)		//date diff to "0d 0h 0m", or "[0d ][0h ]0m" for `shorten`
assert(tmkt.diffDHM(new Date(2000, 1, 3, 5, 5, 6), new Date(2000, 1, 4, 5, 6, 7)) === '1d 0h 1m');

assert(tmkt.diffDHM(new Date(2000, 1, 3, 5, 5, 6), new Date(2000, 1, 4, 5, 6, 7),true) === '1d 1m');	//shorten
assert(tmkt.diffDHM(new Date(2000, 1, 3, 5, 5, 6), new Date(2000, 1, 3, 5, 6, 7),true) === '1m');	//shorten

```

