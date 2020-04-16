let obj = {a:123,b:456,c:{a:123,b:456}};
let arr = [1,2,3,{a:123}];

function copy(value) {
    // 判断value是否是对象,是的话，再判断是对象还是数组，不是就返回
    if( typeof value === 'object') {
        // 是对象
        // 再判断是对象还是数组
        let isArray = {}.toString.call(value) === '[object Array]';
        let rs = isArray?[]:{};
        for(let i in value) {
            rs[i] = value[i];
        }
        return value;
    } else {
        // 不是对象
        return value;
    }
}

let clone = copy(arr)
console.log(clone)