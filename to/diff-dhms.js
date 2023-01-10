
//to date diff string "*d *h *m *s", or "[*d ][*h ][*m ]*s" for `shorten`
module.exports = function (startTime, endTime, shorten, charset) {
	var n = endTime - startTime;		//milliseconds

	var sign = (n < 0) ? "-" : "";
	if (sign) n = -n;

	//var milliseconds= n%1000;
	n = Math.round(n / 1000);	//seconds
	var seconds = n % 60;
	n = Math.round(n / 60);	//minutes
	var minutes = n % 60;
	n = (n - minutes) / 60;	//hours
	var hours = n % 24;
	n = (n - hours) / 24;	//days
	var days = n;

	//charset
	var s;
	if (charset) {
		if (charset.match(/^(gb|ch|zh|936|chinese)$/i)) {
			s = sign + days + '天' + hours + '时' + minutes + '分' + seconds + "秒";
		}
	}

	if (!s) s = sign + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';

	//shorten
	return shorten ? s.replace(/(\d+)(\D+)(?!$)/g, function (m, p1) { return (p1 === "0") ? "" : m; }) : s;
}
