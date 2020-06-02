//1. 验证码
// 纯数字验证码
 function numCode(n) {
    var arr = []
    for(var i = 0; i < n; i++) {
        var num = parseInt(Math.random() * 10)
        arr.push(num)
    }
    return arr.join("")
}

// 数字和字母结合的验证码
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


//2. 已知一个字符串对象中，英文字母由各种非字母字符分割，统计单词的个数
// 如 "Yes, she*is%my#love"   返回 5
function countOfWord(str) {
    var count = 0
    for(var i = 0; i < str.length-1; i++) {
        if(isABC(str[i]) && !isABC(str[i+1])) {
            count++
        }
    }
    return count
}
// 判断一个字符是否是字母
function isABC(charStr) {
    if(charStr >= 'a' && charStr <= 'z' || charStr >= 'A' && charStr <= 'Z') {
        return true
    } else {
        return false
    }
}
// console.log(countOfWord('Yes, she*is%my#love.'))

// 3.判断子字符串在长字符串中出现的次数
// 如： 'abc'在'abcabcabc'中出现的次数
function countOfStr(supStr,subStr) {
    var arr = supStr.split(subStr)
    return arr.length - 1
}

// console.log(countOfStr('abcabcabc','abc'))


// 4.判断单个字符是否是数字字母下划线
function isDEF(charStr) {
    if(charStr >= 'a' && charStr <= 'z' || charStr >= 'A' && charStr <= 'Z' || charStr >= '0' && charStr <= '9' || charStr == '_') {
        return true
    } else{
        return false
    }
}
// console.log(isDEF('&'))