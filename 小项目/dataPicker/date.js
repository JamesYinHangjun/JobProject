(function() {
    var datepicker = {};

    datepicker.getMonthData = function(year,month) {
        var ret = [];

        // 如果没有传入日期，就用当前的日期
        if(!year || !month) {
            var today = new Date();
            year = today.getFullYear();
            month = today.getMonth() + 1;
        }

        // 当月的第一天
        var firstDay = new Date(year,month-1,1);
        // 知道每个月的第一天是星期几
        var firstDayWeekDay = firstDay.getDay();
        // 如果是周日的话，将值赋为7
        if(firstDayWeekDay === 0){
            firstDayWeekDay = 7;
        }

        // 获得上个月的最后一天
        var lastDayOfLastMonth = new Date(year,month-1,0);
        //获得上个月最后一天是星期几
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate();

        // 获得每个月的第一行有多少个上个月的日期
        var preMonthDayCount = firstDayWeekDay -1;

        // 获得当月的最后一天
        var lastDay = new Date(year,month,0);
        // 获得最后一天是星期几
        var lastDate = lastDay.getDate();

        // 循环得到本月的每一天
        // 因为每个月情况不一样，有四周，也有六周的
        // i 是日期
        for(var i=0; i<7*6; i++) {
            // 获得每一天的真实日期
            var date = i +1 -preMonthDayCount;
            var showDate = date;
            var thisMonth = month;
            if(date<=0) {
                // 上个月
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;
            }else if (date > lastDate) {
                // 下个月
                thisMonth = month + 1;
                showDate = showDate - lastDate;
            }

            if(month === 0 ) thisMonth = 12;
            if(month === 13 ) thisMonth = 1;

            ret.push({
                month: thisMonth,
                date: date,
                showDate: showDate
            });

        }

        return ret;
    };

    // 唯一要暴露的对象，将datepicker暴露出去
    window.datepicker = datepicker;
})();
