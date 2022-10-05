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
    var imgName = "images/" + logos[currentIndex];//? path - server상에서 경로를 의미함.
    $banner.attr("src",imgName); 
    //? arguments - 1. attrName만 기재할 경우 = 해당 attrName의 value만 가져오라.
    //? 2. attrName,attrVal를 같이 입력할 경우 = 해당 attrName의 value를 바꿔라.
    currentIndex ++;
    reset();
}
function reset(){
    if(currentIndex == logos.length){
        currentIndex = 0;
    }
}