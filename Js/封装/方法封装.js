
/**
 * DOM2兼容封装
 * 实现bindEvent
 * @param {*} dom  事件源 
 * @param {*} type 事件类型
 * @param {*} fn   事件处理函数
 */
function bindEvent(dom,type,fn) {
    // 能力检测：判断方法是否存在，存在的话使用，不存在不适用
    if(dom.addEventListener) {
        // dom2级绑定事件，都在冒泡阶段触发
        dom.addEventListener(type,fn,false)
    } else if(dom.attachEvent){
        // 针对ie绑定事件
        dom.attachEvent("on"+type,fn)
    } else {
        // 缓存
        var oldFn = dom['on' + type]
        // dom0级绑定事件
        dom['on' +type] = function() {
            // 如果已经绑定过了，先执行之前的
            oldFn && oldFn()
            // 再执行新的
            fn()
        }
    }
}



/**
 * 
 */