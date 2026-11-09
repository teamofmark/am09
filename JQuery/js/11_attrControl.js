var currentIndex = 0;
var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var $banner = null;

$(document).ready(function(){
    init();
    setInterval(swap,1000);
});
function init(){
    $banner = $(".banner");
}
function swap(){
    var imgName = "images/" + logos[currentIndex]; //? 이미지 경로 및 파일명 생성
    $banner.attr("src",imgName); //? src속성값에 경로 및 파일명 삽입
    currentIndex++; //? 이미지파일명탐색을 위한 배열선택 변수 증가
    reset(); //? 배열값을 넘어갈경우 다시 원상태로 돌리는 함수
}
function reset(){
    if(currentIndex == logos.length){
        currentIndex = 0;
    }
}