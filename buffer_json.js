const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
// JSON.stringify() 会隐式调用 buf.toJSON()
const json = JSON.stringify(buf);
console.log('json:' + json);

const copy = JSON.parse(json, (key, value) => {
	console.log('key: ', key, 'value: ', value);
	return value && value.type === 'Buffer' ?
	Buffer.from(value.data) :
	value;
});
console.log(copy);