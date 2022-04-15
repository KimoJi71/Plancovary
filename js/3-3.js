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
$(".topLeft").click(function() {
    window.sessionStorage.setItem("factor", "不明的異世界生物");
    localStorage.setItem("music_time", music.currentTime);
    $(".topLeft").attr("href", "./end.html");
});
$(".topRight").click(function() {
    window.sessionStorage.setItem("factor", "被濫砍的神木");
    localStorage.setItem("music_time", music.currentTime);
    $(".topRight").attr("href", "./end.html");
});
$(".bottomLeft").click(function() {
    window.sessionStorage.setItem("factor", "神社的遺址");
    localStorage.setItem("music_time", music.currentTime);
    $(".bottomLeft").attr("href", "./end.html");
});
$(".bottomRight").click(function() {
    window.sessionStorage.setItem("factor", "受傷的小動物");
    localStorage.setItem("music_time", music.currentTime);
    $(".bottomRight").attr("href", "./end.html");
});

// 過場圖片點擊
$("#slip").click(function() {
    localStorage.setItem("music_time", music.currentTime);
    $(location).attr("href", "./3-3.html");
});