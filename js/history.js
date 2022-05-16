var music = document.getElementById("music");
// 載入時
$(document).ready(function() {
    music.currentTime = localStorage.getItem("music_time");
    music.play();
    $("body").hide().fadeIn(1500);
});

const portfolio = [
    "https://www.behance.net/gallery/141591085/-Four-beasts",
    "https://www.behance.net/gallery/140181073/-Xi-Zhan",
    "https://www.behance.net/gallery/141713263/-Especially-Long-Kiau%28Hengchun%29",
    "https://www.behance.net/gallery/141673067/_",
    "https://www.behance.net/gallery/141673407/KAMI",
    "https://www.behance.net/gallery/141448041/KA-TSI",
    "https://www.behance.net/gallery/141527749/_",
    "https://www.behance.net/gallery/141411945/Iristyle-",
    "https://www.behance.net/gallery/140805055/_",
    "https://www.behance.net/gallery/141683351/_"
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