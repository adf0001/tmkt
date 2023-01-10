
//get next month end Date: YYYY-MM-31/30/28/29 23:59:59.999
module.exports = function (dt) { return new Date(dt.getFullYear(), dt.getMonth() + 2, 1, 0, 0, 0, -1); }
