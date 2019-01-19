var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input_compress.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('input_decompress.txt'));

console.log('Decompress finished.');
