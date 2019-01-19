var fs = require('fs');

var readerStream = fs.createReadStream('input_pipe.txt');
var writerStream = fs.createWriteStream('output_pipe.txt');
readerStream.pipe(writerStream);

console.log('程序执行完毕');