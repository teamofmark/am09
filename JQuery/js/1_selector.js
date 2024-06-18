$(document).ready(function(){
    // *case. 1
    colorChange();

    // *case. 2
    $("#btnCheck").click(sayHello);

    // *case. 3
    $("#btnAddBorder").click(addBorder);

    // todo
    $("#btnTextChange").click(textChange);
});
function colorChange(){
    var $divs = $("div");
    $divs.css("color","#f00");
}

function sayHello(){
    alert('Hello');
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