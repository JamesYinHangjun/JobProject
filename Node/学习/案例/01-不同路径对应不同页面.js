var http = require('http')

var  server = http.createServer()

server.on('request',function(req,res) {
    console.log('收到请求了，请求路径是:' + req.url)

    // 使用end，发送请求同时响应数据
    // 响应的数据只能是二进制数据或者字符串,要通过 JSON.stringify()转换
    // res.end("hello nodejs")


    // 根据不同的请求路径获取不同的响应结果
    // 1. 获取请求路径
    //       req.url 获取到的是端口号之后的那一部分路径
    //       也就是说所有的 url 都是以 / 开头的
    // 2.判断路径处理响应

    var url = req.url

    if( url == '/') {
        res.end('index page')
    } else if( url == '/login') {
        res.end('login page') 
    } else {
        res.end('404 Not Found')
    }

    


    // if(url === '/products') {
    //     var products = [
    //         {
    //             name: '苹果',
    //             price: 10
    //         },
    //         {
    //             name: '香蕉',
    //             price: 10
    //         }
    //     ]

    //     res.end(JSON.stringify(products))
    // }
    
})

server.listen(3000,function() {
    console.log('server正在监听3000端口...')
})