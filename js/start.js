var music = document.getElementById("music");

$(document).ready(function() {
    $("#plancovary").hide().fadeIn(2000);
    $("p").hide().fadeIn(2000);
    $("#start").hide().fadeIn(2000);
});

var userAgentInfo = navigator.userAgent; // 判斷手機版或電腦版

// 按鈕特效轉換
$("#start").bind("touchstart mouseover", function() {
    $("#start").attr("src", "../assets/Start/buttonAfter.png");
});
$("#start").bind("touchend mouseout", function() {
    $("#start").attr("src", "../assets/Start/buttonBefore.png");
});

// 按鈕點擊後
if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(userAgentInfo)) {
    const start = document.getElementById("start");
    start.addEventListener("touchstart", e => {
        e.preventDefault();
        music.play();
    });
    start.addEventListener("click", e => {
        e.preventDefault();
        localStorage.setItem("music_time", music.currentTime);
        $(location).attr("href", "./slip.html");
    });
} else {
    $("#start").click(function() {
        localStorage.setItem("music_time", music.currentTime);
        $(location).attr("href", "./slip.html");
    });
}
