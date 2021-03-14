 // 格式化日期 年月日 
 var date = new Date();
 console.log(date.getFullYear()); // 返回当前日期的年  2019
 console.log(date.getMonth() + 1); // 月份 返回的月份小1个月   记得月份+1 呦
 console.log(date.getDate()); // 返回的是 几号
 console.log(date.getDay()); // 3  周一返回的是 1 周六返回的是 6 但是 周日返回的是 0
 // 我们写一个 2019年 5月 1日 星期三
 var year = date.getFullYear();
 var month = date.getMonth() + 1;
 var dates = date.getDate();
 var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
 var day = date.getDay();
 console.log('今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day]);


// 格式化日期 时分秒
console.log(date.getHours()); // 时
console.log(date.getMinutes()); // 分
console.log(date.getSeconds()); // 秒
// 要求封装一个函数返回当前的时分秒 格式 08:08:08
function getTimer() {
var time = new Date();
var h = time.getHours();
h = h < 10 ? '0' + h : h;
var m = time.getMinutes();
m = m < 10 ? '0' + m : m;
var s = time.getSeconds();
s = s < 10 ? '0' + s : s;
return h + ':' + m + ':' + s;
}
console.log(getTimer());