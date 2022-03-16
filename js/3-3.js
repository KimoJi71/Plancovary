$(document).ready(function() {
    $("#question").hide().fadeIn(2000);
    $(".textContainer").hide().fadeIn(2000);
    $(".options").hide().fadeIn(2000);
});

// 圖片特效轉換
$("#topOptions .left").bind("touchstart mouseover", function() {
    $("#topOptions .left").attr("src", "../assets/Forest/optionOneAfter.png");
});
$("#topOptions .left").bind("touchend mouseout", function() {
    $("#topOptions .left").attr("src", "../assets/Forest/optionOneBefore.png");
});
$("#topOptions .right").bind("touchstart mouseover", function() {
    $("#topOptions .right").attr("src", "../assets/Forest/optionTwoAfter.png");
});
$("#topOptions .right").bind("touchend mouseout", function() {
    $("#topOptions .right").attr("src", "../assets/Forest/optionTwoBefore.png");
});
$("#bottomOptions .left").bind("touchstart mouseover", function() {
    $("#bottomOptions .left").attr("src", "../assets/Forest/optionThreeAfter.png");
});
$("#bottomOptions .left").bind("touchend mouseout", function() {
    $("#bottomOptions .left").attr("src", "../assets/Forest/optionThreeBefore.png");
});
$("#bottomOptions .right").bind("touchstart mouseover", function() {
    $("#bottomOptions .right").attr("src", "../assets/Forest/optionFourAfter.png");
});
$("#bottomOptions .right").bind("touchend mouseout", function() {
    $("#bottomOptions .right").attr("src", "../assets/Forest/optionFourBefore.png");
});

// 圖片點擊後
$("#slip").click(function() {
    $(location).attr("href", "./3-3.html");
});
$(".left, .right").click(function() {
    $(location).attr("href", "./end.html");
});