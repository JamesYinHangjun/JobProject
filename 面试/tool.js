// 验证码
// 纯数字验证码
 function numCode(n) {
    var arr = []
    for(var i = 0; i < n; i++) {
        var num = parseInt(Math.random() * 10)
        arr.push(num)
    }
    return arr.join("")
}

数字和字母结合的验证码
function numCode(n) {
    var arr = []
    for(var i = 0; i < n; i++) {
        var num = parseInt(Math.random() * 123)
        if( num >= 0 && num <= 9) {   //是数字，直接添加到数组中
            arr.push(num)
        } else if( num >= 97 & num <= 122 || num >65 && num <=90) {
            arr.push(String.fromCharCode(num))   //根据Asicc值找出对应的字母
        } else {
            i--     // 10 - 64
        }
    }
    return arr.join("")
}