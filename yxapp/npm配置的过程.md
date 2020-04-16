1.初始化npm配置文件
```
$ npm init -y
# 生成package.json文件
```

2.安装要依赖的 gulp 插件
```
# 先全局安装 gulp
$ npm i gulp -g
# 安装gulp依赖
$ npm i -D gulp
```

3.安装 gulp-sass 依赖
```
# 安装 gulp-sass 依赖
$ npm i gulp-sass -D
```

4.全局安装 live-server 帮我们启动web服务
```
# 全局安装
$ npm i -g live-server
# 控制台进入我们的src目录，然后运行live-server,会自动运行我们的web项目
```

5.chrome浏览器远程真机调试
必须保证以下几点:
+ 手机必须打开usb调试功能(android)
+ 手机必须安装android的chrome浏览器app
+ 手机要通过usb连接到电脑

用chrome可以进行远程连接调试

1) 打开开发人员工具F12
2) 点击那个三个点的图标，选择more tools ,然后选择Remote devices
3) 选择我们的手机设备,然后点inspect 按钮

6.移动端1px边框问题解决
```
# 给swiper-container 设置 1px 像素边框，会导致底下出现几像素空白
```
+ 第一种解决方案: 给里面的image设置 vertical-align: middle,但是这样设置的边框会很粗
+ 第二种解决方案: 见index.scss里面
