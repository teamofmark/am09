$(document).ready(function(){
    colorChange();
    $("#btnHello").click(sayHello);
    $("[id^='btnAdd']").click(addBorder);
    // $("#btnAddBorder2").click(addBorder);
});

function colorChange(){
    var $divs = $("div:not(#panel)"); //? 변수에 $를 붙히는건 선생님습관.
    $divs.css("color","#f00"); //? jquery css 함수로 스타일적용.
}
function sayHello(){
    alert('hello!');
}
function addBorder(){
    $("#panel").css("border","5px solid black");
}