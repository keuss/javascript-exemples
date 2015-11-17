function addTag(tag) {
	return function(text) {
		return '<' + tag + '>' + text + '</' + tag +'>';
	};
}

var addSpan = addTag('span')
addSpan('yo!')

// With object

var obj = {
		name: "html helper",
		addTag: function(tag) {
			return function(text) {
				return '<' + tag + '>' + text + '</' + tag +'>'
			}
	}
};

var addSpan = obj.addTag('span');
addSpan('Hello !');
