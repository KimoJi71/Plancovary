$(document).ready(function() {
    $("#question").hide().fadeIn(2000);
    $(".textContainer").hide().fadeIn(2000);
    $(".options").hide().fadeIn(2000);
});

// 圖片特效轉換
$("#left").bind("touchstart mouseover", function() {
    $("#left").attr("src", "../assets/Factory/optionOneAfter.png");
});
$("#left").bind("touchend mouseout", function() {
    $("#left").attr("src", "../assets/Factory/optionOneBefore.png");
});
$("#right").bind("touchstart mouseover", function() {
    $("#right").attr("src", "../assets/Factory/optionTwoAfter.png");
});
$("#right").bind("touchend mouseout", function() {
    $("#right").attr("src", "../assets/Factory/optionTwoBefore.png");
});

// 圖片點擊後
$("#left").click(function() {
    $(location).attr("href", "./4-1.html")
});
$("#right").click(function() {
    $(location).attr("href", "./4-2.html")
});