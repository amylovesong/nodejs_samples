var fs = require('fs');
var data = '测试数据：Node.js';

var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'UTF8');
writerStream.end();

writerStream.on('finish', function() {
	console.log('Finish writing');
});

writerStream.on('error', function(error) {
	console.log(error.stack);
});
console.log('程序执行完毕');
