var currentIndex1 = 0;
var currentIndex2 = 0;
var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var speed = 0;
var $banner1 = null;
var $banner2 = null;

$(document).ready(function(){
    init();
    swap($banner1,1000,currentIndex1);
    swap($banner2,3000,currentIndex2);
});
function init(){
    $banner1 = $("#banner1");
    $banner2 = $("#banner2");
}
function swap(selector, speed, targetIndex){
    setInterval(function(){
        targetIndex = Math.floor(Math.random()*logos.length);
        /*
            ! Math.floor method : 매개변수 = num : 실수값. 리턴값 = 입력값이 실수 인 경우 내림한 정수값 (ex 10.2 = 10)
            
            ! Math.ceil method : 매개변수 = num : 실수값. 리턴값 = 입력값이 실수 인 경우 올림한 정수값 (ex 10.2 = 11)
            ? Math.ceil(postNumb/10)
            ? 매개변수로 전달받은 게시글수(105)를 한페이지당 출력값인 (10)으로 나누어 올림값으로 리턴.
            ? 105 / 10 = 10.5 = 11.
        */
        /*
        ! random method : 매개변수 = x, 리턴값 = 0 - 1 사이 소수값.
        ? 1. random 메서드는 0 - 1 범위에서 0 과 1을 포함하지 않는 소수를 랜덤하게 리턴한다. (0.111111111~0.999999999)
        ? 2. parseInt는 안의 수를 소수에서 정수로 변환한다.
        ? 3. 예를 들어 random 에서 0.9938 을 리턴했다면 * 50 이 되면서 49.69 가 되고 parseInt로 인해 49가 된다. 
        */
        var imgName = "images/" + logos[targetIndex];
        selector.attr("src", imgName);
    },speed);
}