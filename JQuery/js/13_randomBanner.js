var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"]; //? 이미지 파일 배열
var currentIndex1 = 0;
var currentIndex2 = 1;
var speed = 0;
var $banner1 = null;
var $banner2 = null;

$(document).ready(function(){
    init();
    swap($banner1, 1000, currentIndex1); //? logo_01.jpg
    swap($banner2, 3000, currentIndex2); //? logo_02.jpg
});
function init(){
    $banner1 = $("#banner1");
    $banner2 = $("#banner2");
}
function swap(selector, speed, targetIndex){
    setInterval(function(){
        targetIndex = Math.floor(Math.random()*logos.length);
        console.log(targetIndex);
        // ! Math.floor -> 입력값이 실수일 경우 내림처리 (ex> 10.2 -> 10)
        // ! Math.ceil -> 입력값이 실수일 경우 올림처리 (ex> 10.2 -> 11)
        var imgName = "images/" + logos[targetIndex];
        selector.attr("src",imgName);
    }, speed);
}