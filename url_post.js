var http = require('http')
var querystring = require('querystring')

var postHTML =
	'<html><head><meta charset="utf-8"><title>Node.js Demo</title></head>' +
	'<body>' + 
	'<form method="post">' +
	'name: <input name="name"><br>' +
	'url: <input name="url"><br>' +
	'<input type="Submit">' +
	'</form>' +
	'</body></html>'

http.createServer(function(request, response) {
	var body = ''

	request.on('data', function(chunk) {
		console.log('onDataEvent: ' + chunk)
		body += chunk
	})

	request.on('end', function() {
		console.log('onEndEvent')
		// 解析数据
		body = querystring.parse(body)
		response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'})

		if (body.name && body.url) {
			response.write('name: ' + body.name)
			response.write('<br>')
			response.write('url: ' + body.url)
		} else {
			response.write(postHTML)
		}
		response.end()
	})
}).listen(3000)
