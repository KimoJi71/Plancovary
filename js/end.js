// 按鈕點擊後
$("body").click(function() {
    let factor = window.sessionStorage.getItem("factor");
    if (factor === "不明的異世界生物" || factor === "宇宙的粒子") {
        $(location).attr("href", "./widsom.html");
    }
    if (factor === "神社的遺址" || factor === "滑落的雨滴") {
        $(location).attr("href", "./history.html");
    }
    if (factor === "被濫砍的神木" || factor === "遠方的警示燈") {
        $(location).attr("href", "./environment.html");
    }
    if (factor === "受傷的小動物" || factor === "受傷的血痕") {
        $(location).attr("href", "./weakness.html");
    }
});
