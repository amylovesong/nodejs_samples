var fs = require('fs')
var fileName = 'input_fs_unlink.txt'

fs.writeFile(fileName, 'File to unlink', function(error) {
	if (error) {
		return console.error(error)
	}
	console.log('写入文件成功！')

	console.log('准备删除文件...')
	setTimeout(function() {
		fs.unlink(fileName, function(error) {
			if (error) {
				return console.error(error)
			}
			console.log('文件删除成功！')
		})
	}, 2000)
})