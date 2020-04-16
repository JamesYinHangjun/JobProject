const arr = [1,2,3,4,31,2,4];

function _uniq(arr) {
    var _result = [];
    for(var i = 0; i < arr.length; i++) {
        if(!_result.includes(arr[i])) {
            _result.push(arr[i])
        }
    }
    return _result
}
console.log(_uniq(arr))