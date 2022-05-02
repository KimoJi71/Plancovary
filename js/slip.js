var music = document.getElementById("music");

$(document).ready(function() {
    music.currentTime = localStorage.getItem("music_time");
    music.play();
    $("body").hide().fadeIn(2000);
});

// 畫面點擊後
$("body").click(function() {
    localStorage.setItem("music_time", music.currentTime);
    $(location).attr("href", "./1-1.html");
});