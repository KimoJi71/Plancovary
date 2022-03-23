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
            var soundTwo = document.getElementById("soundTwo");
            soundTwo.pause();
            soundTwo.currentTime = 0;
            var soundOne = document.getElementById("soundOne");
            soundOne.play();
            $("#left").attr("src", "../assets/SoundFour/leftAfter.png");
            $("#right").attr("src", "../assets/SoundFour/rightBefore.png");
            $(".left").attr("href", "./end.html");
            $(".right").attr("href", "");

            window.sessionStorage.setItem("factor", "遠方的警示燈");
        }
    });
    $("#right").click(function(e) {
        let rightHref = $(".right").attr("href");
        localStorage.setItem("music_time", music.currentTime);
        if (rightHref === "") {
            e.preventDefault();
            var soundOne = document.getElementById("soundOne");
            soundOne.pause();
            soundOne.currentTime = 0;
            var soundTwo = document.getElementById("soundTwo");
            soundTwo.play();
            $("#right").attr("src", "../assets/SoundFour/rightAfter.png");
            $("#left").attr("src", "../assets/SoundFour/leftBefore.png");
            $(".right").attr("href", "./end.html");
            $(".left").attr("href", "");

            window.sessionStorage.setItem("factor", "受傷的血痕");
        }
    });
    
} else {
    // 效果
    $("#left").bind("mouseover", function() {
        var sound = document.getElementById("soundOne");
        sound.play();
        $("#left").attr("src", "../assets/SoundFour/leftAfter.png")
    });
    $("#left").bind("mouseout", function() {
        var sound = document.getElementById("soundOne");
        sound.pause();
        sound.currentTime = 0;
        $("#left").attr("src", "../assets/SoundFour/leftBefore.png")
    });
    $("#right").bind("mouseover", function() {
        var sound = document.getElementById("soundTwo");
        sound.play();
        $("#right").attr("src", "../assets/SoundFour/rightAfter.png");
    });
    $("#right").bind("mouseout", function() {
        var sound = document.getElementById("soundTwo");
        sound.pause();
        sound.currentTime = 0;
        $("#right").attr("src", "../assets/SoundFour/rightBefore.png");
    });
    // 點擊選項
    $(".left").click(function() {
        window.sessionStorage.setItem("factor", "遠方的警示燈");
        localStorage.setItem("music_time", music.currentTime);
        $(".left").attr("href", "./end.html");
    });
    $(".right").click(function() {
        window.sessionStorage.setItem("factor", "受傷的血痕");
        localStorage.setItem("music_time", music.currentTime);
        $(".right").attr("href", "./end.html");
    });
}