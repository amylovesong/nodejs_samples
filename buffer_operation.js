// 合并
var buffer1 = Buffer.from('Node.js 教程');
var buffer2 = Buffer.from('www.google.com');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('Buffer 合并：')
console.log("buffer3 内容：" + buffer3.toString() + '\n');

// 比较
var buf1 = Buffer.from('ABC');
var buf2 = Buffer.from('ABCD');
var result = buf1.compare(buf2);

console.log('Buffer 比较：')
if (result < 0) {
	console.log(buf1 + " 在 " + buf2 + " 之前");
} else if (result == 0) {
	console.log(buf1 + " 与 " + buf2 + " 相同");
} else {
	console.log(buf1 + " 在 " + buf2 + " 之后");
}
console.log('\n');

// 拷贝
var targetBuf = Buffer.from('abcdefghijkl');
var sourceBuf = Buffer.from('SOURCE');
sourceBuf.copy(targetBuf, 2);
console.log('Buffer 拷贝：')
console.log(targetBuf.toString() + '\n');

// 裁剪：得到的新 Buffer 与旧 Buffer 指向同一块内存！
var bufferToSlice = Buffer.from('SOURCE');
var bufferSliced = bufferToSlice.slice(0, 2);
console.log('Buffer 裁剪：（新旧 Buffer 指向同一块内存）')
console.log("bufferSliced content: " + bufferSliced.toString());
bufferToSlice.write('REWRITE');
console.log("[Rewrited] bufferSliced content: " + bufferSliced.toString() + '\n');

// 长度
var bufLength = Buffer.from('www.google.com');
console.log('Buffer 长度：')
console.log('Buffer content: ' + bufLength + '\nBuffer length: ' + bufLength.length);


