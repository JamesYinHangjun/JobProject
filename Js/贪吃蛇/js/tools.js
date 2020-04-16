// 生成 随机 对象
var Tools = {
    getRandom: function(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
