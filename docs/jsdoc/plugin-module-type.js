
exports.defineTags = function (dictionary) {
	// define tags here
	dictionary.defineTag("module-type", {
		mustHaveValue: true,
		onTagged: function (doclet, tag) {
			doclet.moduleType = tag.value;
		}
	});
};

exports.handlers = {
	newDoclet: function (e) {
		var moduleType = e.doclet.moduleType;
		if (moduleType) {
			e.doclet.description = '<h5>module-type: ' + moduleType + "</h5>" + e.doclet.description;
		}
	}
}
