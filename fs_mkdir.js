var fs = require('fs')
var dirName = './tmp/test/a'

console.log('创建目录 %s...', dirName)
fs.mkdir(dirName, {recursive: true}, function(error) {
	if (error) {
		return console.error(error)
	}
	console.log('目录创建成功！')
})