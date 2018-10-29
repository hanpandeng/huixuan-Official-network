$(function () {

  //左侧导航栏下拉显示隐藏
  $(".nav_left_top").on("click", function () {
    $(".nav_left_top img").toggleClass("rotate");
    $(".nav_left_bottom").fadeToggle(500);
  });

  /*$(".nav_left_bottom").on("click", function () {
    $(".nav_left_top img").removeClass("rotate");
    $(this).fadeToggle(500);
  });*/

  //行业案例
  $(".mouseenter").mouseenter(function () {
    console.log("下来");
    $(".case").stop().slideDown(500);
  });
  $(".box").mouseleave(function () {
    console.log("上去");
    $(".case").stop().slideUp(500);
  });

  //swiper
  var mySwiper = new Swiper('.swiper-container', {
    //x轴分页器
    direction: 'horizontal',
    //loop
    loop: true,
    //自动轮播时间
    autoplay: 5000,
    //抓手
    grabCursor: true,
    //分页器
    pagination: '.swiper-pagination',
    //人为滑动轮播后继续autoplay
    autoplayDisableOnInteraction: false,
    //滑动间隔
    speed: 1000,

  });

  //下拉列表高度
  var timing = setInterval(function () {
    var height = $(".swiper-container").height();
    $(".nav_left_bottom").height(height);
    console.log("执行完成");
  }, 1)


})