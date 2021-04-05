// 我们访问百度，得到的都是包含很多标签的字符串，浏览器会将其解析成页面的内容

const http = require('http')

const app = http.createServer()


app.on("request",function(req,res) {

    res.end("<h1>hello user</h1>")
})

app.listen(3000,function() {
    console.log("服务器启动成功")
})
