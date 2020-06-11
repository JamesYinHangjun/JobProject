const first = () => (new Promise((resolve,reject) => {
    console.log(3)
    let p = new Promise((resolve, reject) => {
        console.log(7)
        setTimeout(() => {
            console.log(5)
            resolve(6)
        }, 0)
        resolve(1)
    })
    resolve(2)
    p.then((arg) => {
        console.log(arg)
    })
}))

first().then((arg) => {
    console.log(arg)
})
console.log(4)


/**
 * 
.执行顺序
    同步代码(最高)
    微任务的异步代码(次高)   一般是then时添加的
    宏任务的异步代码(最低,setTimeout)

    then比setTimeout先执行
 */
  
/**
 * 解析：
 *      1.promise是立即执行的，所以3和7也都是同步的
 *        4也是同步的，根据执行顺序，同步代码先执行，所以从上而下的执行顺序是 3 7 4
 *      2.微任务的异步代码(次高)   一般是then时添加的
 *          resolve只执行一次，所以p中的resolve只执行1，不执行6
 * 
 *          执行 1 2
 * 
 *      3.
 */