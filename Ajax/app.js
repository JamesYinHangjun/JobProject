// 引入express框架
const express = require('express')

const path = require('path')

// 创建web服务器
const app = express()


// 静态资源访问服务功能
app.use(express.static(path.join(__dirname,'public')))

app.get('/first',(req,res) => {
    console.log('first')
    res.send('Hello Ajax')
})

// 监听端口
app.listen(3000)
console.log('服务器启动成功')