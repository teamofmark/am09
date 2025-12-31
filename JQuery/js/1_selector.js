$(document).ready(function(){
    // ! JQuery의 모든 html Tag's들을 선택하는 방식은 자체방식도 있지만 css Selector를 모두사용함.
    var $divs = $("div:first-of-type");
    $divs.css("color","#f00");

    // *case. 1
    $("#btnCheck").click(sayHello);
    // *case. 2
    $("#btnAddBorder").click(addBorder);
    // todo
    $("#btnTextChange").click(textChange);
});
function sayHello(){
    alert("hello?");
}
function addBorder(){
    $("#panel").css("border","5px solid black");
}
function textChange(){
    $("#panel2").css({
        "font-size" : "25px", //! or fontSize
        "color" : "green",
        "font-weight" : "bold",
        "line-height" : "31px"
    });
}