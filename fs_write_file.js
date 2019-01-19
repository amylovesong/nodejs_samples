var fs = require('fs');

var fileName = 'input_fs.txt'

console.log('准备写入文件...');
fs.writeFile(fileName, '我是通过 fs.writeFile 写入文件的内容', function(error) {
	if (error) {
		return console.error(error);
	}

	console.log('数据写入成功！')
	console.log('----------分割线---------')
	console.log('读取写入的数据...')
	fs.readFile(fileName, function(error, data) {
		if (error) {
			return console.error(error)
		}
		console.log('异步读取文件数据：' + data.toString())
	})
})