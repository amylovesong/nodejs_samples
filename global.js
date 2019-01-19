console.log("__filename: ", __filename);

console.log("__dirname: ", __dirname);

function printHello() {
	console.log("Hello, world!");
}
// 延时任务，只做一次
var t = setTimeout(printHello, 2000);
// 停止前面创建的延时任务
clearTimeout(t);

// 定时重复任务，多次执行，直到 clearInterval() 或窗口被关闭
setInterval(printHello, 2000);

console.time("Info test");
console.info("Node.js");
console.timeEnd("Info test");

console.trace("global.js");
console.assert((1+1) == 3, "Assert test")
