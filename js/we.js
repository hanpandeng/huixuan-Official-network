$(function () {
    $(".nav_left_bottom").css("display", "none");


    //swiper
    var swiper = new Swiper('.swiper_container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
    });

    //选项卡
    $(".tab_top span").on('click', function () {
        let index = $(this).index();
        console.log(index);
        $(".tab_top span").css({
            "color": "#666",
            "background": "#e1e1e1"
        });
        $(this).css({
            "color": "#fff",
            "background": "#ffd800"
        })
        console.log("over");
        $(".tab_main .tab_main_children").removeClass("children_click");
        $(".tab_main .tab_main_children").eq(index).addClass("children_click");
        console.log("执行完毕")
    })



})