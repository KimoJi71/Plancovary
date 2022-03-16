$(document).ready(function() {
    $("body").hide().fadeIn(2000);
});

// 畫面點擊後
$("body").click(function() {
    $(location).attr("href", "./1-1.html");
});