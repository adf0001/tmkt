
var to_diff_dhms = require("./diff-dhms");

//Date diff string "*d *h *m", or "[*d] [*h] *m" for `shorten`
module.exports = function (startTime, endTime, shorten, charset) {
	var s = to_diff_dhms(startTime, endTime, false, charset).replace(/\s*\d+(\D+)?$/, "");	//remove the last number

	//shorten
	return shorten ? s.replace(/(\d+)(\D+)(?!$)/g, function (m, p1) { return (p1 === "0") ? "" : m; }) : s;
}
