$(function () {
    var bgr = ["#23aaff", "#00f0a4", "#ffd200", "#ff3560", "#b257ff", "#00deff", "#ff903e", "#ff4dba", "#6876ff"];

    var time = setInterval(function () {
        let label_parent = $(".label_parent").children();
        for (let i = 0; i < label_parent.length; i++) {
            label_parent.eq(i).css("background", bgr[i])
        }
        console.log(label_parent);
        clearInterval(time);
    }, 1)

})