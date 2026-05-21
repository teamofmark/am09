/*
    JQuery - Library or FrameWork(Ajax)
    -> 기존 JS의 문법이 복잡하고 어렵고 길고... 이런부분을 화면개발선에서 간소화하기위해 태어남.
*/
$(document).ready(function(){
    // case.1
    justColor();
    // case.2
    $("#btnCheck").click(sayHello);
});
function justColor(){
    var $divs = $("div");
    $divs.css("color","#f00");
}
function sayHello(){
    alert('Hello!');
}