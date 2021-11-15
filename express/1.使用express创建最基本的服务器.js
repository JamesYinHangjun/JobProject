// 1.导入express
const express = require('express')

//2.创建web服务器
const app = express()

app.get('/user', (req, res) => {
  // 调用express提供的res.send()方法，向客户端响应一个JSON对象
  res.send({name: 'zs',age: 20, gender: '男'})
})

app.get('/',(req,res) => {
  //req.query 默认是一个空对象
  //客户端使用 ?name=ze&age=20 这种查询字符串的形式，发送到服务器的参数
  // 可以通过 req.query访问到，如 req.query.name req.query.age
  console.log(req.query)
  res.send(req.query)
})

// URL地址中，通过:id访问URL中的动态参数(req.params)
app.get('/user/:id', (req,res) => {
  // req.paramse默认是一个空对象
  console.log(req.params)
  res.send(req.params)
})

//3.启动web服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1:80')
})