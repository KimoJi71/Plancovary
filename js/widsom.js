var music = document.getElementById("music");
// 載入時
$(document).ready(function() {
    music.currentTime = localStorage.getItem("music_time");
    music.play();
    $("body").hide().fadeIn(1500);
});

const portfolio = [
    "https://www.behance.net/gallery/143145751/color-per-",
    "https://www.behance.net/gallery/143202881/Vulcan",
    "https://www.behance.net/gallery/143179333/OB-SYSTEM-%28-Intelligence-parking-lot%29",
    "https://www.behance.net/gallery/140849777/SCOOKER",
    "https://www.behance.net/gallery/140478173/UN-Frozen",
    "https://www.behance.net/gallery/141475891/Lific-",
    "https://www.behance.net/gallery/141686403/SPACE480",
    "https://www.behance.net/gallery/141076879/Urban-W"
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
