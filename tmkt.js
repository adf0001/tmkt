
"use strict";

/**
 * @module tmkt
 * 
 * @description
 * 
 * Time kit
 * 
 * # Contents #
 * 
 * 0. const
 *
 *  * [.constDayMilliseconds		]{@link module:tmkt~constDayMilliseconds}: 86400000,		// 24\*60\*60\*1000
 *
 * 1. to string
 *
 *  * [.toString14( dt )		]{@link module:tmkt~toString14}	//Date to "yyyymmddHHMMSS"
 *  * [.toString19( dt )		]{@link module:tmkt~toString19}	//Date to "YYYY-MM-DD hh:mm:ss"
 *  * [.toMdhms14( dt )			]{@link module:tmkt~toMdhms14}	//Date to "MM-DD hh:mm:ss"
 *  * [.toHms8( dt )			]{@link module:tmkt~toHms8}		//Date to "hh:mm:ss"
 *  * [.toHm5( dt )				]{@link module:tmkt~toHm5}		//Date to "hh:mm"
 *  * [.toYmd10( dt )			]{@link module:tmkt~toYmd10}		//Date to "YYYY-MM-DD"
 *  * [.toYmd6( dt )			]{@link module:tmkt~toYmd6}		//Date to "YYMMDD"
 *	  
 * 2. from string
 *
 *  * [.fromString19( s )		]{@link module:tmkt~fromString19}		//"YYYY-MM-DD hh:mm:ss" to Date
 *  * [.fromString14( s )		]{@link module:tmkt~fromString14}		//"yyyymmddHHMMSS" to Date
 *  * [.fromYmd10( s )			]{@link module:tmkt~fromYmd10}		//"YYYY-MM-DD" to Date
 *  * [.fromYmd8( s )			]{@link module:tmkt~fromYmd8}		//"YYYYMMDD" to Date
 *  * [.fromUtcString19( s )	]{@link module:tmkt~fromUtcString19}	//utc "YYYY-MM-DD hh:mm:ss" to Date
 *
 * 3. utc & local
 *  * [.utcToLocal( dt )		]{@link module:tmkt~utcToLocal}		//utc to local
 *  * [.localToUtc( dt )		]{@link module:tmkt~localToUtc}		//local to utc
 *  * [.utcNow()				]{@link module:tmkt~utcNow}			//utc now
 *
 * 4. month tool
 *
 *  * [.monthStart( dt )		]{@link module:tmkt~monthStart}		//month start: YYYY-MM-01 00:00:00
 *  * [.monthEnd( dt )			]{@link module:tmkt~monthEnd}			//month end: YYYY-MM-31/30/28/29 23:59:59.999
 *  * [.previousMonthStart( dt )	]{@link module:tmkt~previousMonthStart}	//previous month start: YYYY-MM-01 00:00:00
 *  * [.previousMonthEnd( dt )		]{@link module:tmkt~previousMonthEnd}		//previous month end: YYYY-MM-31/30/28/29 23:59:59.999
 *  * [.nextMonthStart( dt )	]{@link module:tmkt~nextMonthStart}	//next month start: YYYY-MM-01 00:00:00
 *  * [.nextMonthEnd( dt )		]{@link module:tmkt~nextMonthEnd}		//next month end: YYYY-MM-31/30/28/29 23:59:59.999
 *  * [.getMonthDayNumber( dt )]{@link module:tmkt~getMonthDayNumber}	//get month day number
 *
 * @example
var tmkt= require("tmkt");

tmkt.toString19(dt);

 */

var tmkt = {
	
	//const

	/**
	 * Milliseconds of one day, 24\*60\*60\*1000= 86400000
	 * @member constDayMilliseconds
	 * 
	 */
	constDayMilliseconds: 86400000,		// 24*60*60*1000


	/**
	 * Date to "yyyymmddHHMMSS"
	 * @function toString14
	 * 
	 * @param {Date} dt - A Date object
	 * 
	 * @returns string "yyyymmddHHMMSS"
	 */
	toString14: function (dt) {
		var s = dt.getFullYear() + " " + (dt.getMonth() + 1) + " " + dt.getDate() +
			" " + dt.getHours() + " " + dt.getMinutes() + " " + dt.getSeconds();
		return s.replace(/\b(\d)\b/g, "0$1").replace(/\s/g, "");
	},


	/**
	 * "yyyymmddHHMMSS" to Date
	 * 
	 * @function fromString14
	 * 
	 * @param {string} s - string "yyyymmddHHMMSS"
	 * 
	 * @returns A Date object
	 */
	fromString14: function (s) {
		return new Date(
			parseInt(s.substring(0, 4), 10),
			parseInt(s.substring(4, 6), 10) - 1,
			parseInt(s.substring(6, 8), 10),
			parseInt(s.substring(8, 10), 10),
			parseInt(s.substring(10, 12), 10),
			parseInt(s.substring(12, 14), 10)
		);
	},


	/**
	 * "yyyymmdd" to Date
	 * 
	 * @function fromYmd8
	 * 
	 * @param {string} s - string "yyyymmdd"
	 * 
	 * @returns A Date object
	 */
	fromYmd8: function (s) {
		return new Date(
			parseInt(s.substring(0, 4), 10),
			parseInt(s.substring(4, 6), 10) - 1,
			parseInt(s.substring(6, 8), 10),
			0,0,0
		);
	},


	/**
	 * Date to "YYYY-MM-DD hh:mm:ss"
	 * @function toString19
	 * 
	 * @param {Date} dt - A Date object
	 * 
	 * @returns string "YYYY-MM-DD hh:mm:ss"
	 */
	toString19: function (dt) {
		var s = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate() +
			" " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
		return s.replace(/\b(\d)\b/g, "0$1");
	},


	/**
	 * "YYYY-MM-DD hh:mm:ss" to Date
	 * 
	 * @function fromString19
	 * 
	 * @param {string} s - string "YYYY-MM-DD hh:mm:ss"
	 * 
	 * @returns A Date object
	 */
	fromString19: function (s) {
		var sa = s.split(/\D/);
		return new Date(
			sa[0],
			sa[1] - 1,
			sa[2],
			sa[3],
			sa[4],
			sa[5]
		);
	},
	

	/**
	 * "YYYY-MM-DD" to Date
	 * 
	 * @function fromYmd10
	 * 
	 * @param {string} s - string "YYYY-MM-DD"
	 * 
	 * @returns A Date object
	 */
	fromYmd10: function (s) {
		var sa = s.split(/\D/);
		return new Date(
			sa[0],
			sa[1] - 1,
			sa[2],
			0,0,0
		);
	},


	/**
	 * Date to "MM-DD hh:mm:ss"
	 * @function toMdhms14
	 * 
	 * @param {Date} dt - A Date object
	 * 
	 * @returns string "MM-DD hh:mm:ss"
	 */
	toMdhms14: function (dt) {
		var s = (dt.getMonth() + 1) + "-" + dt.getDate() +
			" " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
		return s.replace(/\b(\d)\b/g, "0$1");
	},


	/**
	 * Date to "hh:mm:ss"
	 * @function toHms8
	 * 
	 * @param {Date} dt - A Date object
	 * 
	 * @returns string "hh:mm:ss"
	 */
	toHms8: function (dt) {
		var s = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
		return s.replace(/\b(\d)\b/g, "0$1");
	},


	/**
	 * Date to "hh:mm"
	 * @function toHm5
	 * 
	 * @param {Date} dt - A Date object
	 * 
	 * @returns string "hh:mm"
	 */
	toHm5: function (dt) {
		var s = dt.getHours() + ":" + dt.getMinutes();
		return s.replace(/\b(\d)\b/g, "0$1");
	},


	/**
	 * Date to "YYYY-MM-DD"
	 * @function toYmd10
	 * 
	 * @param {Date} dt - A Date object
	 * 
	 * @returns string "YYYY-MM-DD"
	 */
	toYmd10: function (dt) {
		var s = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
		return s.replace(/\b(\d)\b/g, "0$1");
	},


	/**
	 * Date to "YYMMDD"
	 * @function toYmd6
	 * 
	 * @param {Date} dt - A Date object
	 * 
	 * @returns string "YYMMDD"
	 */
	toYmd6: function (dt) {
		var s = dt.getFullYear() + " " + (dt.getMonth() + 1) + " " + dt.getDate();
		return s.replace(/\b(\d)\b/g, "0$1").replace(/\s/g, "").slice(2);
	},


	/**
	 * utc to local
	 * @function utcToLocal
	 * 
	 * @param {Date} dt - A Date object
	 * 
	 * @returns A new Date object
	 */
	utcToLocal: function (dt) {
		return new Date(dt.getTime() - dt.getTimezoneOffset() * 60000);
	},

	/**
	 * local to utc
	 * @function localToUtc
	 * 
	 * @param {Date} dt - A Date object
	 * 
	 * @returns A new Date object
	 */
	localToUtc: function (dt) {
		return new Date(dt.getTime() + dt.getTimezoneOffset() * 60000);
	},

	/**
	 * get utc now
	 * @function utcNow
	 * 
	 * @returns A new Date object
	 */
	utcNow: function () { return this.localToUtc(new Date()); },


	/**
	 * 
	 */
	/**
	 * Utc string "YYYY-MM-DD hh:mm:ss" to Date, like [.fromString19( s )]{@link module:tmkt~fromString19}
	 * 
	 * @function fromUtcString19
	 * 
	 * @param {string} s - string "YYYY-MM-DD hh:mm:ss"
	 * 
	 * @returns A Date object
	 */
	fromUtcString19: function (s) {
		return this.utcToLocal(this.fromString19(s));
	},


	/**
	 * get month start Date: YYYY-MM-01 00:00:00
	 * @function monthStart
	 * 
	 * @param {Date} dt - A Date object
	 * 
	 * @returns A new Date object, YYYY-MM-01 00:00:00
	 */
	monthStart: function (dt) {
		return new Date(dt.getFullYear(), dt.getMonth(), 1, 0, 0, 0);
	},


	/**
	 * get month end Date: YYYY-MM-31/30/28/29 23:59:59.999
	 * @function monthEnd
	 * 
	 * @param {Date} dt - A Date object
	 * 
	 * @returns A new Date object, YYYY-MM-31/30/28/29 23:59:59.999
	 */
	monthEnd: function (dt) {
		dt= new Date( dt.getTime() + (35-dt.getDate())*this.constDayMilliseconds );		//next month
		dt= new Date(dt.getFullYear(), dt.getMonth(), 1, 0, 0, 0);
		return new Date( dt.getTime()-1);
	},


	/**
	 * get previous month start Date: YYYY-MM-01 00:00:00
	 * @function previousMonthStart
	 * 
	 * @param {Date} dt - A Date object
	 * 
	 * @returns A new Date object, YYYY-MM-01 00:00:00
	 */
	previousMonthStart: function (dt) {
		dt= new Date( dt.getTime()- (dt.getDate()+5)*this.constDayMilliseconds );
		return new Date(dt.getFullYear(),dt.getMonth(),1,0,0,0);
	},


	/**
	 * get previous month end Date: YYYY-MM-31/30/28/29 23:59:59.999
	 * @function previousMonthEnd
	 * 
	 * @param {Date} dt - A Date object
	 * 
	 * @returns A new Date object, YYYY-MM-31/30/28/29 23:59:59.999
	 */
	previousMonthEnd: function (dt) {
		dt= new Date(dt.getFullYear(), dt.getMonth(), 1, 0, 0, 0);
		return new Date( dt.getTime()-1);
	},


	/**
	 * get next month start Date: YYYY-MM-01 00:00:00
	 * @function nextMonthStart
	 * 
	 * @param {Date} dt - A Date object
	 * 
	 * @returns A new Date object, YYYY-MM-01 00:00:00
	 */
	nextMonthStart: function (dt) {
		dt= new Date( dt.getTime() + (35-dt.getDate())*this.constDayMilliseconds );		//next month
		return new Date(dt.getFullYear(), dt.getMonth(), 1, 0, 0, 0);
	},


	/**
	 * get next month end Date: YYYY-MM-31/30/28/29 23:59:59.999
	 * @function nextMonthEnd
	 * 
	 * @param {Date} dt - A Date object
	 * 
	 * @returns A new Date object, YYYY-MM-31/30/28/29 23:59:59.999
	 */
	nextMonthEnd: function (dt) {
		dt= new Date( dt.getTime() + (70-dt.getDate())*this.constDayMilliseconds );		//next 2 month
		dt= new Date(dt.getFullYear(), dt.getMonth(), 1, 0, 0, 0);
		return new Date( dt.getTime()-1);
	},

	/**
	 * get month day number
	 * @function getMonthDayNumber
	 * 
	 * @param {Date} dt - A Date object
	 * 
	 * @returns month day number of `dt`
	 */
	getMonthDayNumber: function (dt) {
		return (this.nextMonthStart(dt)-this.monthStart(dt))/this.constDayMilliseconds;
	},

};

module.exports = tmkt;

