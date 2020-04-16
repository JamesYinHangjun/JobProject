var template = require("art-template")
var fs = require('fs')

fs.readFile('./tpl.html',function(err,data) {
    if(err) {
        return console.log("读取文件失败")
    }
    var res = template.render(data.toString(),{
        name: 'Jack',
        hobbies: [
            '写代码',
            '唱歌',
        ]
    })
    console.log(res)
})
