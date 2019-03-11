var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'

var database_name = 'test'
var collection_name = 'site'

MongoClient.connect(url, function(error, db) {
	if (error) {
		console.error(error)
		return
	}

	var dbo = db.db(database_name)
	dbo.collection(collection_name).drop(function(error, delOk) {
		if (error) {
			console.error(error)
			return
		}
		if (delOk) {
			console.log(collection_name + ' 集合已删除')
		}
		db.close()
	})
})