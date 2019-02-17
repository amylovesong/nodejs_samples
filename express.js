var express = require('express')
var app = express()

// 静态文件
app.use(express.static('public'))

// 路由
app.get('/', function(request, response) {
	console.log('主页 GET 请求')
	response.send('Hello, GET!')
})

app.post('/', function(request, response) {
	console.log('主页 POST 请求')
	response.send('Hello, POST!')
})

app.get('/del_user', function(request, response) {
	console.log('/del_user 响应 DELETE 请求')
	response.send('删除页面')
})

app.get('/list_user', function(request, response) {
	console.log('/list_user GET 请求')
	response.send("用户列表页面")
})

// 正则匹配
app.get('/ab*cd', function(request, response) {
	console.log('/ab*cd GET 请求')
	response.send('正则匹配')
})

var server = app.listen(8081, 'localhost', function() {
	var host = server.address().address
	var port = server.address().port

	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
