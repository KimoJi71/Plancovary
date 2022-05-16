var music = document.getElementById("music");
// 載入時
$(document).ready(function() {
    music.currentTime = localStorage.getItem("music_time");
    music.play();
    $("body").hide().fadeIn(1500);
});

const portfolio = [
    "https://www.behance.net/gallery/140851267/-Interior-design",
    "https://www.behance.net/gallery/143038681/Umbaglla",
    "https://www.behance.net/gallery/141593857/_",
    "https://www.behance.net/gallery/141410163/_",
    "https://www.behance.net/gallery/140810113/Dou-Dou-Yi",
    "https://www.behance.net/gallery/140840743/Neverland",
    "https://www.behance.net/gallery/141497207/-Warm-up-for-Life-",
    "https://www.behance.net/gallery/141467437/-Sensevolution",
    "https://www.behance.net/gallery/142958437/E-share",
    "https://www.behance.net/gallery/140847043/_",
    "https://www.behance.net/gallery/140826599/Violet-Ma_Yodex",
    "https://www.behance.net/gallery/141714159/_",
    "https://www.behance.net/gallery/141674577/B-care",
    "https://www.behance.net/gallery/141652647/One-Cut",
    "https://www.behance.net/gallery/140566177/WHEEHAB",
    "https://www.behance.net/gallery/140767553/Quicart",
    "https://www.behance.net/gallery/141733491/G-WARNING-"
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