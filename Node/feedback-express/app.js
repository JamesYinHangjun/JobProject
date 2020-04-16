var express = require('express')

var app = express()

app.use('/public/',express.static('./public/'))

// 配置使用 art-template 模板引擎
// 第一个参数表示： 当渲染以 .art 结尾的文件时，使用art-template模板引擎
// express-art-template 是专门用来在Express 中把 art-template 整合到express中
// 虽然外面这里不需要记载 art-template 但也必须要装，因为 express-art-template 依赖
//  art-template
// app.engine('art', require('express-art-template'))
app.engine('html', require('express-art-template'))

var comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]

app.get('/',function(req,res) {
    // res.send('/page')
    res.render('index.html', {
        comments: comments
    })
})

app.listen(3000,function() {
    console.log('feedback is running...')
})
