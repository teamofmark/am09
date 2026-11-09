// todo. 1 일정 시간에 한번 씩 배열 이미지로 전환.
// todo. 2 이미지 swap함수는 한 개만 작성해야 함.
// todo. 3 무한롤링이 되어야 하나 각기 다른 시간으로 작동.

var currentIndex1 = 0; //? 각각의 배열 번호 변수.
var currentIndex2 = 0; //? 각각의 배열 번호 변수.
var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var $banner1 = null;
var $banner2 = null;
var speed = 0;  //? interval 시간변수
$(document).ready(function(){
    init();
    swap($banner1,1000,currentIndex1);
    swap($banner2,3000,currentIndex2);
});
function init(){
    $banner1 = $("#banner1");
    $banner2 = $("#banner2");
}
function swap(selector,speed,targetIndex){
    setInterval(function(){
        var imgName = "images/" + logos[targetIndex];
        targetIndex++;
        selector.attr("src",imgName);
        if(targetIndex >= logos.length){
            targetIndex = 0;
        }
    },speed);
}