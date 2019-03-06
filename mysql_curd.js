var mysql = require('mysql')

var connection = mysql.createConnection({
	host		: 'localhost',
	user		: 'root',
	password	: '4610@sxl',
	database	: 'test'
})

connection.connect()

// 查
// var sql = 'SELECT * FROM websites'
// connection.query(sql, function(error, result) {
// 	if (error) {
// 		console.error('[SELECT ERROR] - ', error.message)
// 		return;
// 	}

// 	console.log('--------------------------SELECT----------------------------');
//     console.log(result);
//     console.log('------------------------------------------------------------');
// })

// 增
// var addSql = 'INSERT INTO websites(id, name, url, alexa, country) VALUES(0, ?, ?, ?, ?)'
// var addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN']
// connection.query(addSql, addSqlParams, function(error, result) {
// 	if (error) {
// 		console.error('[INSERT ERROR] - ', error.message)
// 		return
// 	}

	// console.log('--------------------------INSERT----------------------------');
 //    //console.log('INSERT ID:',result.insertId);        
 //    console.log('INSERT RESULT:',result);        
 //    console.log('------------------------------------------------------------');  
// })

// 改
// var modSql = 'UPDATE websites SET name = ?, url = ? WHERE id = ?'
// var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com', 6]
// connection.query(modSql, modSqlParams, function(error, result) {
// 	if (error) {
// 		console.error('UPDATE ERROR - ', error.message)
// 		return
// 	}

// 	console.log('--------------------------UPDATE----------------------------');
//   	console.log('UPDATE affectedRows',result.affectedRows);
//   	console.log('------------------------------------------------------------');
// })

// 删
var delSql = 'DELETE FROM websites WHERE id=6'
connection.query(delSql, function(error, result) {
	if (error) {
		console.error('[DELETE ERROR] - ', error.message)
		return
	}

	console.log('--------------------------DELETE----------------------------');
    console.log('DELETE affectedRows',result.affectedRows);
    console.log('------------------------------------------------------------'); 
})

connection.end()
