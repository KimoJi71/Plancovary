var music = document.getElementById("music");
// 載入時
$(document).ready(function() {
    music.currentTime = localStorage.getItem("music_time");
    music.play();
    $("body").hide().fadeIn(1500);
});

const portfolio = [
    "https://www.behance.net/gallery/141741309/Koalas-Ark",
    "https://www.behance.net/gallery/140580807/_",
    "https://www.behance.net/gallery/140674099/_",
    "https://www.behance.net/gallery/141684031/_",
    "https://www.behance.net/gallery/140794719/Life-line"
];

var userAgentInfo = navigator.userAgent; // 判斷手機版或電腦版
if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(userAgentInfo)) {
    $("#more").click(function(e) {
        const randomNum = Math.floor(Math.random() * portfolio.length);
        let moreHref = $(".more").attr("href");
        if (moreHref === "") {
            e.preventDefault();
            $("#more").attr("src", "../assets/Widsom/moreAfter.png");
            $(".more").attr("href", portfolio[randomNum]).attr("target", "_blank")
        }
    });
} else {
    $("#more").bind("mouseover", function() {
        $("#more").attr("src", "../assets/Widsom/moreAfter.png");
    });
    $("#more").bind("mouseout", function() {
        $("#more").attr("src", "../assets/Widsom/moreBefore.png");
    });
    $("#more").click(function() {
        const randomNum = Math.floor(Math.random() * portfolio.length);
        window.open(portfolio[randomNum], '_blank');
    });
}