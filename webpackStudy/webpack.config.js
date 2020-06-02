const {resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output:{
        filename: './bundle.js',
        path: resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.less$/,
                use:[
                    'style-loader','css-loader','less-loader'
                ]
            },{
                test: /\.css$/,
                use:[
                    'style-loader','css-loader'
                ]
            },{
                test:/\.(jpg|gif|png)/,
                loader: 'url-loader',
                options: {
                    esModule:true,    // es6语法
                    limit: 10*1024,
                    name: '[hash:10].[ext]'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    devServer:{
        contentBase:resolve(__dirname,'dist'),
        port: 3000,
        open: true,
        compress: true
    }

}