var fs = require('fs');
var buf = new Buffer.alloc(1024)
var fileName = 'input_fs.txt'
var len = 10

console.log('准备打开文件...')
fs.open(fileName, 'r+', function(error, fd) {
	if (error) {
		return console.error(error)
	}
	console.log('文件打开成功！')
	console.log('截取' + len + '字节内的文件内容，超出部分将被去除...')

	fs.ftruncate(fd, len, function(error) {
		if (error) {
			return console.error(error)
		}

		console.log('文件截取成功！')
		console.log('读取相同的文件...')
		fs.read(fd, buf, 0, buf.length, 0, function(error, bytes) {
			if (error) {
				return console.error(error)
			}

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
})