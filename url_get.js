var http = require('http')
var url = require('url')
var util = require('util')

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plainl; charset=utf-8'})
	// response.end(util.inspect(url.parse(request.url, true)))

	var params = url.parse(request.url, true).query
	response.write('query name: ' + params.name)
	response.write('\n')
	response.write('query url: ' + params.url)
	response.end()

}).listen(3000)