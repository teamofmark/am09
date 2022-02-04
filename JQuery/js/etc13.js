/*
    ? randomBanner (함수지향)
    ! 1. img의 공간은 두공간 (+@) (var)
    ! 2. 첫 이미지는 무조건 0번부터 시작(why? array.) (var)
    ! 3. setInterval ? (func,speed). (var)
    ! 4. 대상 -> img (2 => var) -> interVal Target / speed. = swap($bannerX, speed);
*/

var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var currentIndex = 0;
var speed = 0;
var $banner1 = null;
var $banner2 = null;

$(document).ready(function(){
    init();
    swap($banner1 , 1000);
    swap($banner2 , 3000);
});

function init(){
    $banner1 = $("#banner1");
    $banner2 = $("#banner2");
}
function swap(selector, speed){
    setInterval(function(){
        currentIndex = Math.floor(Math.random()*logos.length);

        var imgName = "images/" + logos[currentIndex];
        
        selector.attr("src", imgName);
    }, speed); 
}