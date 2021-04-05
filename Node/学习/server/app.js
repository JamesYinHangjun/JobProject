// 1.用于创建网站服务器的模块     加载http核心模块
const http = require('http')

// 2.app对象就是网站服务器对象    创建一个web服务器
const app = http.createServer()

// 3.当客户端有请求来的时候，服务器监听请求
app.on("request",function(req,res) {
    // 结束请求，并响应内容
    res.end("<h1>hello user</h1>")
})
// 4.监听端口，启动服务器
app.listen(3000,function() {
    console.log("服务器启动成功")
})
console.log('网站服务器启动成功');