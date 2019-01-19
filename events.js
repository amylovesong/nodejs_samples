var events = require('events');
var eventEmitter = new events.EventEmitter();

// 定义事件处理
var connectHandler = function connected() {
	console.log('连接成功。');

	// 触发新事件
	eventEmitter.emit('data_received');
}

// 绑定事件及对应事件处理函数
eventEmitter.on('connection', connectHandler);
// 绑定匿名事件处理函数
eventEmitter.on('data_received', function() {
	console.log('数据接收成功。');
});

// 触发事件
eventEmitter.emit('connection');

console.log('程序执行完毕。');