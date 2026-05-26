/*
    JQuery - Library or FrameWork(Ajax)
    -> 기존 JS의 문법이 복잡하고 어렵고 길고... 이런부분을 화면개발선에서 간소화하기위해 태어남.
*/
$(document).ready(function(){
    // case.1
    justColor();
    // case.2
    $("#btnCheck").click(sayHello);
    // case.3
    $("#btnAddBorder").click(addBorder);
    // todo
    $("#btnTextChange").click(textChange);
});
function justColor(){
    var $divs = $("div");
    $divs.css("color","#f00");
}
function sayHello(){
    alert('Hello!');
}
function addBorder(){
   $("#panel").css("border","5px solid black"); 
}
function textChange(){
    // todo 글자 크기(25px), 색상(green),굵기(bold),줄간(31px) 변경
    /*
    $("#panel2").css("font-size","25px");
    $("#panel2").css("color","green");
    $("#panel2").css("font-weight","bold");
    $("#panel2").css("line-height","31px");
    */
    $("#panel2").css({
        "font-size" : "25px",
        "color" : "green",
        "font-weight" : "bold",
        "line-height" : "31px" 
    });
}