// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    return typeof arr === "object" && Object.prototype.toString.call(arr) === "[object Array]";
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    // return typeof fn === "function";
     return Object.prototype.toString.call(fn) === '[object Function]';
}

//--------------------------------------------------
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    var o; //result
    if (Object.prototype.toString.call(src) === "[object Array]") {
        o = []; //判断是否是数组，并赋初始值
    } else {
        o = {};
    }
    for (var i in src) { //遍历这个对象
        if (src.hasOwnProperty(i)) { //排出继承属性
            if (typeof src[i] === "object") {
                o[i]=arguments.callee(src[i]); //递归赋值
            } else {
                o[i] = src[i]; //直接赋值
            }
        }
    }
    return o;
}

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray1(arr) {
    var newArr = []; //创建空数组
    for (var i in arr) { //遍历旧数组
        if (newArr.indexOf(arr[i]) == -1) { //如果新数组中不存在当前元素
            newArr.push(arr[i]); //新数组中加入当前元素
        }
    }
    return newArr;
}

function uniqArray2(source) {
    var len = source.length,
        result = source.slice(0),
        i, datum;


    // 从后往前双重循环比较
    // 如果两个元素相同，删除后一个
    while (--len > 0) {
        datum = result[len];
        i = len;
        while (i--) {
            if (datum === result[i]) {
                result.splice(len, 1);
                break;
            }
        }
    }

    return result;
}

// hash
function uniqArray3(arr) {
    var obj = {};
    var result = [];
    for (var i = 0, len = arr.length; i < len; i++) {

        var key = arr[i];

        if (!obj[key]) {
            result.push(key);
            obj[key] = true;
        }
    }
    return result;
}

// hash + es5
// 速度最快
function uniqArray(arr) {
    var obj = {};
    for (var i = 0, len = arr.length; i < len; i++) {
        obj[arr[i]] = true;
    }
    return Object.keys(obj);
}
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    var i;
    var j;
    for (i = 0; i < str.length; i++) { //从头遍历字符串
        if (str.charAt(i) != " " && str.charAt(i) != "\t") { //当不为空的时候
            break; //跳出循环
        }
    }
    for (j = str.length - 1; j >= 0; j--) {
        if (str.charAt(j) != " " && str.charAt(j) != "\t") { //当不为空的时候
            break; //跳出循环
        }
    }
    return str.slice(i, j + 1); //返回子字符串
}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    if (str.length != -1) {
        return str.replace(/^\s+|\s+$/g, '');
        //匹配开头和结尾的空白字符，并全局匹配
    }
}


// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for (var i = 0, len = arr.length; i < len; i++) {
        fn(arr[i], i);
    }
}

// 其中fn函数可以接受两个参数：item和index

/*// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html*/

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj){
    var count=0;
    for(var o in obj) count++;
    return count;

}
function getObjectLength2(obj) {
    return Object.keys(obj).length;
}
// 判断是否为邮箱地址
// 邮箱由（数字字母，点），数字字母组合，@符号，数字字母，（点，数字字母）。
// 其中两个小括号都是任意个数的。并且开头和结尾都是字母。
function isEmail(emailStr) {
    var pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return pattern.test(emailStr);
}
// 判断是否为手机号
// 手机号是11位组成的，有时候会在前面加国际区号的前缀，如中国：+86。
// 查阅相关资料后发现区号最多4位。

function isMobilePhone(phone) {
     var pattern=/^(\+\d{1,4})?\d{7,11}$/;
    return pattern.test(phone);
}

// 3. DOM

// task 3.1
function hasClass(element, className) {
    var name = element.className.match(/\S+/g) || [];
    if (name.indexOf(className) !== -1) {
        return true;
    }
    return false;

}
// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    if (!hasClass(element, newClassName)) {
        element.className = trim(element.className + ' ' + newClassName);
    }
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    if (hasClass(element, oldClassName)) {
        element.className = trim(element.className.replace(oldClassName, ''));
    }
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
// 使用 getBoundingClientRect() 方法获取当前元素相对于可视区域(浏览器左上角)
// 的位置(包括滚动的距离了)
function getPosition(element) {
    var pos = {};
    pos.x = element.getBoundingClientRect().left 
    pos.y = element.getBoundingClientRect().top 
    return pos;
}
function getPosition2(element) {
    var x = 0;
    var y = 0;
    var current = element;

    while (current !== null) {
        x += current.offsetLeft;
        y += current.offsetTop;
        current = current.offsetParent;
    }

    var scrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
    var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;

    // element.getBoundingClientRect()

    x -= scrollLeft;
    y -= scrollTop;

    return {
        x: x,
        y: y
    }
}

// task 3.2
// 实现一个简单的Query
function $(selector) {
    var ele = document;
    var sele = selector.replace(/\s+/, ' ').split(' ');    // 去除多余的空格并分割
    // var sele = trim(selector).split(' ');
    for (var i = 0, len = sele.length; i < len; i++) {

        switch (sele[i][0]) {    // 从子节点中查找
            case '#':
                ele = ele.getElementById(sele[i].substring(1));
                break;
            case '.':
                ele = ele.getElementsByClassName(sele[i].substring(1))[0];
                break;
            case '[':
                var valueLoc = sele[i].indexOf('=');
                var temp = ele.getElementsByTagName('*');
                var tLen = temp.length;
                if (valueLoc !== -1) {
                    var key = sele[i].substring(1, valueLoc);
                    var value = sele[i].substring(valueLoc + 1, sele[i].length - 1);
                    for (var j = 0; j < tLen; j++) {
                        if (temp[j][key] === value) {
                            ele = temp[j];
                            break;
                        }
                    }
                }
                else {
                    var key = sele[i].substring(1, sele[i].length - 1);
                    for (var j = 0; j < tLen; j++) {
                        if (temp[j][key]) {
                            ele = temp[j];
                            break;
                        }
                    }
                }
                break;
            default :
                ele = ele.getElementsByTagName(sele[i])[0];
                break;
        }
    }

    if (!ele) {
        ele = null;
    }

    return ele;
}

// // 可以通过id获取DOM对象，通过#标示，例如
// $("#adom"); // 返回id为adom的DOM对象
// // 可以通过tagName获取DOM对象，例如
// $("a"); // 返回第一个<a>对象
// // 可以通过样式名称获取DOM对象，例如
// $(".classa"); // 返回第一个样式定义包含classa的对象
// // 可以通过attribute匹配获取DOM对象，例如
// $("[data-log]"); // 返回第一个包含属性data-log的对象
// $("[data-time=2015]"); // 返回第一个包含属性data-time且值为2015的对象
// // 可以通过简单的组合提高查询便利性，例如
// $("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象


// 4.事件
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    if (element.addEventListener) {
         element.addEventListener(event, listener,false);
    } else if(element.attatchEvent){
        element.attatchEvent('on'+event,listener);
    }else{
        element['on'+event]=listener;
    }
   
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
      if (element.removeEventListener) {
         element.removeEventListener(event, listener,false);
    } else if(element.detatchEvent){
        element.detatchEvent('on'+event,listener);
    }else{
        element['on'+event]=null;
    }
   
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    addEvent(element, 'click', listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    addEvent(element, 'keydown', function(e) {
        var event = e || window.event;
        var keyCode = event.which || event.keyCode;
        if (keyCode === 13) {
            listener.call(element, event);
        }
    });
}

//把上面几个函数变成$对象的一些方法
$.on=addEvent;
$.un=removeEvent;
$.click=addClickEvent;
$.enter=addEnterEvent;
$.delegate = delegateEvent;

/*//改进$，直接作用于selector而非element
$.on=function(selecor,event,listener){
    var element=$(selecor);
    addEvent(element,event,listener);
}
$.click=function(selector,listener){
    var element=$(selector);
    addClickEvent(element,listener);
}
$.un=function(selector,event,listener){
    var element=$(selecor);
    removeEvent(element,event,listener);
}

//事件代理
$.delegate=function(selector,tag,event,listener){
    var element=$(selector);
    delegateEvent(element,tag,event,listener);
}
*/
// task 4.2
// 对一个列表里所有的<li>增加点击事件的监听,以及动态改变<li>并监听
// 事件代理
function delegateEvent(element,tag,eventName,listener){
    addEvent(element, eventName, function(event){
        var target = event.target || event.srcElement;
        if(target.tagName.toLowerCase() == tag.toLowerCase()) {
            listener.call(target, event);
        }
    });
}


// 5. BOM
// 判断是否为IE浏览器，返回-1或者版本号
function isIE(ver) {
    
    var ua = navigator.userAgent.toLowerCase();
    var ie = ua.match(/rv:([\d.]+)/) || ua.match(/msie ([\d.]+)/);
    if(ie) {
        return ie[1];//9.0,返回第一个子捕获组
    }
    else {
        return -1;
    }
    
    /*return /msie (\d+\.\d+)/i.test(navigator.userAgent)
        ? (document.documentMode || + RegExp['\x241']) : -1;*/
/*
    var b = document.createElement('b')
    //<!--[if IE 6]><i></i><![endif]-->
    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
    return b.getElementsByTagName('i').length === 1;   */ 
}


// 设置cookie
function setCookie(cookieName,cookieValue,expiredays){
    var cookie = cookieName + "=" + encodeURIComponent(cookieValue);
    if(typeof expiredays === "number"){
        cookie += "; max-age=" + ( expiredays * 60 * 60 * 24 );
    }
    document.cookie=cookie;
}

// 获取cookie值
function getCookie(cookieName){
    if(!cookieName) {
        console.log("error cookieName!");
        return;
    }
    var all = document.cookie;
    if(all === "")
        return all;
    var list = all.split("; ");
    for(var i = 0;i<list.length;i++){
        var cookie = list[i];
        var p = cookie.indexOf("=");
        var name = cookie.substring(0,p);
        var value = cookie.substring(p+1);
        //cookie[name] = value;
        if(name==cookie)
            return value;
    }
    console.log("there is no cookie named "+cookieName);
}


// task 6.1
// 学习Ajax，并尝试自己封装一个Ajax方法。
function ajax(url, options) {
    // 创建对象
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {        //兼容 IE5 IE6
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }

    // 处理data
    if (options.data) {
        var dataarr = [];
        for (var item in options.data) {
            dataarr.push(item + '=' + encodeURI(options.data[item]));
        }
        var data = dataarr.join('&');
    }

    // 处理type
    if (!options.type) {
        options.type = 'GET';
    }
    options.type = options.type.toUpperCase();

    // 发送请求
    if (options.type === 'GET') {
        var myURL = '';
        if (options.data) {
            myURL = url + '?' + data;
        }
        else {
            myURL = url;
        }
        xmlhttp.open('GET', myURL, true);
        xmlhttp.send();
    }
    else if (options.type === 'POST') {
        xmlhttp.open('POST', url, true);
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.send(data);
    }

    // readyState
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status === 200) {
                if (options.onsuccess) {
                    options.onsuccess(xmlhttp.responseText, xmlhttp.responseXML);
                }
            }
            else {
                if (options.onfail) {
                    options.onfail();
                }
            }
        }
    }
}

// 使用示例：
/*
ajax(
    'prompt.php',
    {
        data: {
            q: 'a'
        },
        onsuccess: function (responseText, xhr) {
            console.log(responseText);
        },
        onfail : function () {
            console.log('fail');
        }
    }
);
*/


