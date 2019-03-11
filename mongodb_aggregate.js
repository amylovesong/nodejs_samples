var database_name = 'sxl'
var collection_orders = 'orders'
var collection_products = 'products'

var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

const create = false;
const aggregate = true;

// 0. 创建数据
if (create) {
	MongoClient.connect(url, function(error, db) {
		if (error) {
			console.error(error)
			return
		}

		// 准备数据
		var orders = {'product_id': 154, 'status': 1, '_id': 1}
		var products = [
			{ 'name': '笔记本电脑', '_id': 154},
			{ 'name': '耳机', '_id': 155},
			{ 'name': '台式电脑', '_id': 156}
		]

		// 写入集合
		var dbo = db.db(database_name)
		dbo.collection(collection_orders).insertOne(orders, function(error, result) {
			if (error) {
				console.error(error)
				return
			}

			console.log(collection_orders + ' 集合中插入' + result.insertedCount + '条数据')
			db.close()
		})
		dbo.collection(collection_products).insertMany(products, function(error, result) {
			if (error) {
				console.error(error)
				return
			}

			console.log(collection_products + ' 集合中插入' + result.insertedCount + '条数据')
			db.close()
		})
	})
}

// 1. 连接
if (aggregate) {
	MongoClient.connect(url, function(error, db) {
		if (error) {
			console.error(error)
			return
		}

		var dbo = db.db(database_name)
		dbo.collection(collection_orders).aggregate([
			{ $lookup:
				{
					from: collection_products,
					localField: 'product_id',
					foreignField: '_id',
					as: 'orderdetails'
				}
			}
		]).toArray(function(error, result) {
			if (error) {
				console.error(error)
				return
			}

			console.log(JSON.stringify(result))
			db.close()
		})
	})
}

