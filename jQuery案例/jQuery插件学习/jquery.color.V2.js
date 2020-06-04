// (function() {
//     function _color() {
//         $(this).css('color','#f00');
//     }

//     jQuery.prototype.color = _color;
// })();

(function() {
    $.fn.color = function(c) {
        $(this).css('color',c);
    }

})();