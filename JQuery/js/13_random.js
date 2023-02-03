var currentIndex = 0;
var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var $banner1 = null;
var $banner2 = null;
var speed = 0;

$(document).ready(function(){
    init();
    swap($banner1,1000);
    swap($banner2,3000);
});
function init(){
    $banner1 = $("#banner1");
    $banner2 = $("#banner2");
}
function swap(selector, speed){
    setInterval(function(){
        currentIndex = Math.floor(Math.random()*logos.length);
        console.log(currentIndex);
        // * random()* x -> floor 로감싸면 x를 절대 넘어가지 못하는 random
        // * random()* x -> ceil 로감싸면 x가 나올수도 있는 random

        /*
        ! random method : 매개변수 = 1 -> return : 0 - 1 사이의 실수값.
        ? 1. 0-1의 범위에서 0과 1을 포함하지 않는 소수를 random하게 return.(0.111111111 ~ 0.999999999)
        ? 2. 예를들어 random에서 1.9938을 리턴하면 -> 1. 
        * 0 ~ 7 : length 8. -> 0~8사이의 0과 8을 포함하지 않는 소수를 반환. -> floor를 만나 내림.
        
            ? Math - class
            ! floor - 매개변수로 = number: 실수값. -> return: 내림한 정수값 (10.2 -> 10); 
            ! ceil - 매개변수로 = number: 실수값. -> return : 올림한 정수값 (10.2 -> 11);
            * Math.ceil(postNumb/10);
            ? 매개변수로 전달받은 게시글수(105)를 한페이지당 출력값인 (10)으로 나누어 올림값으로 return
            ? -> 105 / 10 = 10.5 -> 11을 반환. -> pager: 1,2,3,4,5,6,7,8,9,10,11
        */
        var imgName = "images/" + logos[currentIndex];
        selector.attr("src",imgName);
    }, speed);
}

// var $numb = null;
// function randomNumb(){
//     $numb = $("#numb");
//     setInterval(showRandom, 500);
// }
// function showRandom(){
//     var value = Math.ceil(Math.random()*50)+50;
//     $numb.text(value);
// }
// ?random * 50이 되었을 때 random에서 0.9938을 return -> *50 -> 49.69 -> parseInt(49)+50 / floor(49)+50 / ceil(50)+50