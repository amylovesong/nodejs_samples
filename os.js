var os = require('os')

console.log('endianness: ' + os.endianness())
console.log('type: ' + os.type())
console.log('platform: ' + os.platform())
console.log('total memory: ' + os.totalmem() + ' bytes.')
console.log('free memory: ' + os.freemem() + ' bytes.')
