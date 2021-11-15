const express = require('express')
const app = express()

// 定义局部中间件 => 不适用app.use()的中间件
const mw = function(req,res,next) {
  console.log('局部生效的中间件')
  next()
}

// 定义路由
// mw中间件只在第一个路由中生效
app.get("/",mw, (req, res) => {
  res.send('Get Page')
})
app.post("/user", (req, res) => {
  res.send('User Page')
})

app.listen(80, (req, res) => {
  console.log('http://127.0.0.1')
})


//中间件的注意事项
// 1.要在路由之前注册中间件
// 2.客户端发送过来的请求，可以连续调用多个中间件处理
// 3.执行完中间件的业务代码，不要忘记调用next()
// 4.调用完nxet()后，不要再写额外的代码了
// 5.连续调用多个中间件时，多个中间件之间，共享req和res对象