var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
	console.log('listener1 run');
}

var listener2 = function listener2() {
	console.log('listener2 run');
}

var eventName = 'connection'

eventEmitter.addListener(eventName, listener1);

eventEmitter.on(eventName, listener2);

var eventListeners = eventEmitter.listenerCount(eventName);
// 数字为第一参数的 log() 会把后面的字符串处理为带引号的输出：2 ' 个监听器监听' 'connection'
console.log(eventListeners + ' 个监听器监听 ' + eventName);

eventEmitter.emit(eventName);

eventEmitter.removeListener(eventName, listener1);
console.log('listener1 removed');

eventEmitter.emit(eventName);

eventListeners = eventEmitter.listenerCount(eventName);
console.log(eventListeners + ' 个监听器监听 ' + eventName);

console.log('程序执行完毕');