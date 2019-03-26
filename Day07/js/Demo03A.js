		var ospan = document.getElementById("span_on");
		var oul = document.getElementsByClassName("ul_on")[0];
		var guan  = document.getElementsByClassName("span_tw")[0];
		var odiv = document.getElementsByClassName("div_on")[0];
		var oli = document.getElementById("li_on");
		var oinner = document.getElementById("inner");
		var op = document.getElementById("p_on");
		var btn = document.getElementById("btn");
		var div_th = document.getElementsByClassName("div_th")[0];
		var time = document.getElementById("time");
		var onr = document.getElementById("nr");
		var ipt1 = document.getElementById("ipt1");
		var ipt2 = document.getElementById("ipt2");
		var nr1 = document.getElementById("nr1");
		var da = document.getElementsByClassName("da")[0];
		
		ospan.onmouseover = function(){
			block();	
		}
		ospan.onmouseout = function(){
			none();		
		}
		oul.onmouseover = function(){
			block();
		}
		oul.onmouseout = function(){
			none();
		}
		//打开发文盒子
		oli.onclick = function(){
			block1();
		}
		//关闭发文盒子
		guan.onclick = function(){
			none1();
		}
		btn.onclick = function(){
			if(ipt1.value==""&&ipt2.value==""){
				alert("内容不能为空");
			}else{
				var box = document.createElement("div");
				box.className = "div_th";
				box.innerHTML = "<p class="+'p_on'+"><span class="+'span_on'+" id="+'nr'+">"+ipt1.value+"</span><span class="+'span_tw'+" id="+'time'+">"+times()+"</span></p><p class="+'p_tw'+" id="+'nr1'+">"+ipt2.value+"</p>";
				da.insertBefore(box,da.children[0]);
				none1();	
			}
			ipt1.value = "";
			ipt2.value = "";
		}
		function block1(){
			odiv.style.display = "block";
			oinner.style.display = "block";	//阴影状态为显示
			document.body.style.overflow = "hidden";	//将页面锁定，不带滚动条
		}
		function none1(){
			odiv.style.display = "none";
			oinner.style.display = "none";	//阴影状态为隐藏
			document.body.style.overflow = "auto";//将页面解锁定
		}
		//发文显示的方法
		function block(){
			oul.style.display = "block";
			op.style.background = "url(img/ico.gif)no-repeat 190px -18px";
		}
		//发文隐藏的方法
		function none(){
			oul.style.display = "none";
			op.style.background = "url(img/ico.gif)no-repeat 190px 7px";
		}
		function times(){
			var time = new Date();
			var year = time.getFullYear();
			var month = time.getMonth();
			var day = time.getDate();
			var hours = time.getHours();
			var minutes = time.getMinutes();
			var seconde = time.getSeconds();
			return zero(year)+"-"+zero(month+1)+"-"+zero(day)+" "+zero(hours)+":"+zero(minutes)+":"+zero(seconde);
		}
		function zero(n){
			if(n<10){
				n = "0"+n;
			}else{
				n = ""+n;
			}
			return n;
		}