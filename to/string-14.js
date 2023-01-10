
var to_string_19 = require("./string-19");

//Date to "yyyymmddHHMMSS"
module.exports = function (dt, toUtc) { return to_string_19(dt, toUtc).replace(/\D/g, ""); }
