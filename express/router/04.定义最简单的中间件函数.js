const express = require('express')
const app = express()

// 定义一个最简单的中间件函数
const mw = function(req,res,next) {
  console.log('这是最简单的中间件函数')
  // 这里必须要调用next(),要把结果转交给下一个中间件或者路由
  next()
}

// 将mw注册为全局生效的中间件
app.use(mw)

app.listen(80, (req,res) => {
  console.log('http://127.0.0.1')
})