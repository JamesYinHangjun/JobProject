// 实现max方法
function max(arguments) {
    const arr = Object.prototype.toString.call(arguments)  //变成数组
    let max = 0
    arr.forEach(n => {
        if(n > max) {
            max = n
        }
    })

    return max
}