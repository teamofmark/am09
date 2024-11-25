$(document).ready(function(){
    // case.1
    txtColorSwap();
    // case.2
    $("#btnCheck").click(sayHello);
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