var fs = require('fs')
var dirName = './'

console.log('查看 %s 目录...', dirName)
fs.readdir(dirName, function(error, files) {
	if (error) {
		return console.error(error)
	}
	files.forEach(function(file) {
		console.log(file)
	})
})
