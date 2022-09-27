$(document).ready(function(){
    // *case.1
    var $divs = $("div");
    $divs.css("color","#f00");

    // *case.2
    $("#btnCheck").click(sayHello);

    // *case.3
    $("#btnAddBorder").click(addBorder);

    // todo.
    $("#btnTextChange").click(textChange);
});

function sayHello(){
    alert("Hello");
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
