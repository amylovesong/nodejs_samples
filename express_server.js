var express = require('express')
var app = express()

app.use(express.static('public'))

// POST
var bodyParser = require('body-parser')
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodeParser = bodyParser.urlencoded({ extended: false })

// 文件上传
var fs = require('fs')
var multer = require('multer')

app.use(urlencodeParser)
app.use(multer({ dest: '/tmp/'}).array('image'))

// Cookie 管理
var cookieParser = require('cookie-parser')
var util = require('util')

app.use(cookieParser())

app.get('/index.html', function(request, response) {
	response.sendFile(__dirname + "/" + "express_index.html")
})

app.get('/process_get', function(request, response) {
	// 输出 JSON 格式
	var responseJson = {
		"first_name": request.query.first_name,
		"last_name": request.query.last_name
	}
	console.log(responseJson)
	response.end(JSON.stringify(responseJson))
})

app.post('/process_post', urlencodeParser, function(request, response) {
	// 输出 JSON 格式
	var responseJson = {
		"first_name": request.body.first_name,
		"last_name": request.body.last_name
	}
	console.log(responseJson)
	response.end(JSON.stringify(responseJson))
})

app.post('/file_upload', function(request, response) {
	console.log(request.files[0])// 上传的文件信息

	var des_file = __dirname + "/" + request.files[0].originalname
	fs.readFile(request.files[0].path, function(error, data) {
		if (error) {
			console.error(error)
			return
		} else {
			responseJson = {
				message: "File uploaded successfully",
				filename: request.files[0].originalname
			}
		}
		console.log(responseJson)
		response.end(JSON.stringify(responseJson))
	})
})

app.get('/', function(request, response) {
	responseInfo = "Cookies:\n" + util.inspect(request.cookies)
	console.log(responseInfo)
	response.end(responseInfo)
})

var server = app.listen(8081, 'localhost', function() {
	var host = server.address().address
	var port = server.address().port

	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

