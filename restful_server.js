var express = require('express')
var app = express()
var fs = require('fs')

var jsonFileName = 'restful_users.json'

// 获取用户列表
app.get('/listUsers', function(request, response) {
	fs.readFile(__dirname + "/" + jsonFileName, 'utf8', function(error, data) {
		console.log('listUsers: ' + data)
		response.end(data)
	})
})

// 添加新用户
var user = {
	"user4" : {
		"name" : "mohit",
		"password" : "password4",
		"profession" : "teacher",
		"id" : 4
	}
}

app.get('/addUser', function(request, response) {
	// 读取已存在的数据
	fs.readFile(__dirname + "/" + jsonFileName, 'utf8', function(error, data) {
		data = JSON.parse(data)
		data['user4'] = user['user4']
		console.log('addUser: ' + JSON.stringify(data))
		response.end(JSON.stringify(data))
	})
})

// 显示用户详情
app.get('/showUser/:id', function(request, response) {
	fs.readFile(__dirname + '/' + jsonFileName, 'utf8', function(error, data) {
		data = JSON.parse(data)
		var user = data["user" + request.params.id]
		console.log('showUser: ' + JSON.stringify(user))
		response.end(JSON.stringify(user))
	})
})

// 删除用户
var deleteId = 2
app.get('/deleteUser/:id', function(request, response) {
	fs.readFile(__dirname + '/' + jsonFileName, 'utf8', function(error, data) {
		data = JSON.parse(data)
		delete data['user' + request.params.id]
		console.log('deleteUser' + JSON.stringify(data))
		response.end(JSON.stringify(data))
	})
})

var server = app.listen(8081, 'localhost', function() {
	var host = server.address().address
	var port = server.address().port

	console.log('应用实例，访问地址为 http://%s:%s', host, port)
})