$(document).ready(function(){
    // !case. 1
    var $divs = $("div");
    $divs.css("color","#f00");

    // ?case. 2
    $("#btnCheck").click(sayHello);

    // ?case. 3
    $("#btnAddBorder").click(addBorder);
});
// *case. 2
function sayHello(){
    alert('hello');
}
// *case. 3
function addBorder(){
    $("#panel").css("border","5px solid black");
}