$(document).ready(function() {
    $("body").hide().fadeIn(2000);
    $(".textContainer").hide().fadeIn(2000);
    $(".options").hide().fadeIn(2000);
});

// 圖片特效轉換
$("#left").bind("touchstart mouseover", function() {
    $("#left").attr("src", "../assets/Space/leftAfter.png");
});
$("#left").bind("touchend mouseout", function() {
    $("#left").attr("src", "../assets/Space/leftBefore.png");
});
$("#right").bind("touchstart mouseover", function() {
    $("#right").attr("src", "../assets/Space/rightAfter.png");
});
$("#right").bind("touchend mouseout", function() {
    $("#right").attr("src", "../assets/Space/rightBefore.png");
});

// 圖片點擊後
$("#left").click(function() {
    $(location).attr("href", "./3-3_slip.html");
});
$("#right").click(function() {
    $(location).attr("href", "./3-4.html");
});