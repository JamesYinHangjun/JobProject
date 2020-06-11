function _new(func) {
    let obj = {}
    obj.__proto__ = func.prototype

    // 前两步相当于 let obj = Object.create(fn.prototype)

    // 使用apply调用构造函数，属性和方法添加到this 引用的对象中
    // 将构造函数的this指向这个对象
    let result = func.apply(obj)

    if(result && (typeof result == "object" || typeof result == "function")) {
        // 如果构造函数执行的结果返回的是一个对象，返回该对象
        return result
    }
    return obj
}