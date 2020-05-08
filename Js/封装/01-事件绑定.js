
/**
 * DOM2兼容封装
 * @param {*} obj  事件源 
 * @param {*} type 事件类型
 * @param {*} fn   事件处理函数
 */
function bindEvent(obj,type,fn) {
    if(obj.addEventListener) {
        obj.addEventListener(type,fn,false)
    } else {
        obj.attachEvent("on"+type,fn)
    }
}