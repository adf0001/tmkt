
var to_string_19 = require("./string-19");

//Date to "MM-DD hh:mm:ss"
module.exports = function (dt, toUtc) { return to_string_19(dt, toUtc).slice(-14); }
