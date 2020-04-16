var express = require('express')

var app = express()

app.get('/',function(req,res) {
    // res.write('hello world')
    // res.end()
    res.send(`
        hello world
        你好吗?
    `)
})

// 当由/public/开头的时候，去./public/目录中去找
// app.use('/public/',express.static('./public/'))

// 当没有第一个参数的时候，直接省略public去找
app.use(express.static('./public/'))

app.listen(3000,function() {
    console.log("Node app is running")
})
