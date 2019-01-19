var fs = require('fs');

console.log('准备打开文件！');
fs.stat('input.txt', function(error, stats) {
	if (error) {
		return console.error(error);
	}
	console.log(stats);
	console.log('读取文件信息成功！');

	console.log('是否为文件(isFile)?' + stats.isFile());
	console.log('是否为目录(isDirectory)?' + stats.isDirectory());
});