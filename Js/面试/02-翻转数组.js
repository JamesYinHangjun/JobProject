 // 翻转数组
 function reverse(arr) {
    // if (arr instanceof Array) {
    if (Array.isArray(arr)) {
        var newArr = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            newArr[newArr.length] = arr[i];

        }
        return newArr;
    } else {
        return 'error 这个参数要求必须是数组格式 [1,2,3]'
    }
}
console.log(reverse([1, 2, 3]));
console.log(reverse(1, 2, 3));