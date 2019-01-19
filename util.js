var util = require('util');

// isArray(object)
var isArray = util.isArray([])
console.log('util.isArray([]) =', isArray);

isArray = util.isArray(new Array)
console.log('util.isArray(new Array) =', isArray);

isArray = util.isArray({})
console.log('util.isArray({}) =', isArray);

// isRegExp(object)
var isRegExp = util.isRegExp(/some regexp/)
console.log('\nutil.isRegExp(/some regexp/) =', isRegExp);

var isRegExp = util.isRegExp(new RegExp('another regexp'))
console.log('util.isRegExp(new RegExp(\'another regexp\')) =', isRegExp)

var isRegExp = util.isRegExp({})
console.log('util.isRegExp({}) =', isRegExp);

// isDate(object)
var isDate = util.isDate(new Date())
console.log('\nutil.isDate(new Date()) =', isDate);

var isDate = util.isDate(Date())
console.log('util.isDate(Date()) =', isDate);

var isDate = util.isDate({})
console.log('util.isDate({}) =', isDate);

//isError(object)
var isError = util.isError(new Error())
console.log('\nutil.isError(new Error()) =', isError);

var isError = util.isError(new TypeError())
console.log('util.isError(new TypeError()) =', isError);

var isError = util.isError({ name: 'Error', message: 'an error occurred' })
console.log('util.isError({ name: \'Error\', message: \'an error occurred\' }) =', isError)


