var database_name = "test"

var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/" + database_name

MongoClient.connect(url, function(error, db) {
	if (error) {
		console.error(error)
		return
	}

	console.log('数据库已创建！')

	var dbase = db.db(database_name)
	// 创建集合（表）
	dbase.createCollection('site', function(error, res) {
		if (error) {
			console.error(error)
			return
		}
		console.log('创建集合！')
		db.close()
	})
})