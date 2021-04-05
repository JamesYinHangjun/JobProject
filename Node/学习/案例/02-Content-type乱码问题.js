var http = require('http')

var server = http.createServer()

server.on('request', function(req,res) {

    // 服务器默认发送的数据，其实是 utf8 编码的内容
    // 但浏览器不知道你是 utf8 编码的内容
    // 浏览器在不知道服务器响应内容编码的情况下，会按照当前操作系统默认的编码去解析
    // 中文操作系统的默认编码是 gbk
    // 解决方法就是正确的告诉浏览器，服务器给你发送的内容是什么编码的
    // 在http协议中， Content-Type 就是用来告诉对方我给你发送的数据内容是什么类型的
    //      text/plain  就是普通的文本类型
    //      text/html   html格式的文本
    // res.setHeader('Content-Type','text/plain;charset=utf8')
    // res.end('hello 中国')

    var url  = req.url

    if( url === '/plain') {
        res.setHeader('Content-Type','text/plain;charset=utf8')
        res.end('hello 中国')
    } else if(url ="/html") {
        res.setHeader('Content-Type','text/html;charset=utf8')
        res.end('<p><a href="http://www.baidu.com">点我</a></p>')
    }
})

server.listen(80,function() {
    console.log('80端口已启动..')
})