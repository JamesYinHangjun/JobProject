// instanceof 主要是用于判断某个构造函数的原型是否在某个对象的原型链上

function myInstanceof(left,right) {
    // Object.getPrototypeOf(left) 获得left这个实例对象的构造函数的prototype
    let proto = Object.getPrototypeOf(left)

    while(true) {
        if( proto == null ) return false;
        if( proto === right.prototype ) return true;
        proto = Object.getPrototypeOf(proto)
    }
}