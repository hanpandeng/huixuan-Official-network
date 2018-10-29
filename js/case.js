$(function () {

    //行业案例切换
    $(".guild_top div").on('click', function () {
        var index = $(this).index();
        console.log(index);
        $(".guild_top div").children("h4").css("color", "#999").siblings("p").css("border-bottom-color", "#ccc").children("span").css("opacity", "0");
        $(this).children("h4").css("color", "#ffd800").siblings("p").css("border-bottom-color", "#ffd800").children("span").css("opacity", "1");
        $(".guild_main .toggle").removeClass("block");
        $(".guild_main .toggle").eq(index).addClass("block");
        console.log(index)
    });

    //标签背景色
    var bgr = ["#23aaff", "#00f0a4", "#ffd200", "#ff3560", "#b257ff", "#00deff", "#ff903e", "#ff4dba", "#6876ff"];

    var timing = setInterval(function () {
        let span = $(".label span");
        let li = $(".guild_main_one_main_left li");
        for (let s = 0; s < li.length; s++) {
            for (let i = 0; i < span.length; i++) {
                $(".label").eq(s).children("span").eq(i).css("background", bgr[i])
            }
        }
        clearInterval(timing);
    }, 1);


})