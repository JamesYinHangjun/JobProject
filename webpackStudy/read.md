一.步骤:
    1.在webpackConfig文件下目录下 npm init -y 初始化生成package.json文件
    2.安装
        cnpm install webpack webpack-cli -D
    
    3.新建一些目录和文件
        src  起始文件
            index.js
        webpack.config.js     一些配置文件的地方
            entry: 打包哪些文件
            output: 打包之后输出的地方
                path： 打包之后输出的文件夹
                filename: 打包之后 输出，生成的文件名称

    4.打包html资源(需要引用一个插件html-webpack-plugin)
        安装：
            cnpm i --save-dev html-webpack-plugin
        使用:
            1)在webpack.config.js中引入
                const HtmlWebpackPlugin = require('html-webpack-plugin')
            2)配置plugins
                HtmlWebpackPlugin 是一个构造函数
                plugins:[
                    new HtmlWebpackPlugin({
                        template: './src/index.html'    //template 指向要打包的html文件
                    })
                ]
            3)执行打包命令即可
                webpack
            4)会在dist下面生成对应的打包后的文件index.html


    5.打包css文件(比如less/css)
        在index.js文件下引入index.less和one.css
        安装:
            cnpm i style-loader css-loader less-loader less -D
        使用:
            1)配置
                在webpack.config.js下配置module
                 module:{
                    rules:[
                        {
                            test: /\.less$/,
                            use:[
                                'style-loader','css-loader','less-loader' (从右向左处理)
                            ]
                        },{
                            test: /\.css$/,
                            use:[
                                'style-loader','css-loader'
                            ]
                        }
                    ]
                },

                注意:test使用正则匹配文件
                    use：当前匹配规则所使用的loader(从右向左执行)

    6.图片打包
        安装:
            cnpm install url-loader file-loader -D
    
    7.打包
        webpack即可


二.本地服务器
安装:
    cnpm install webpack-dev-server -D

配置:
    devServer:{
        contentBase:resolve(__dirname,'dist'),      //启动的路径(从哪启动)
        port: 3000,
        open: true,      //是否自动打开浏览器
        compress: true   // 是否压缩
    }

启动:
    cnpm i npx -D
    npx webpack-dev-server

    或者
        在package.json中的script中配置
            "dev": "npx webpack-dev-server"
        然后在终端运行
            npm run dev

    