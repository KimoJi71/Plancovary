var music = document.getElementById("music");
// 載入時
$(document).ready(function() {
    music.currentTime = localStorage.getItem("music_time");
    music.play();
    $(".textContainer").hide().fadeIn(2000);
    $(".options").hide();
    function type() {  
        $(".options").hide().fadeIn(2000);
        clearInterval(animate)
    }
    var animate = setInterval(type, 1000);
});

// 點擊選項
$(".left").click(function() {
    localStorage.setItem("music_time", music.currentTime);
    $(".left").attr("href", "./4-1.html");
});
$(".right").click(function() {
    localStorage.setItem("music_time", music.currentTime);
    $(".right").attr("href", "./4-2.html");
});