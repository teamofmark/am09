$(document).ready(function(){
    textColor();
    $("#btnHello").click(sayHello);
    $("#btnAddBorder").click(addBorder);
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