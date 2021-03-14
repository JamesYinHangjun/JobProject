var fs = require('fs')

// 读写文件有同步和异步的接口

// 1.读文件 fs.openSync(读哪个文件,读还是写等,mode(读取文件时的模式，默认值就好了)) 
// 这样读取是只在内存中读取，返回的是一个标识
// var fd = fs.openSync("hello.txt","r")
// console.log(fd)



// 2.读写文件
// 同步(等待和阻塞):fs.readFileSync(读哪个文件,[options])
// 异步: fs.readSync()

// var content = fs.readFileSync('hello.txt',{flag:'r',encoding:"utf-8"})
// var content = fs.readFile('hello.txt',{flag:'r',encoding:"utf-8"},(err,data) => {
//     if(err) {
//         console.log('输出错误')
//     } else {
//         console.log(data)
//     } 
//     console.log('123')
// })
// console.log(content)

// 封装成promise
function fsRead(path) {
    return new Promise(function(resolve,reject) {
        fs.readFile(path,{flag:'r',encoding:"utf-8"},(err,data) => {
            if(err) {
                // console.log('输出错误')
                // 失败时执行的代码
                reject(err)
            } else {
                // console.log(data)
                // 成功时执行的代码
                resolve(data)
            } 
        })
    })
}

var w1 = fsRead('hello.txt')
w1.then(function(res) {
    console.log(res)
})


// 读取多个文件
async function ReadList() {
    var file2 = await fsRead('hello.txt')
    var file3 = await fsRead(file2 + ".txt")
    var file3Content = await fsRead(file3 + ".txt")
    console.log(file3Content)
}
ReadList()