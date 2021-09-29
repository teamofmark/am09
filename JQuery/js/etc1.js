$(document).ready(function(){
    // *case.1 
    var $divs = $("div");
    $divs.css("color","#f00");

    // *case.2
    $("#btnCheck").click(sayHello);

    // *case.3
    $("#btnAddBorder").click(addBorder);

    // todo
    $("#btnTextChange").click(textChange);
});
// *case.2
function sayHello(){
    alert('hello');
}
// *case.3
function addBorder(){
    $("#panel").css("border","5px solid black");
}
// todo
function textChange(){
    $("#panel2").css({ //? 선택자에서 nth 사용시 주의사항. odd와 even이 반대.
        'font-size' : '25px',
        'color' : 'green',
        'font-weight' : 'bold',
        'border': '5px solid green'
    });
}