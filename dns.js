var dns = require('dns')

dns.lookup('www.github.com', function onLookup(error, address, family) {
	console.log('ip 地址: ', address)
	dns.reverse(address, function(error, hostnames) {
		if (error) {
			return console.log(error.stack)
		}
		console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames))
	})
})