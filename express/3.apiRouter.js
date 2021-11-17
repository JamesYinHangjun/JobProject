const express = require('express')
const router = express.Router()

// 在这里挂载对应的路由
router.get('/get', (req,res) => {
  // 通过 req.query 获取 客户端通过查询字符串发送到服务器的数据
  const query = req.query
  // 调用 res.send() 向客户端响应处理的数据
  res.send({
    status: 0,  //0表示处理成功,1表示失败
    msg: 'GET 请求成功', // 状态的描述
    data: query   // 响应给客户端的数据
  })
})

// 定义 POST接口
router.post('/post', (req,res) => {
  // 通过 req.body 获得请求体中包含的 url-encoded 格式的数据
  const body = req.body
  res.send({
    status: 0,
    msg: 'POST请求成功',
    data: body
  })
})

module.exports = router