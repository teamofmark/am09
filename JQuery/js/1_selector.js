$(document).ready(function(){
    textColor();
    $("#btnHello").click(sayHello);
    $("#btnAddBorder").click(addBorder);
    $("#btnTextChange").click(textChange);
});
function textColor(){
    var $divs = $("div");
    $divs.css("color","#f00"); 
}
function sayHello(){
    alert('hello');
}
function addBorder(){
    $("#panel").css("border","5px solid black");
}
function textChange(){
    $("#panel2").css({
        "font-size" : "25px",
        "color" : "green",
        "font-weight" : "bold"
    });
}