var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var currentIndex = 0;
var speed = 0;
var $banner1 = null;
var $banner2 = null;

$(document).ready(function(){
    init();
    swap($banner1, 1000); //? 배너전환 기능에 대상, 속도를 매개변수로 전달.
    swap($banner2, 3000);
});
function init(){
    $banner1 = $("#banner1");
    $banner2 = $("#banner2");
}
function swap(selector, speed){ //? 매개변수 전달받음.
    setInterval(function(){
        currentIndex = Math.floor(Math.random()*logos.length); //? random 배열값.
        /*
            ! random = 0 - 1 사이 실수 반환(0,1은 제외) 그래서 제한 값 * 수행하면
            ! random 정수산출(floor(내림처리),ceil(올림처리))
        */

        var imgName = "images/" + logos[currentIndex]; //? random index번호로 imgName 호출 및 생성
        selector.attr("src",imgName); //? src에 생성된 imgName 삽입 및 src value 교체.
    }, speed);
}