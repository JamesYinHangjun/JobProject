// var arr = [1,2,[3,4],5]
// Array.prototype.concat.apply([],arr) 这个只能拍平一层的
// arr= [1,2,[3,4,[5,6]]] 这个两层的就拍不平了，所以要使用递归

function flat(arr) {
    // 验证arr 中，是否还有深层数组
    const isDeep = arr.some(item => item instanceof Array)

    if(!isDeep) {
        return arr  // 没有更深层次的数组，就直接返回数组
    }

    const res = Array.prototype.concat.apply([], arr)
    return flat(res)   // 递归
}