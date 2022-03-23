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

var userAgentInfo = navigator.userAgent; // 判斷手機版或電腦版
if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(userAgentInfo)) {
    // 效果
    $("#left").click(function(e) {
        let leftHref = $(".left").attr("href");
        localStorage.setItem("music_time", music.currentTime);
        if (leftHref === "") {
            e.preventDefault();
            $("#left").attr("src", "../assets/Color/leftAfter.png");
            $("#right").attr("src", "../assets/Color/rightBefore.png");
            $(".left").attr("href", "./3-1.html");
            $(".right").attr("href", "");
        }
    });
    $("#right").click(function(e) {
        let rightHref = $(".right").attr("href");
        localStorage.setItem("music_time", music.currentTime);
        if (rightHref === "") {
            e.preventDefault();
            $("#right").attr("src", "../assets/Color/rightAfter.png");
            $("#left").attr("src", "../assets/Color/leftBefore.png");
            $(".right").attr("href", "./3-2.html");
            $(".left").attr("href", "");
        }
    });
    
} else {
    // 效果
    $("#left").bind("mouseover", function() {
        $("#left").attr("src", "../assets/Color/leftAfter.png")
    });
    $("#left").bind("mouseout", function() {
        $("#left").attr("src", "../assets/Color/leftBefore.png")
    });
    $("#right").bind("mouseover", function() {
        $("#right").attr("src", "../assets/Color/rightAfter.png");
    });
    $("#right").bind("mouseout", function() {
        $("#right").attr("src", "../assets/Color/rightBefore.png");
    });
    // 點擊選項
    $(".left").click(function() {
        localStorage.setItem("music_time", music.currentTime);
        $(".left").attr("href", "./3-1.html");
    });
    $(".right").click(function() {
        localStorage.setItem("music_time", music.currentTime);
        $(".right").attr("href", "./3-2.html");
    });
}