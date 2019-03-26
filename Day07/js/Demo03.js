var li_tw = document.getElementById("li_tw");//获取换肤的标签
var div_fo = document.getElementsByClassName("div_fo")[0];//获取换肤大盒子
var oclose = document.getElementById("close");//获取换肤盒子关闭的标签
var ul_tw = document.getElementsByClassName("ul_tw")[0];//获取放有图片的ul
var oimg = ul_tw.getElementsByTagName("img");//获取换肤里的所有图片
var obody = document.getElementsByTagName("body");//获取body
//盒子换肤效果实现与cookie存储
li_tw.onclick = function(){
	div_fo.style.display = "block";
	oinner.style.display = "block";	//阴影状态为显示
	document.body.style.overflow = "hidden";	//将页面锁定，不带滚动条
}
oclose.onclick = function(){
	div_fo.style.display = "none";
	oinner.style.display = "none";	//阴影状态为隐藏
	document.body.style.overflow = "auto";//将页面解锁定
}
for(var i = 0;i<oimg.length;i++){
	oimg[i].onclick = function(){
		huan(this.src);
		setCookie("osrc",this.src,setCookieDate(2));
	}
}
if(getCookie("osrc")){
	huan(getCookie("osrc"));
}
function huan(src){
	obody[0].style.background = "url("+src+")";
}
//盒子拖拽效果实现
//获取屏幕可视宽度
 function getWidth(){
        var w = document.documentElement.clientWidth || document.body.clientWidth;
        return w;
}
 //获取屏幕可视高度
function getHeight(){
    var h= document.documentElement.clientHeight || document.body.clientHeight;
    return h;
}
function move(){
	
}
div_fo.onmousedown = function(){
	var e = event || window.event;
    var disX = e.clientX - div_fo.offsetLeft;
    var disY = e.clientY - div_fo.offsetTop;
    
    document.onmousemove = function (event) {
        var e = event || window.event;
        var l = e.clientX - disX;
        var t = e.clientY - disY;
        if(t <= 0){
            t = 0;
        }
        if(l <= 0){
            l = 0;
        }
        if(l > getWidth() - div_fo.offsetWidth){
            l = getWidth() - div_fo.offsetWidth;
        }
        if(t > getHeight() - div_fo.offsetHeight){
            t = getHeight() - div_fo.offsetHeight;
        }
        div_fo.style.left = l + "px";
        div_fo.style.top = t + "px";
        div_fo.style.margin = 0;
    }
    document.onmouseup = function () {
        document.onmousemove = null;
    }
}

odiv.onmousedown = function(){
	var e = event || window.event;
    var disX = e.clientX - odiv.offsetLeft;
    var disY = e.clientY - odiv.offsetTop;
    
    document.onmousemove = function (event) {
        var e = event || window.event;
        var l = e.clientX - disX;
        var t = e.clientY - disY;
        if(t <= 0){
            t = 0;
        }
        if(l <= 0){
            l = 0;
        }
        if(l > getWidth() - odiv.offsetWidth){
            l = getWidth() - odiv.offsetWidth;
        }
        if(t > getHeight() - odiv.offsetHeight){
            t = getHeight() - odiv.offsetHeight;
        }
        odiv.style.left = l + "px";
        odiv.style.top = t + "px";
        odiv.style.margin = 0;
    }
    document.onmouseup = function () {
        document.onmousemove = null;
    }
}



