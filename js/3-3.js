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
    $(".topLeft").click(function(e) {
        let topLeftHref = $(".topLeft").attr("href");
        localStorage.setItem("music_time", music.currentTime);
        if (topLeftHref === "") {
            e.preventDefault();
            $("#topLeft").attr("src", "../assets/Forest/optionOneAfter.png");
            $("#topRight").attr("src", "../assets/Forest/optionTwoBefore.png");
            $("#bottomLeft").attr("src", "../assets/Forest/optionThreeBefore.png");
            $("#bottomRight").attr("src", "../assets/Forest/optionFourBefore.png");
            $(".topLeft").attr("href", "./end.html");
            $(".topRight").attr("href", "");
            $(".bottomLeft").attr("href", "");
            $(".bottomRight").attr("href", "");

            window.sessionStorage.setItem("factor", "不明的異世界生物");
        }
    });
    $(".topRight").click(function(e) {
        let topRightHref = $(".topRight").attr("href");
        localStorage.setItem("music_time", music.currentTime);
        if (topRightHref === "") {
            e.preventDefault();
            $("#topLeft").attr("src", "../assets/Forest/optionOneBefore.png");
            $("#topRight").attr("src", "../assets/Forest/optionTwoAfter.png");
            $("#bottomLeft").attr("src", "../assets/Forest/optionThreeBefore.png");
            $("#bottomRight").attr("src", "../assets/Forest/optionFourBefore.png");
            $(".topLeft").attr("href", "");
            $(".topRight").attr("href", "./end.html");
            $(".bottomLeft").attr("href", "");
            $(".bottomRight").attr("href", "");

            window.sessionStorage.setItem("factor", "虛弱的螢火蟲");
        }
    });
    $(".bottomLeft").click(function(e) {
        let bottomLeftHref = $(".bottomLeft").attr("href");
        localStorage.setItem("music_time", music.currentTime);
        if (bottomLeftHref === "") {
            e.preventDefault();
            $("#topLeft").attr("src", "../assets/Forest/optionOneBefore.png");
            $("#topRight").attr("src", "../assets/Forest/optionTwoBefore.png");
            $("#bottomLeft").attr("src", "../assets/Forest/optionThreeAfter.png");
            $("#bottomRight").attr("src", "../assets/Forest/optionFourBefore.png");
            $(".topLeft").attr("href", "");
            $(".topRight").attr("href", "");
            $(".bottomLeft").attr("href", "./end.html");
            $(".bottomRight").attr("href", "");

            window.sessionStorage.setItem("factor", "神社的遺址");
        }
    });
    $(".bottomRight").click(function(e) {
        let bottomRightHref = $(".bottomRight").attr("href");
        localStorage.setItem("music_time", music.currentTime);
        if (bottomRightHref === "") {
            e.preventDefault();
            $("#topLeft").attr("src", "../assets/Forest/optionOneBefore.png");
            $("#topRight").attr("src", "../assets/Forest/optionTwoBefore.png");
            $("#bottomLeft").attr("src", "../assets/Forest/optionThreeBefore.png");
            $("#bottomRight").attr("src", "../assets/Forest/optionFourAfter.png");
            $(".topLeft").attr("href", "");
            $(".topRight").attr("href", "");
            $(".bottomLeft").attr("href", "");
            $(".bottomRight").attr("href", "./end.html");

            window.sessionStorage.setItem("factor", "遠方的求救訊號");
        }
    });
} else {
    // 效果
    $("#topLeft").bind("mouseover", function() {
        $("#topLeft").attr("src", "../assets/Forest/optionOneAfter.png")
    });
    $("#topLeft").bind("mouseout", function() {
        $("#topLeft").attr("src", "../assets/Forest/optionOneBefore.png")
    });
    $("#topRight").bind("mouseover", function() {
        $("#topRight").attr("src", "../assets/Forest/optionTwoAfter.png")
    });
    $("#topRight").bind("mouseout", function() {
        $("#topRight").attr("src", "../assets/Forest/optionTwoBefore.png")
    });
    $("#bottomLeft").bind("mouseover", function() {
        $("#bottomLeft").attr("src", "../assets/Forest/optionThreeAfter.png")
    });
    $("#bottomLeft").bind("mouseout", function() {
        $("#bottomLeft").attr("src", "../assets/Forest/optionThreeBefore.png")
    });
    $("#bottomRight").bind("mouseover", function() {
        $("#bottomRight").attr("src", "../assets/Forest/optionFourAfter.png")
    });
    $("#bottomRight").bind("mouseout", function() {
        $("#bottomRight").attr("src", "../assets/Forest/optionFourBefore.png")
    });
    // 點擊選項
    $(".topLeft").click(function() {
        window.sessionStorage.setItem("factor", "不明的異世界生物");
        localStorage.setItem("music_time", music.currentTime);
        $(".topLeft").attr("href", "./end.html");
    });
    $(".topRight").click(function() {
        window.sessionStorage.setItem("factor", "虛弱的螢火蟲");
        localStorage.setItem("music_time", music.currentTime);
        $(".topRight").attr("href", "./end.html");
    });
    $(".bottomLeft").click(function() {
        window.sessionStorage.setItem("factor", "神社的遺址");
        localStorage.setItem("music_time", music.currentTime);
        $(".bottomLeft").attr("href", "./end.html");
    });
    $(".bottomRight").click(function() {
        window.sessionStorage.setItem("factor", "遠方的求救訊號");
        localStorage.setItem("music_time", music.currentTime);
        $(".bottomRight").attr("href", "./end.html");
    });
};

// 過場圖片點擊
$("#slip").click(function() {
    localStorage.setItem("music_time", music.currentTime);
    $(location).attr("href", "./3-3.html");
});