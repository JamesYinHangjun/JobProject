// (function() {
//     function _color() {
//         $(this).css('color','#f00');
//     }

//     jQuery.prototype.color = _color;
// })();

// (function() {
//     $.fn.color = function(c) {
//         $(this).css('color',c);
//     }

// })();


;(function($) {
    var _that;        // 定义一个变量用于存放this关键字指向的对象本身

    $.fn.color = function(c) {
        _that = this       // 对象本身，进入方法时，九江对象本身存储起来，以便于后面使用
        $(_that).css('color',c);

        return _that;     // 返回对象本身，便于可以使用链式调用
    }

})(jQuery);