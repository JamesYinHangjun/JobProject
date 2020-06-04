;(function($) {
    var _that;
    function _setAttr(config) {
        var _that = this;

        // 设置默认值
        var def = {width: '200px',height:'200px',color: '#f00',background: '#000'}
        var setting = $.extend({},def,config)   //将默认值对象与用户传参对象进行合并生成最终的设置对象

        _that.css('width',setting.width);
        _that.css('height',setting.height);
        _that.css('color',setting.color);
        _that.css('background',setting.background);

        return _that;
    }
    
    $.fn.setAttr = _setAttr

})(jQuery);