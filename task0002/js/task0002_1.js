// level 1
$.click($('#hobbyBtn'),function  () {
	alert("btn clicked")
	var inputStr=$('#hobby').value;
	var result='';
	if(inputStr!=null){
	var inputArr=uniqArray(inputStr.split(','));
	inputArr=inputArr.filter(function(item) {
		return item!='';
	});
	result=inputArr.join(',');
	
	}
	$('#hobbyShow').innerHTML="your hobbies are:"+result;

});

// level 2
$.click($("#hobbyBtn2"),function(){
	alert("btn2 clicked")
    var inputStr=$("#hobby2").value;
    var result="";
    if(inputStr!=null){
        //deal inputStr
        var inputArr=uniqArray(inputStr.split(/\n|,|，|\s|、|;|；/));
        //去重并过滤掉空的
        var inputArr=inputArr.filter(function(item){
            return item!="";
        });
        result=inputArr.join(",")
    }
    $("#hobbyShow2").innerHTML="your hobbies are:"+result;
});

//level 3
$.click($("#hobbyBtn3"),function(){
    var inputStr=$("#hobby3").value;
    var errorMsg=$("#errorMsg");
    	errorMsg.style.color="#f00";
    if(inputStr!=null){
        //deal inputStr
        var inputArr=uniqArray(inputStr.split(/\n|,|，|\s|、|;|；/));
        //去重并过滤掉空的
        var inputArr=inputArr.filter(function(item){
            return item!="";
        });
    }
    if (inputArr.length < 1) {                       // 错误处理
        errorMsg.innerHTML = '请输入至少一个爱好';
    }
    else if (inputArr.length > 10) {
        errorMsg.innerHTML = '爱好数量不能超过10个';
    }
    else {
    	errorMsg.innerHTML = '';
       if ($('#result')) {
            $('.wrap3').removeChild($('#result'));
        }
        }

    

        var result = document.createElement('div');
        result.id = 'result';
    for(var i in inputArr){
        // console.log("om");
        var box=document.createElement("input");
        box.setAttribute("type","checkbox");
        box.setAttribute("value",inputArr[i]);

        var label=document.createElement("label");
        label.setAttribute("for",inputArr[i]);
        label.innerHTML=inputArr[i];
        result.appendChild(box);
        result.appendChild(label);
    }
    $('.wrap3').appendChild(result);    // 注意减少页面重绘：用js 拼好，最好一次性 append 或者 innerHTML
});

$.click($("#reset"),reset);

function reset() {
    $('#errorMsg').innerHTML = '';
    $('#hobby3').value = '';
   if ($('#result')) {
            $('.wrap3').removeChild($('#result'));
        }
}

