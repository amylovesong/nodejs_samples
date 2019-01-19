var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function() {
	console.log('some_event 事件触发');
});
console.log('listenerCount: ', event.listenerCount('some_event'))
setTimeout(function() {
	var result = event.emit('some_event')
	console.log('Emit result: ', result);
}, 1000);