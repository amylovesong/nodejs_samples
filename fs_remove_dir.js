var fs = require('fs')
var dirName = './tmp/test/'
var dirToDelete = dirName + 'a'

function readDir(dirName) {
	console.log('读取 %s 目录...', dirName)
	fs.readdir(dirName, function(error, files) {
		if (error) {
			return console.error(error)
		}
		files.forEach(function(file) {
			console.log(file)
		})
	})
}

console.log('准备删除目录 %s...', dirToDelete)
fs.rmdir(dirToDelete, function(error) {
	if (error) {
		return console.error(error)
	}
	console.log('目录 %s 已被删除！', dirToDelete)
	readDir(dirName)
})
