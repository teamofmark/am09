var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"]; //? img file data 배열
var currentIndex = 0; //? 배열 선택 변수(index) 초기화
var $banner = null; //? jquery banner 대상 초기화

$(document).ready(function(){
    init(); //?jquery 대상변수 선언.
    swap(); //? banner 전환기능 로드.
    setInterval(swap, 1000);
});

function init(){
    $banner = $(".banner"); //? jq 대상
}
function swap(){
    var imgName = "images/" + logos[currentIndex]; //? 이미지경로 및 파일명 로드
    $('img').attr('src', imgName); //? src 속성 값에 경로 및 파일명 삽입.(s+s = s)
    currentIndex ++; //? 다음 배열선택변수로 증가.(0,1,2,3,4...)
    reset();//? why? 7이 배열끝. 8이 되었을때는 그냥놔두면 엑박..
}
function reset(){
    if(currentIndex == logos.length){ //? 이미지 파일 갯수(8),(index : 0 - 7). 이 되었을때(? currentIndex)
        currentIndex = 0; //? currentIndex 0으로 다시 초기화.
    }
}