
var to_fake_utc = require("../to/fake-utc");

//get a fake utc now, whose local expression is actually a utc.
module.exports = function () { return to_fake_utc(new Date()); }
