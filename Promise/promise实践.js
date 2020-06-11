// 问题: 如何将大象放到冰箱里

/**
 * 答题思路：
 *      开门、装大象、关门
 *      这三步都需要时间，不会同一时间，异步执行
 *      要保证先开门，再装大象，最后关门
 * 
 *      不用promise,需要用到回调函数，但是会形成回调地狱
 */

//  回调方法：
//  console.time()

//  const openDoor = (cb) => {
//      setTimeout(cb, 1000)
//  }

//  const putIn = (cb) => {
//      setTimeout(cb, 3000)
//  }

//  const cloesDoor = (cb) => {
//      setTimeout(cb, 1000)
//  }

//  const done = () => {
//      console.timeEnd()
//      console.log('done')
//  }

//  openDoor( () => {
//      putIn( () => {
//          cloesDoor( () => {
//              done()
//          })
//      })
//  })


// 封装成promise:
console.time()
const openDoor = () => new Promise(res => {
    setTimeout(res, 1000)
})

const putIn = () => new Promise(res => {
    setTimeout(res, 3000)
})

const cloesDoor = () => new Promise(res => {
    setTimeout(res, 1000)
})

const done = () => new Promise(res => {
    console.timeEnd()
    console.log('done2')
    res()
})

openDoor().then(putIn).then(cloesDoor).then(done)