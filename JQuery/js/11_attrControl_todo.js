/*
    1. n개의 image 출력공간에 순차적 image 전환.
    2. 전환시간은 개별설정이 가능하게.
    3. 무한순환(마지막번째 image -> 0번째 image)
*/
var currentIndex1 = 0;
var currentIndex2 = 0;
var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var speed = 0;
var $banner1 = null;
var $banner2 = null;

$(document).ready(function(){
    init();
    swap($banner1, 1000, currentIndex1); //? 변경할 대상, 전환속도, 배열번호
    swap($banner2, 3000, currentIndex2);
});
function init(){
    $banner1 = $("#banner1");
    $banner2 = $("#banner2");
}
function swap(selector, speed, targetIndex){
    setInterval(function(){
        var imgName = "images/" + logos[targetIndex];// ? image 조합
        targetIndex ++;
        selector.attr("src", imgName);
        if(targetIndex >= logos.length){
            targetIndex = 0;
        }
    },speed);
}