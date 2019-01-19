var util = require('util');
function Person() {
	this.name = 'S';
	this.toString = function() {
		return this.name;
	};
}

var obj = new Person();
// util.inspect(object,[showHidden],[depth],[colors])
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));
console.log(util.inspect(obj, true, null, true));