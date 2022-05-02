var music = document.getElementById("music");

$(document).ready(function() {
    $("#plancovary").hide().fadeIn(2000);
    $("p").hide().fadeIn(2000);
    $("#start").hide().fadeIn(2000);
});

// 按鈕特效轉換
$("#start").bind("touchstart mouseover", function() {
    $("#start").attr("src", "../assets/Start/buttonAfter.png");
});
$("#start").bind("touchend mouseout", function() {
    $("#start").attr("src", "../assets/Start/buttonBefore.png");
});

// 按鈕點擊後
$("#start").click(function() {
    localStorage.setItem("music_time", music.currentTime);
    $(location).attr("href", "./slip.html");
});
