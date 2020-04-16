/**
 * ajax封装
 * @param {*} type   请求类型
 * @param {*} url    请求地址
 * @param {*} params 请求参数
 * @param {*} dataType  返回的数据格式  json/xml/普通的字符串
 * @param {*} callback  将数据返回
 */

function myAjax(type,url,params,dataType,callback) {
    var xhr = new XMLHttpRequest();

    if(type == "get") {
        if(params && params != "") {
            url = url + "?" +params;
        }
    }
    
    xhr.open("type","url",true)

    if(type == "get") {
        xhr.send(null);
    } else if(type == "post") {
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(params);
    }


    xhr.onreadystatechange = function() {
        if(xhr.readyState == "4") {
            if(xhr.status == "200") {
                var result = null;
                if(dataType == "json") {
                    result = xhr.responseText;
                    result = JSON.parse(result);
                } else if(dataType == "xml") {
                    result = xhr.responseXML;
                } else {
                    result = xhr.responseText
                }

                if(callback) {
                    callback(result);
                }
                
            }
        }
    }
}