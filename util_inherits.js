var util = require('util');
function Base() {
	this.name = 'base';
	this.base = 1990;
	this.sayHello = function() {
		console.log('Hello, ' + this.name);
	}
}

Base.prototype.showName = function() {
	console.log(this.name);
}

Base.prototype.gender = 'Male';

function Sub() {
	this.name = 'sub';
	this.showGender = function() {
		console.log('Gender: ' + this.gender);
	}	
}

util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
// 只继承 prototype 中定义的属性和函数
// objSub.sayHello();
objSub.showGender();
console.log(objSub);
