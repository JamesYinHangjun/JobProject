// 首页

// 不在index.html中引入jquery,而是在main.js中引入,在undex.html中引入main.js就可以了
// 这样，就减少了一次请求

import $ from 'jquery'

$(function() {
    $('li:odd').css('backfroundColor','lightblue')
})