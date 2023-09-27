var currentIndex = 0; //? 배열 선택 변수 초기화
var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"]; //? 이미지 파일 배열
// ! array -> array[index] ex> logos[0] = logo_01.jpg, logos[1] = logo_02.jpg...
var $banner = null; //? jquery banner 대상 변수 초기화

$(document).ready(function(){
    init(); //? jquery 대상변수선언
    setInterval(swap,1000); //? 배너전환 기능을 setInterval 함수로 수행.
});

function init(){
    $banner = $(".banner");
}
function swap(){
    var imgName = "images/"+ logos[currentIndex]; //? 이미지 경로 및 파일명 로드.
    $banner.attr("src", imgName); //? src 속성값에 경로 및 파일명 삽입.
    currentIndex ++; //? 다음 배열선택 변수로 증가.
    reset();
}
function reset(){
    if(currentIndex == logos.length){ //? 배열끝에 도달하면 배열선택 변수 초기화
        currentIndex = 0;
    }
}