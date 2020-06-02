# net-request-axios

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


- 开发环境、测试环境、生产环境
- 如果从开发环境转到生产环境，只是域名的改变
- 对于数据请求，使用axios，如果从开发环境转到生产环境，则必须要所有使用axios的地方都需要改变域名，这样会特别麻烦，这时不得不要封装axios请求了
- 一般都会新建一个util文件夹，其中创建一个request.js文件，在其中封装axios
