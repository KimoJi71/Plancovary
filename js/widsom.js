var music = document.getElementById("music");
// 載入時
$(document).ready(function() {
    music.currentTime = localStorage.getItem("music_time");
    music.play();
    $("body").hide().fadeIn(3500);
});
$("#seeMore").click(function() {
    console.log("Clicked!");
});