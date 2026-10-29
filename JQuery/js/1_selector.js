$(document).ready(function(){
    colorSwap();
    $("#btnCheck").click(sayHello);
    $("#btnAddBorder").click(addBorder);
    // addBorder();
    // todo.
    $("#btnTextChange").click(textChange);
});
function colorSwap(){
    var $divs = $("div");
    $divs.css("color","#f00");
}
function sayHello(){
    alert("Hello?");
}
function addBorder(){
    $("#panel").css("border","5px dashed black");
    // $("#btnAddBorder").click(function(){
    //     $("#panel").css("border","5px dashed black");
    // });
}
function textChange(){
    $("#panel2").css({
        "font-size": "26px",
        "color":"green",
        "font-weight":"bold",
        "line-height":"32px"
    });
}