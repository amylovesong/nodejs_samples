var parseString = require('xml2js').parseString
var xml = 
`<?xml version="1.0" encoding="UTF-8" ?>
<business>
    <company>Code Blog</company>
    <owner>Nic Raboy</owner>
    <employee>
        <firstname>Nic</firstname>
        <lastname>Raboy</lastname>
    </employee>
    <employee>
        <firstname>Maria</firstname>
        <lastname>Campos</lastname>
    </employee>
</business>`

parseString(xml, { explicitArray : false, ignoreAttrs : true}, function(error, result) {
	console.log(JSON.stringify(result, null, 4))
})
