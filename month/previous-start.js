
//get previous month start Date: YYYY-MM-01 00:00:00
module.exports = function (dt) { return new Date(dt.getFullYear(), dt.getMonth() - 1, 1, 0, 0, 0); }
