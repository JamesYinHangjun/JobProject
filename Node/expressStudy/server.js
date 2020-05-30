const express = require('express')
// express 实例化
const app = express()

app.get('/user/login', (req,res) => {
    console.log('你好')
    res.send('注册成功')
})

app.listen(3000, () => {
    console.log('serve start')
})