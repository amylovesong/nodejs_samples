var http = require("http");
var fs = require('fs');
var url = require('url');

var port = 8080;

http.createServer(function(request, response){
	var pathname = url.parse(request.url).pathname;

	console.log("Request for " + pathname + " received.");

	fs.readFile(pathname.substr(1), function(err, data) {
		// console.log("err: " + err)
		// console.log("data: " + data)
		if (err) {
			console.log(err);
			response.writeHead(400, {'Content-Type': 'text/html'});
		} else {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(data.toString());
		}
		response.end();
	});

	// response.writeHead(200,{'Content-Type': 'text/plain'});
	// response.end('Hello, world!\n');
}).listen(port);

console.log('Server running at http://127.0.0.1:%d/', port);

