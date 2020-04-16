let obj = {a:123,b:456,c:{a:123,b:456}};
let arr = [1,2,3,{a:123}];

let copy = {}

copy.a = obj.a
copy.b = obj.b
copy.c = obj.c
console.log(copy)      // { a: 123, b: 456, c: { a: 123, b: 456 } }

// 改变值
copy.c.a = 222         // 原对象改变
console.log(obj)      // { a: 123, b: 456, c: { a: 123, b: 456 } }

copy.a = 222         // 原对象不改变
console.log(obj)    // { a: 123, b: 456, c: { a: 123, b: 456 } }

/**
 * 浅拷贝: 指的是 拷贝目标对象(obj)中的每一项(遍历),但是如果这一项是对象的话，
 *         那么只把它的索引拷贝出来，这时当修改其值得话，对原数据是有影响的
 */
