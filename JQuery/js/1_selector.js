$(document).ready(function(){
    case1Test();
    // case.2
    $("#btnCheck").click(sayHello);
    // case.3
    $("#btnAddBorder").click(addBorder);
    // todo
    $("#btnTextChange").click(textChange);

});
function case1Test(){
    var $divs = $("div");
    $divs.css("background-color","red");
}
function sayHello(){
    alert('안녕?');
}
function addBorder(){
    $("#panel").css("border","5px solid black");
}
function textChange(){
    // todo. 크기 - font-size / 굵기 - font-weight / 색상 - color
    $("#panel2").css({
        "font-size": "25px",
        "font-weight" : "bold",
        "color" : "white",
        "line-height" : "31px"
    });
}