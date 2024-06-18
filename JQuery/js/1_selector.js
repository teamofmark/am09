$(document).ready(function(){
    // *case. 1
    colorChange();

    // *case. 2
    $("#btnCheck").click(sayHello);
});
function colorChange(){
    var $divs = $("div");
    $divs.css("color","#f00");
}

function sayHello(){
    alert('Hello');
}