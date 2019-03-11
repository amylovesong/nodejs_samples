var database_name = "sxl"
var collection_name = 'site'

var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, { useNewUrlParser: true }, function(error, db) {
	if (error) {
		console.error(error)
		return
	}

	var dbo = db.db(database_name)
	// 插入一条数据
	/*var myobj = { name: "菜鸟教程", url: "www.runoob"}
	dbo.collection(collection_name).insertOne(myobj, function(error, res) {
		if (error) {
			console.error(error)
			return
		}

		console.log('文档插入成功')
		db.close()
	})*/

	// 插入多条数据
	/*var myobj = [
		{ name: "菜鸟教程", url: "https://c.runoob.com", type: 'cn'},
		{ name: 'Google', url: 'https://www.google.com', type: 'en'},
		{ name: 'Facebook', url: 'https://www.facebook.com', type: 'en'}
	]
	dbo.collection(collection_name).insertMany(myobj, function(error, res) {
		if (error) {
			console.error(error)
			return
		}

		console.log('插入的文档数量为：' + res.insertedCount)
		db.close()
	})*/

	// 查询数据(不指定条件)
	/*dbo.collection(collection_name).find({}).toArray(function(error, result) {
		if (error) {
			console.error(error)
			return
		}

		// 返回所有数据
		console.log(result)
		db.close()
	})*/

	// (指定条件)查询数据
	/*var whereStr = {"name": '菜鸟教程'}
	dbo.collection(collection_name).find(whereStr).toArray(function(error, result) {
		if (error) {
			console.error(error)
			return
		}

		console.log(result)
		db.close()
	})*/

	// 更新一条数据
	/*var whereStr = {"name": '菜鸟教程'}
	var updateStr = {$set: {"url": "https://www.runoob.com"}}
	dbo.collection(collection_name).updateOne(whereStr, updateStr, function(error, result) {
		if (error) {
			console.error(error)
			return
		}
		console.log("文档更新成功")
		db.close()
	})*/

	// 更新多条数据
	/*var whereStr = {'type': 'en'}
	var updateStr = {$set: {'url': "https://www.runoob.com"}}
	dbo.collection(collection_name).updateMany(whereStr, updateStr, function(error, result) {
		if (error) {
			console.error(error)
			return
		}

		console.log(result.result.nModified + " 条文档被更新")
		db.close()
	})*/

	// 删除一条数据
	/*var whereStr = {'name' : "菜鸟教程"}
	dbo.collection(collection_name).deleteOne(whereStr, function(error, obj) {
		if (error) {
			console.error(error)
			return
		}

		console.log('文档删除成功')
		db.close()
	})*/

	// 删除多条数据
	/*var whereStr = { type: 'en'}
	dbo.collection(collection_name).deleteMany(whereStr, function(error, obj) {
		if (error) {
			console.error(error)
			return
		}

		console.log(obj.result.n + " 条文档被删除")
		db.close()
	})*/

	// 排序
	/*var mysort = { name: 1}
	dbo.collection(collection_name).find().sort(mysort).toArray(function(error, result) {
		if (error) {
			console.error(error)
			return
		}

		console.log(result)
		db.close()
	})*/

	// 查询分页(指定返回条数)
	/*dbo.collection(collection_name).find().limit(2).toArray(function(error, result) {
		if (error) {
			console.error(error)
			return
		}

		console.log(result)
		db.close()
	})*/

	// 跳过指定条数的数据
	dbo.collection(collection_name).find().skip(2).limit(2).toArray(function(error, result) {
		if (error) {
			console.error(error)
			return
		}

		console.log(result)
		db.close()
	})
})
