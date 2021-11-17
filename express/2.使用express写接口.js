const express = require('express')
const app = express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false}))

// 一定要在路由之前， 配置 cors 这个中间件，从而解决接口跨域的问题
const cors = require('cors')
app.use(cors())

// 导入路由模块
const router = require('./3.apiRouter')
// 把路由模块注册到app上
app.use('/api',router)

app.listen(80,function() {
  console.log('Server running at http://127.0.0.1')
})