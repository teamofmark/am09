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
        targetIndex = Math.floor(Math.random()*logos.length);
        /*
            random - mathClass 
            ! random Method : 매개변수 = x, 리턴값 = 0 - 1 사이 소수(0,1을 포함하지는 못함)
            ? 1. 위 조건의 소수를 무작위 반환.(0.111111111~0.999999999)
            ? 2. 위 발생된 소수를 곱해주게되면 ex> random*50 -> 0,50을 제외한 무작위 소수가 발생됨.-> 예를들어 random 0.9938을 반환 -> *50 -> 49.69 -> 형변환 49
            ? 3. 그러니까 뒤에 곱해지는 숫자가 곧 최대 수치.
            ? 4. 필요에 의해 정수변환이 필요함.(절삭-parseInt,올림-ceil,내림-floor) 
        */
        var imgName = "images/" + logos[targetIndex];
        selector.attr("src",imgName);
    },speed);
}