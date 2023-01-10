
// tmkt @ npm, time kit.

var DAY_MILLISECONDS = require("./day/milliseconds");

var from_fake_utc = require("./from/fake-utc");
var to_fake_utc = require("./to/fake-utc");

var utc_fake_now = require("./utc/fake-now");

var to_string_19 = require("./to/string-19");
var to_string_14 = require("./to/string-14");
var to_mdhms_14 = require("./to/mdhms-14");
var to_string_23 = require("./to/string-23");

var from_string_14 = require("./from/string-14");
var from_string_19 = require("./from/string-19");
var from_string_23 = require("./from/string-23");
var from_ymd_8 = require("./from/ymd-8");
var from_ymd_10 = require("./from/ymd-10");

var to_hms_8 = require("./to/hms-8");
var to_hm_5 = require("./to/hm-5");
var to_ymd_10 = require("./to/ymd-10");
var to_ymd_8 = require("./to/ymd-8");
var to_ymd_6 = require("./to/ymd-6");

var month_start = require("./month/start");
var month_end = require("./month/end");
var month_previous_start = require("./month/previous-start");
var month_previous_end = require("./month/previous-end");
var month_next_start = require("./month/next-start");
var month_next_end = require("./month/next-end");

var month_day_number = require("./month/day-number");

var to_diff_dhms = require("./to/diff-dhms");
var to_diff_dhm = require("./to/diff-dhm");

// module exports
module.exports = {
	DAY_MILLISECONDS,

	from_fake_utc,
	fromFakeUtc: from_fake_utc,
	utcToLocal: from_fake_utc,

	to_fake_utc,
	toFakeUtc: to_fake_utc,
	localToUtc: to_fake_utc,

	utc_fake_now,
	utcFakeNow: utc_fake_now,
	utcNow: utc_fake_now,

	to_string_19,
	toString19: to_string_19,

	to_string_14,
	toString14: to_string_14,

	to_mdhms_14,
	toMdhms14: to_mdhms_14,

	to_string_23,
	toString23: to_string_23,

	from_string_14,
	fromString14: from_string_14,

	from_ymd_8,
	fromYmd8: from_ymd_8,

	from_string_19,
	fromString19: from_string_19,

	from_ymd_10,
	fromYmd10: from_ymd_10,

	from_string_23,
	fromString23: from_string_23,

	to_hms_8,
	toHms8: to_hms_8,

	to_hm_5,
	toHm5: to_hm_5,

	to_ymd_10,
	toYmd10: to_ymd_10,

	to_ymd_8,
	toYmd8: to_ymd_8,

	to_ymd_6,
	toYmd6: to_ymd_6,

	month_start,
	monthStart: month_start,

	month_end,
	monthEnd: month_end,

	month_previous_start,
	monthPreviousStart: month_previous_start,
	previousMonthStart: month_previous_start,

	month_previous_end,
	monthPreviousEnd: month_previous_end,
	previousMonthEnd: month_previous_end,

	month_next_start,
	monthNextStart: month_next_start,
	nextMonthStart: month_next_start,

	month_next_end,
	monthNextEnd: month_next_end,
	nextMonthEnd: month_next_end,

	month_day_number,
	monthDayNumber: month_day_number,

	to_diff_dhms,
	toDiffDhms: to_diff_dhms,
	diffDhms: to_diff_dhms,

	to_diff_dhm,
	toDiffDhm: to_diff_dhm,
	diffDhm: to_diff_dhm,

};

