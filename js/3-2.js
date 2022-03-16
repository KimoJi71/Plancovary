$(document).ready(function() {
    $("body").hide().fadeIn(2000);
    $(".textContainer").hide().fadeIn(2000);
    $(".options").hide().fadeIn(2000);
});

// 圖片特效轉換
$("#left").bind("touchstart mouseover", function() {
    var sound = document.getElementById("soundOne");
    sound.play();
    $("#left").attr("src", "../assets/SoundTwo/leftAfter.png");
});
$("#left").bind("touchend mouseout", function() {
    var sound = document.getElementById("soundOne");
    sound.pause();
    sound.currentTime = 0;
    $("#left").attr("src", "../assets/SoundTwo/leftBefore.png");
});
$("#right").bind("touchstart mouseover", function() {
    var sound = document.getElementById("soundTwo");
    sound.play();
    $("#right").attr("src", "../assets/SoundTwo/rightAfter.png");
});
$("#right").bind("touchend mouseout", function() {
    var sound = document.getElementById("soundTwo");
    sound.pause();
    sound.currentTime = 0;
    $("#right").attr("src", "../assets/SoundTwo/rightBefore.png");
});

// 圖片點擊後
$("#left, #right").click(function() {
    $(location).attr("href", "./end.html");
});