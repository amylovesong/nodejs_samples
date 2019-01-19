var fs = require('fs');
var buf = new Buffer.alloc(1024);
var fileName = 'input_fs.txt'

console.log('准备打开已存在的文件...')
fs.open(fileName, 'r+', function(error, fd) {
	if (error) {
		return console.error(error)
	}
	console.log('文件打开成功！')
	console.log('准备读取文件...')
	// fs.read(fd, buffer, offset, length, position, callback)
	// fd 为文件描述符
	fs.read(fd, buf, 0, buf.length, 0, function(error, bytes) {
		if (error) {
			return console.error(error)
		}
		console.log(bytes + ' 字节被读取。')

		// 输出读取的字节
		if (bytes > 0) {
			console.log('读取的内容：' + buf.slice(0, bytes).toString())
		}

		// 关闭文件
		fs.close(fd, function(error) {
			if (error) {
				return console.error(error)
			}
			console.log('文件关闭成功！')
		})
	})
})
