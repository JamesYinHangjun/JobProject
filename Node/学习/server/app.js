// 用于创建网站服务器的模块
const http = require('http')

// app对象就是网站服务器对象
const app = http.createServer()

// 当客户端有请求来的时候
app.on("request",function(req,res) {
    // 结束请求，并响应内容
    res.end("<h1>hello user</h1>")
})
// 监听端口
app.listen(3000)
console.log('网站服务器启动成功');