var curIndex;
var timerInner = null;
var timer = null;
var activeID = 1;                                    //
var nextID = 0;

window.onload=function  () {
	 var pic_wrap=$('#pic_wrap'),
        pic=$('#pic'),
        list=$('#num').getElementsByTagName('li'),
        index=0,
        timer=null;
    for (var i = 0; i < list.length; i++) {
    	list[i].index = i + 1;
	}
     function stopt () {
	    if(timer){
	    	clearInterval(timer);
	    	timer=null;
        }
    }
    function startt () {
        stopt();
        timer=setInterval(function(){
        	index=(++index)%5;
        	changepic(index);   
    	},1500)
    }
    startt();
      // 定义图片切换函数
    function changepic(cindex){
        for(var i=0;i<5;i++){
                list[i].className="";
            }
            list[cindex].className="on";
            pic.style.left=-cindex*400+"px";
            index=cindex;
     }
     // 鼠标划过整个容器时停止自动播放
    pic_wrap.onmouseover=function(event){
    stopPropagation(event); 
    stopt();        
    }
     // 鼠标离开整个容器时继续播放至下一张
     pic_wrap.onmouseout=function(event){
      stopPropagation(event); 
        startt();
    }
    
     // 遍历所有数字导航实现划过切换至对应的图片
     for(var j=0;j<5;j++){
         list[j].id=j;
         list[j].onmouseover=function(event){//和wrap.onmouseover冲突
          stopPropagation(event); 
          changepic(this.id);
     }
   }
   function stopPropagation (event) {
      if (event.stopPropagation) {  
          event.stopPropagation();  
      } else {  
          event.cancelBubble = true;  
      }  
    }  
}