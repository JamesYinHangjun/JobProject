// 相当于Vue的构造函数

function MVVM(options) {
    // 将配置对象保存到vm
    this.$options = options;
    // 将 data 对象保存到 vm 和变量 data 中
    var data = this._data = this.$options.data;
    // 保存 vm 到变量 me
    var me = this;

    // 数据代理
    // 实现 vm.xxx -> vm._data.xxx

    // 代理的关键
    // 遍历data中所有的属性
    Object.keys(data).forEach(function(key) {
        // 对指定的属性实现代理
        me._proxy(key);
    });

    observe(data, this);

    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },

    // 实现数据代理的方法
    _proxy: function(key) {
        // 保存 vm
        var me = this;
        // 给 vm 添加指定属性名的属性,  给 me 对象 添加 key 属性
        Object.defineProperty(me, key, {
            configurable: false,    // 不能重新定义，防止别人修改
            enumerable: true,       // 可以枚举遍历

            // 当通过 vm.xxx读取属性值时调用，从data中获取对应的属性值返回   代理读操作
            get: function proxyGetter() {
                return me._data[key];
            },
            // 当通过vm.xxx = value 时，value 被保存到data中对应的属性上   代理写操作
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });
    }
};