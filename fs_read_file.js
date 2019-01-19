var fs = require("fs");

// Sync mode
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());

// Async mode
fs.readFile('input.txt', function(err, data){
	if (err) return console.error(err);
	console.log(data.toString());
});
console.log("程序执行结束！");
