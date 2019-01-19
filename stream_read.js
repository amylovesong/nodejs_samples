var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
	console.log('onDataEvent...');
	data += chunk;
});

readerStream.on('end', function() {
	console.log('onEndEvent...');
	console.log('data: ', data);
});

readerStream.on('error', function(error) {
	console.log('onErrorEvent...');
	console.log(error.stack);
});

console.log('程序执行完毕');
