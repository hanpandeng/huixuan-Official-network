//script
$(document).ready(function(){
	
	//夺冠魔方宣传片
	$(".video").click(function(){
		$(".popup-video").addClass("active");
	})
	
	$(".popup .close").click(function(){
		$(".popup video").trigger("pause");
		$(".main-body,.popup").removeClass("active");
	})
	
	//菜单
	$(".menu li").hover(function(){
		$(this).find(".Module").stop(true,true).delay(200).slideDown();
	},function(){
		$(this).find(".Module").stop(true,true).delay(200).slideUp();
	})
	$(".Module.mini .ModuleMin").height();
	
	$(".Module.mini").each(function(){
	    var aHeight = $(this).find("a").length * 32 + 16;
	    $(this).css('height',aHeight);
	    $(this).find(".ModuleMin").css('height',aHeight - 16);
	})
	
	
	$(".daicon ol li:first-child").addClass("active").find(".olcon").slideDown();
	$(".daicon ol li").click(function(){
		$(this).addClass("active").find(".olcon").slideDown().parents("li").siblings().removeClass("active").find(".olcon").slideUp();
	})

	
	$(".app .demo").hover(function(){
		$(this).next(".ma").stop(true,true).delay(300).show(0);
	},function(){
		$(this).next(".ma").stop(true,true).delay(600).hide(0);
	})
	
	$(".scenes li").hover(function(){
		$(this).find("p").stop(true,true).slideDown();
	},function(){
		$(this).find("p").stop(true,true).slideUp();
	})
	//tab
	vtab = function(vtit,vbox,vevent){
		$(vtit).find("li:first-child").addClass("active");
		$(vbox).find(".vcon:first-child").show().siblings(".vcon").hide();
		$(vtit).find("li").bind(vevent,function(){
			$(this).addClass("active").siblings("li").removeClass("active");
			var ai = $(vtit).find("li").index(this);
			$(vbox).children().eq(ai).show().siblings().hide();
			return false;
		})
	}
	vtab(".vt",".vb","click");
	
	//兼容性
	
	$(".app li:nth-child(4n)").css("margin-right","0");
	$(".app li:nth-child(n+5)").css("margin-top","3.5%");
	$(".scenes .li-2:nth-child(n+4)").css("margin-top","1%");
	$(".caselist li:nth-child(5n)").css("margin-right","0");
	$(".daili-list li:last-child").css("margin-right","0");
	$(".youshi .con li:nth-child(2n)").css("margin-left","4%");
	
	//浮动联系方式隐藏
	$(".float").on("click",".close",function(){
		$(this).closest(".float").addClass("fadeOut").slideUp();
	})
	

})

document.addEventListener('touchstart', function () {}, false);


var s=location.href;
console.log(111)
s=s.replace(/\?.*$/,'');
s=s.replace(/^.*\//,'');
if(s=="index.html"){
	$("#index").addClass("active");
	}
if(s=="/module/"){
	$("#module").addClass("active");
	}
if(s=="/#zhao"){
	$("#zhao").addClass("active");
	}
if(s=="/mfcase/"){
	$("#mfcase").addClass("active");
	}
if(s=="aboutus.html"){
	$("#aboutus").addClass("active");
	}
if(s=="/dnews/"){
	$("#dnews").addClass("active");
	}
if(s=="/zhidao/"){
	$("#zhidao").addClass("active");
}


//var s_url=location.href;
//var a_id=s_url.split('/');
//console.log(a_id)
//
//$(function(){
//for(var i=1;i<a_id.length;i++){
//if(a_id[i]=='#index'){
//$("#index").addClass('active');
//}
//if(a_id[i]=='#zhao'){
//$("#zhaoshang").addClass('active');
//}
//if(a_id[i]=='module'){
//$("#module").addClass('active');
//}
//if(a_id[i]=='mfcase'){
//$("#mfcase").addClass('active');
//}
//if(a_id[i]=='dnews'){
//$("#dnews").addClass('active');
//}
//if(a_id[i]=='service'){
//$("#service").addClass('active');
//}
//if(a_id[i]=='Operate'){
//$("#Operate").addClass('active');
//}
//}
//})