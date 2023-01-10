
var to_ymd_10 = require("./ymd-10");

//Date to "YYYYMMDD"
module.exports = function (dt, toUtc) { return to_ymd_10(dt, toUtc).replace(/\D/g, ""); }
