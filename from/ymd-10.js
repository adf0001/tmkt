
//"YYYY-MM-DD" to Date
module.exports = function (s) {
	var sa = s.split(/\D/);
	return new Date(parseInt(sa[0], 10), sa[1] - 1, sa[2], 0, 0, 0);
}
