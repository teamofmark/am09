$(document).ready(function(){
    // case.1
    txtColorSwap();
    // case.2
    $("#btnCheck").click(sayHello);
    // case.3
    $("#btnAddBorder").click(addBorder);
    // $("#btnAddBorder").click(function(){
    //     $("#panel").css("border","5px solid black");
    // });
    // todo
    $("#btnTextChange").click(textChange);
});
// case.1
function txtColorSwap(){
    var $divs = $("div");
    $divs.css("color","red");
}
// case.2
function sayHello(){
    alert('안녕?');
}
// case.3
function addBorder(){
    $("#panel").css("border","5px solid black");
}
// todo
function textChange(){
    $("#panel2").css({
        "font-size":"25px",
        "color":"green",
        "font-weight":"bold",
        "line-height":"31px"
    });
}