const path = require('path')

module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
        // 这个name表示输入的文件名叫index，输出的文件就叫index
        filename: '[name].js',      //filename 表示要输出的文件名称
        path: path.resolve(__dirname, '../out')    // path表示输出路径
    },
    mode: 'development'   //默认是production(打包会有压缩)
}