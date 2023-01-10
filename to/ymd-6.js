
var to_ymd_8 = require("./ymd-8");

//Date to "YYMMDD"
module.exports = function (dt, toUtc) { return to_ymd_8(dt, toUtc).slice(-6); }
