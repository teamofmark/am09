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
        var imgName = "images/" + logos[targetIndex];
        targetIndex++;
        selector.attr("src", imgName);
        if(targetIndex >= logos.length){
            targetIndex = 0;
        }
    },speed);
}