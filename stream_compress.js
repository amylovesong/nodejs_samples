var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input_compress.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input_compress.txt.gz'));

console.log('Compress finished.');