// 记录开始时图片的索引
var nowIndex = 0
// 计时器
var timer

// 获取所有含有img的a标签
var imgs = document.querySelectorAll('.banner .images a')
// 获取所有小按钮的a标签
var points = document.querySelectorAll('.banner .point a')
// 获取左右按钮
var btns = document.querySelectorAll('.banner .btn')

bannerTick()
function bannerTick() {
    timer = setInterval(() => {
        // 循环所有的含有图片的a标签
        // for(var i=0; i < imgs.length; i++) {
        //     imgs[i].style.display = 'none'
        // }
        changeImageA()
    
        // 循环所有小按钮
        // for(var i = 0; i < points.length; i++) {
        //     points[i].className = 'hidden'
        // }
        changePointA()
    
        nowIndex++
    
        if(nowIndex == imgs.length) {
            nowIndex = 0
        }
    
        imgs[nowIndex].style.display = 'block'
        // 当前的小按钮的class变为show
        points[nowIndex].className =  'show'
    }, 1000)
}




// 点击小按钮
for(var i = 0; i < points.length; i++) {
    var pointA = points[i]
    pointA.index = i

    // 鼠标放到小圆点上时，停止定时器
    pointA.onmouseenter = function() {
        clearInterval(timer)
    }
    pointA.onmouseout = function() {
        bannerTick()
    }


    pointA.onclick = function() {
        changeImageA()
        imgs[nowIndex].style.display = 'block'

        changePointA()
        points[this.index].className =  'show'
    }
}


// 封装函数，隐藏含有图片的a标签
function changeImageA() {
    for(var i=0; i < imgs.length; i++) {
        imgs[i].style.display = 'none'
    }
}

// 封装函数，修改小按钮的class
function changePointA() {
    for(var i = 0; i < points.length; i++) {
        points[i].className = 'hidden'
    }
}

// 左右方向按钮
for(var i = 0; i < btns.length; i++) {
    var btn = btns[i]
    btn.onmouseenter = function() {
        clearInterval(timer)
    }
    btn.onmouseout = function() {
        bannerTick()
    }
}
// 点击左边按钮
function goLeft() {
    if(nowIndex <= 0) {
        nowIndex = imgs.length
    }

    nowIndex--
    changeImageA()
    changePointA()
}

// 点击右边按钮
function goRight() {
    if(nowIndex >= imgs.length) {
        nowIndex = 0
    }

    nowIndex++
    changeImageA()
    changePointA()
}