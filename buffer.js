// size = 10, default fill = 0
const buf1 = Buffer.alloc(10);
console.log('buf1: ', buf1);

// size = 10, fill = 1
const buf2 = Buffer.alloc(10, 1);
console.log('buf2: ', buf2);

// 可能包含旧数据，需要使用 fill() 或 write() 重写
const buf3 = Buffer.allocUnsafe(10);
console.log('buf3: ', buf3);

// 用 array 初始化 Buffer 实例
const buf4 =  Buffer.from([1, 2, 3]);
console.log('buf4: ', buf4);

// 用 string 的值初始化 Buffer 实例，编码默认为 UTF-8
const buf5 = Buffer.from('tést');
console.log('buf5: ', buf5);

// 用 latin1 编码的 string 初始化 Buffer 实例
const buf6 = Buffer.from('tést', 'latin1');
console.log('buf6: ', buf6);
