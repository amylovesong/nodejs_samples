process.stdout.write("Hello, world!" + "\n");
process.argv.forEach(function(val, index, array) {
	console.log(index + ': ' + val);
});

// 执行路径
console.log('execPath: ' + process.execPath);
// 平台信息
console.log('platform: ' + process.platform);

// 当前目录
console.log('cwd: ' + process.cwd());

// 当前版本
console.log('version: ' + process.version);

console.log('memoryUsage: \n', process.memoryUsage());

// Node 运行的秒数
console.log('uptime: ' + process.uptime());

process.on('exit', function(code) {
	setTimeout(function() {
		console.log("该代码不会执行");
	}, 0)

	console.log("退出码为：", code);
});

console.log("程序执行结束");