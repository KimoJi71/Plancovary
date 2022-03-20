// 載入時
$(document).ready(function() {
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
    $("#topLeft").click(function(e) {
        let topLeftHref = $(".topLeft").attr("href");
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
    $("#topRight").click(function(e) {
        let topRightHref = $(".topRight").attr("href");
        if (topRightHref === "") {
            e.preventDefault();
            $("#topRight").attr("src", "../assets/Forest/optionTwoAfter.png");
            $("#topLeft").attr("src", "../assets/Forest/optionOneBefore.png");
            $("#bottomLeft").attr("src", "../assets/Forest/optionThreeBefore.png");
            $("#bottomRight").attr("src", "../assets/Forest/optionFourBefore.png");
            $(".topRight").attr("href", "./end.html");
            $(".topLeft").attr("href", "");
            $(".bottomLeft").attr("href", "");
            $(".bottomRight").attr("href", "");

            window.sessionStorage.setItem("factor", "被濫砍的神木");
        }
    });
    $("#bottomLeft").click(function(e) {
        let bottomLeftHref = $(".bottomLeft").attr("href");
        if (bottomLeftHref === "") {
            e.preventDefault();
            $("#bottomLeft").attr("src", "../assets/Forest/optionThreeAfter.png");
            $("#topLeft").attr("src", "../assets/Forest/optionOneBefore.png");
            $("#topRight").attr("src", "../assets/Forest/optionTwoBefore.png");
            $("#bottomRight").attr("src", "../assets/Forest/optionFourBefore.png");
            $(".bottomLeft").attr("href", "./end.html");
            $(".topLeft").attr("href", "");
            $(".topRight").attr("href", "");
            $(".bottomRight").attr("href", "");

            window.sessionStorage.setItem("factor", "神社的遺址");
        }
    });
    $("#bottomRight").click(function(e) {
        let bottomRightHref = $(".bottomRight").attr("href");
        if (bottomRightHref === "") {
            e.preventDefault();
            $("#bottomRight").attr("src", "../assets/Forest/optionFourAfter.png");
            $("#topLeft").attr("src", "../assets/Forest/optionOneBefore.png");
            $("#topRight").attr("src", "../assets/Forest/optionTwoBefore.png");
            $("#bottomLeft").attr("src", "../assets/Forest/optionThreeBefore.png");
            $(".bottomRight").attr("href", "./end.html");
            $(".topLeft").attr("href", "");
            $(".topRight").attr("href", "");
            $(".bottomLeft").attr("href", "");

            window.sessionStorage.setItem("factor", "受傷的小動物");
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
        $(".topLeft").attr("href", "./end.html");
    });
    $(".topRight").click(function() {
        window.sessionStorage.setItem("factor", "被濫砍的神木");
        $(".topRight").attr("href", "./end.html");
    });
    $(".bottomLeft").click(function() {
        window.sessionStorage.setItem("factor", "神社的遺址");
        $(".bottomLeft").attr("href", "./end.html");
    });
    $(".bottomRight").click(function() {
        window.sessionStorage.setItem("factor", "受傷的小動物");
        $(".bottomRight").attr("href", "./end.html");
    });
}

// 過場圖片點擊
$("#slip").click(function() {
    $(location).attr("href", "./3-3.html");
});