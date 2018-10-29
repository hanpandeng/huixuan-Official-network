$(function () {
    $(".nav_left_bottom").css("display", "none");

    //选项卡
    $(".tab_header span").on('click', function () {
        var index = $(this).index();
        console.log(index);
        $(".tab_header span").removeClass("span_click");
        $(this).addClass("span_click");
        console.log("over");
        $(".tab_main").removeClass("block");
        $(".tab_main").eq(index).addClass("block");
    })
})