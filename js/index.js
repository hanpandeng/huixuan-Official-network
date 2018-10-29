$(document).ready(function () {

 
  //选项卡
  var index;
  var background = ["img/canyin.jpg", "img/shangchang.jpg", "img/jiaoyu.jpg", "img/jianshen.jpg", "img/yule.jpg", "img/jiazheng.jpg", "img/meiye.jpg", "img/jiudian.jpg", "img/fangchan.jpg", "img/hunsha.jpg", "img/zhuangxiu.jpg", "img/qiche.jpg"];
  $(".main_nav li").on('mouseenter', function () {
    //清除所有类后给事件本身加个类
    $(".main_nav li").removeClass("main_nav_radius");
    $(this).addClass("main_nav_radius");

    //获取事件本身索引值
    index = $(this).index();
    console.log(index);
    $(".table").css({
      "background-image": "url(" + background[index] + ")",
      "transition": "all 0.01s"
    });
    $(".main_main_li").css("display", "none");
    $(".main_main_li").eq(index).css("display", "block");
  });


  //shade 遮罩层
  let main;
  $(".search_text").on('click', function () {
      main = $(".search_input").val()
      console.log(main);
      let aa = $(".shade_text").val(main);
      $(".shade_main,.shade").fadeIn();
      $("html").css({"overflow":"hidden"})
  });
  $(".remove").on('click', function () {
      $(".shade,.shade_main").fadeOut();
      $("html").css({"overflow":"initial"})
  });

  //应用场景
  //鼠标停留触发
  $(".scene_main_right_cd").on('mouseenter', function () {
    $(this).children(".slide_one").stop().fadeOut(500).siblings(".slide_two").stop().fadeIn(500);
  });

  //鼠标离开触发
  $(".scene_main_right_cd").on('mouseleave', function () {
    $(this).children(".slide_two").stop().fadeOut(500).siblings(".slide_one").stop().fadeIn(500);
  });


  //小程序客户案例
  $(".client_main_li").on('mouseenter', function () {
    $(this).children(".client_slide").stop().fadeIn(300);
  });

  $(".client_main_li").on('mouseleave', function () {
    $(this).children(".client_slide").stop().fadeOut(300);
  });

  //小程序优势
  $(".advantage_nav span").on('click', function () {
    var dex = $(this).index();
    $(this).addClass("advantage_nav_hover").siblings("span").removeClass("advantage_nav_hover");
    console.log(dex);

    $(".advantage_main_li").removeClass("show");
    $(".advantage_main_li").eq(dex).addClass("show");
    console.log("收到")
  });

  //转圈 recommend
 /*var zero=0;
  var time = self.setInterval(function () { 
    zero+=360;
    $(".recommend_ul_li img").css("transform","rotate("+ zero +"deg)");
    console.log(zero);
   },1000)*/
});