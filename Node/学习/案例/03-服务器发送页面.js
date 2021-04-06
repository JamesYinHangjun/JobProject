
const http = require('http')
const fs = require('fs')

const app = http.createServer()


app.on("request",function(req,res) {
    // 将index.html发送给服务器
    // 我们发送的是文件中的内容

    var url = req.url

    if( url === '/') {
        // 访问页面
        fs.readFile("../resources/index.html",function(err,data) {
            if(err) {
                res.setHeader('Content-Type','text/plain;chartset=utf-8')
                res.end('404')
            } else {
                res.setHeader('Content-Type','text/html;charset=utf-8')
                res.end(data)
            }
        })
    } else if ( url === '/jpg') {
        // 访问图片
        fs.readFile("../resources/111.jpg",function(err,data) {
            if(err) {
                res.setHeader('Content-Type','text/plain;chartset=utf-8')
                res.end('404')
            } else {
                res.setHeader('Content-Type','image/jpeg;charset=utf-8')
                res.end(data)
            }
        })
    }
})

app.listen(3000,function() {
    console.log("服务器启动成功")
})
console.log('网站服务器启动成功');