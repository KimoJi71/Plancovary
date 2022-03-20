// 載入時
$(document).ready(function() {
    $(".textContainer").hide().fadeIn(2000);
    $(".options").hide();
    function type() {  
        $(".options").hide().fadeIn(2000);
        clearInterval(animate)
    }
    var animate = setInterval(type, 1000);
});

var userAgentInfo = navigator.userAgent; // 判斷手機版或電腦版
if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(userAgentInfo)) {
    // 效果
    $("#left").click(function(e) {
        let leftHref = $(".left").attr("href");
        if (leftHref === "") {
            e.preventDefault();
            $("#left").attr("src", "../assets/Factory/optionOneAfter.png");
            $("#right").attr("src", "../assets/Factory/optionTwoBefore.png");
            $(".left").attr("href", "./4-1.html");
            $(".right").attr("href", "");
        }
    });
    $("#right").click(function(e) {
        let rightHref = $(".right").attr("href");
        if (rightHref === "") {
            e.preventDefault();
            $("#right").attr("src", "../assets/Factory/optionTwoAfter.png");
            $("#left").attr("src", "../assets/Factory/optionOneBefore.png");
            $(".right").attr("href", "./4-2.html");
            $(".left").attr("href", "");
        }
    });
    
} else {
    // 效果
    $("#left").bind("mouseover", function() {
        $("#left").attr("src", "../assets/Factory/optionOneAfter.png")
    });
    $("#left").bind("mouseout", function() {
        $("#left").attr("src", "../assets/Factory/optionOneBefore.png")
    });
    $("#right").bind("mouseover", function() {
        $("#right").attr("src", "../assets/Factory/optionTwoAfter.png");
    });
    $("#right").bind("mouseout", function() {
        $("#right").attr("src", "../assets/Factory/optionTwoBefore.png");
    });
    // 點擊選項
    $(".left").click(function() {
        $(".left").attr("href", "./4-1.html");
    });
    $(".right").click(function() {
        $(".right").attr("href", "./4-2.html");
    });
}