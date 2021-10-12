# tmkt
Time kit.

## Install

`npm install tmkt`

## Example

```
var tmkt= require("tmkt");

tmkt.toString19(dt);
```


## API

0. const

    .DAY_MILLISECONDS === 86400000,        // 24*60*60*1000

1. to string

    .toString19( dt, toUtc )           //Date to "YYYY-MM-DD hh:mm:ss"
    .toString14( dt, toUtc )           //Date to "yyyymmddHHMMSS"
    .toMdhms14( dt, toUtc )            //Date to "MM-DD hh:mm:ss"
    .toYmd10( dt, toUtc )              //Date to "YYYY-MM-DD"
    .toYmd8( dt, toUtc )               //Date to "YYYYMMDD"
    .toYmd6( dt, toUtc )               //Date to "YYMMDD"
    .toHms8( dt, toUtc )               //Date to "hh:mm:ss"
    .toHm5( dt, toUtc )                //Date to "hh:mm"
  
2. from string

    .fromString19( s, fromUtc )        //"YYYY-MM-DD hh:mm:ss" to Date
    .fromString14( s, fromUtc )        //"yyyymmddHHMMSS" to Date
    .fromYmd10( s )                    //"YYYY-MM-DD" to Date
    .fromYmd8( s )                     //"YYYYMMDD" to Date

3. utc & local
    .utcToLocal( dt )                  //utc to local
    .localToUtc( dt )                  //local to utc
    .utcNow()                          //utc now

4. month tool

    .monthStart( dt )                  //month start: YYYY-MM-01 00:00:00
    .monthEnd( dt )                    //month end: YYYY-MM-31/30/28/29 23:59:59.999
    .previousMonthStart( dt )          //previous month start: YYYY-MM-01 00:00:00
    .previousMonthEnd( dt )            //previous month end: YYYY-MM-31/30/28/29 23:59:59.999
    .nextMonthStart( dt )              //next month start: YYYY-MM-01 00:00:00
    .nextMonthEnd( dt )                //next month end: YYYY-MM-31/30/28/29 23:59:59.999
    .monthDayNumber( dt )              //get month day number

