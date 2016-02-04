var timer;
var errorTime=$('.errorTime');
var resultTime=$('.resultTime')
  var pattern = /^\d{4}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2]\d)|(3[0-1]))$/; //判断时间格式
$.click($('.startTime'),function  () {
	errorTime.style.display="none";
	if(timer){
		clearInterval(timer);
	}
	var timeStr=$('.time').value.trim();
		var future=new Date(timeStr);
		if(pattern.test(timeStr)){
	timer=setInterval(function () {
		var now=new Date();
		var timeSpan=Math.round((future-now)/1000);
		console.log(timeSpan);
		console.log(pattern.test(timeStr));
		if(timeSpan<=0){
			clearInterval(timer);
			errorTime.innerHTML=""
			errorTime.innerHTML="时间到了或已过期"
			errorTime.style.display="block";
			resultTime.style.display="none";
			return; 
		}
		
		var s=timeSpan%60;
		var m=Math.floor(timeSpan/60)%60;
		var h=Math.floor(timeSpan/(60*60))%24;
		var day=Math.floor(timeSpan/(24*60*60));
		var resultStr;
		console.log(day);
		/*"&lt; span style='color:
		#527' &gt;"+day+"天"+h+"小时"+m+"分"+s+"秒&lt;/span&gt;";*/
		resultStr="距离日期"+timeStr+"还有:"+day+"天"+h+"小时"+m+"分"+s+"秒";
		resultTime.innerHTML=resultStr;
		resultTime.style.display = "block";
		console.log(resultStr);
	}, 1000);
	}else{
		
		errorTime.style.display="block";
}
})

$.click($('.resetTime'),function  () {
	clearInterval(timer);
	$('.time').value = '';
	errorTime.style.display="none";
	resultTime.innerHTML='';
	resultTime.style.display = "none";

});

function freshTime (span) {
	
	
}