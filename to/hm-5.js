
var to_hms_8 = require("./hms-8");

//Date to "hh:mm"
module.exports = function (dt, toUtc) { return to_hms_8(dt, toUtc).slice(0, 5); }
