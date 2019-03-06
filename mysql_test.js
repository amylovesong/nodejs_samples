var mysql = require('mysql')
var connection = mysql.createConnection({
	host		: 'localhost',
	user		: 'root',
	password	: '4610@sxl',
	database	: 'test'
})

connection.connect(function(error) {
	// console.log('Connect error: ', error)
})

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
	if (error) throw error
	// console.log('The results are: ', results)
	console.log('The solution is: ', results[0].solution)
})