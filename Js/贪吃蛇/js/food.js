var position = 'absolute';
// 当蛇遇到食物后，会  a)原来的食物消失，会随机生成一个新的食物
//                   b) 蛇的身长变长 原来的蛇 消失，生成一条新的蛇

// 生成新的食物调用 render 方法, 在调用 render 方法之前， 删除之前创建的食物

// 记录上一次创建的食物， 为删除做准备
var elements = [];

//食物对象
function Food(options) {
    options = options || {};
    this.x = options.x || 0;
    this.y = options.y || 0;

    this.width = options.width || 20;
    this.height = options.height || 20;

    this.color = options.color || 'green';
}

//render 方法 将 创建的 Food 对象 渲染到 map上
Food.prototype.render = function(map) {
    // 删除之前创建的 食物
    // 在调用 render 方法之前，先 调用 remove() 方法，删除上一个 食物
    remove();

    // 动态创建 div ,也就是页面上的食物
    var div = document.createElement('div');
    map.appendChild(div);

    // 食物创建之后，放入 elements 之中
    elements.push(div);

    // 随机设置 食物的 x 和 y 位置
    this.x = Tools.getRandom(0,map.offsetWidth / this.width -1) * this.width;
    this.y = Tools.getRandom(0,map.offsetHeight / this.height -1) * this.height;

    // 设置 div  的样式
    div.style.position = position;
    div.style.left = this.x +'px';
    div.style.top = this.y +'px';
    div.style.width = this.width +'px';
    div.style.height = this.height +'px';
    div.style.backgroundColor = this.color;
}

function remove() {
    for(var i = elements.length - 1; i >= 0; i--) {
        // 删除 食物div
        elements[i].parentsNode.removeChild(elements[i]);

        // 删除数组中的元素    从最后一个元素 删除
        elements.splice(i,1);
    }
}

// 创建出食物对象
var map = document.getElementById("map");
var food = new Food();

food.render(map);
