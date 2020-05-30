## express

### 通过express 框架 书写api
前后端分离 前端通过ajax请求数据
$.get('http://www.baidu.com/user/login?us=123&ps=456', () => {

})

http://www.baidu.com/user/login?us=123&ps=456  api接口
通过api接口实现数据的请求

前端工作：
    1.写界面 
    2.请求数据
    3.数据处理

后端工作：
    写api接口

登陆接口逻辑分析:
    1.接收用户传递的数据
    2.处理数据
    3.返回数据              

### express 基本使用
1.安装 express

```
npm install express --save
```

### 非关系型数据库 mongodb