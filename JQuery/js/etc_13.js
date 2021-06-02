var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var currentIndex = 0;
var speed = 0;
var $banner1 = null;
var $banner2 = null;

$(document).ready(function(){
    init();
    swap($banner1, 1000); //? 배너전환 기능에 대상과 속도 매개변수로 전달.
    swap($banner2, 3000);
});

function init(){
    $banner1 = $("#banner1");
    $banner2 = $("#banner2");
}
function swap(selector, speed){  //? 매개변수 전달받음.
    setInterval(function(){
        var imgName = "images/" + logos[currentIndex];
        currentIndex = Math.floor(Math.random()*logos.length); //? random 배열값 잡아오기.
        selector.attr("src", imgName);//? 전달받은 대상 매개변수로 etc11과 동일한 로직수행.
    }, speed);//? 전달받은 속도 매개변수로 속도설정.
}