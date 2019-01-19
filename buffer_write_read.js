// Write
// buf.write(string[, offset[, length]][, encoding])
buf = Buffer.alloc(256);
len = buf.write("www.google.com");
console.log("写入字节数：" + len);

// Read
// buf.toString([encoding[, start[, end]]])
buf = Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
	buf[i] = i + 97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8', 0, 5));
console.log(buf.toString(undefined, 0, 5));
