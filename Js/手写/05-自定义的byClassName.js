function elementByClassName(node, classStr) {
    // 获取node这个节点下面的所有子节点
    var node = node.getElementsByClassName('*')
    var arr = []    // 存放符合条件的节点
    for(var i = 0; i< node.length; i++) {
        if(node[i].className === classStr) {
            arr.push(node[i])
        }
    }

    return arr
}