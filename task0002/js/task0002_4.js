var promptWrap = $('.prompt_wrap');
var inputText = $('.inputText');
var list = promptWrap.getElementsByTagName('li');
var result = [];               // 提示的内容

window.onload = function () {
    for (var i = 1, len = list.length; i < len; i++) {
        $.click(list[i], function () {                  // 鼠标事件(点击 移进 移开)
            inputText.value = this.innerHTML;
            clear();
        });
        $.on(list[i], 'mouseover', function () {
            list[0].className = '';
            this.className='choose';
        });
        $.on(list[i], 'mouseout', function () {
            list[0].className = 'choose';
            this.className = '';
        })
    }
}

function showHint(value, e) {                   // 获取及显示提示
    e=e?e:window.event;
    var keynum=e.keyCode||e.which;
    if (keynum !== 38 && keynum !== 40 && keynum !== 13) {     // 不响应上下键及回车键
        ajax(
            'prompt.php',
            {
                data: {
                    q: value
                },
                onsuccess: function (responseText, xhr) {
                    clear();
                    list[0].innerHTML = value;                            // list[0]储存value
                    if(responseText) {                                    // 显示
                        promptWrap.style.display = 'block';
                        result = responseText.replace(/\s+/g, '').split(',');
                        for (var i = 0, len = result.length; i < len; i++) {
                            list[i + 1].innerHTML = result[i];
                        }
                    }
                    else {
                        promptWrap.style.display = 'none';
                    }
                }
            }
        );
    }
}

function move(e) {                    // 键盘事件(上下键及回车)
    var rlen = result.length;
    if (rlen) {
        if(window.event) {            // 获取键盘按下的字符
            var keynum = e.keyCode;
        }
        else if(e.which) {
            var keynum = e.which;
        }

        var index = parseInt($('.choose').id[3]);     // 获取choose元素为第几个

        switch (keynum) {
            case 38:                                  // Up Arrow
                list[index].className = '';
                if (index === 0) {
                    index = rlen;
                }
                else {
                    index--;
                }
                list[index].className = 'choose';
                inputText.value = list[index].innerHTML;
                break;
            case 40:                                  // Down Arrow
                list[index].className = '';
                if (index === rlen) {
                    index = 0;
                }
                else {
                    index++;
                }
                list[index].className = 'choose';
                inputText.value = list[index].innerHTML;
                break;
            case 13:                                  // Enter
                clear();
        }
    }
}

function clear() {
    for (var i = 1, len = list.length; i < len; i++) {
        list[i].innerHTML = '';
    }
    $('.choose').className = '';
    list[0].className = 'choose';
    result.length = 0;
    promptWrap.style.display = 'none';
}