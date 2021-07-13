/*
    1. extname()
        => 专门获取一个路径中的后缀名
        => 语法: path.extname('文件名)

    2.isAbsolute()
        => 判断是不是绝对路径
        => 语法: path.isAbsolute('路径地址)
        => 返回值: 一个布尔值
            + true: 表示绝对路径
    
    3.join
        => 多个参数拼接成相对路径
        => 语法: path.join('地址1','地址2','地址3')
        => 返回值: 拼接好的相对路径
*/ 

const path = require('path')

// 1.extname
const res = path.extname("1.html")
console.log(res)