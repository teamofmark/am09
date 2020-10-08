$(document).ready(function(){
    // var $divs = $("div");
    // $divs.css({
    //     'color' : '#f00',
    //     'border' : '5px solid black'
    // }); //? 함수-html,css연관 ('attrName','attrValue');
    sayHello();
    textChange(changeStyle);
});

function sayHello(){
    $('#btnCheck').click(function(){
        alert('hello');
    });
}
function textChange(changeStyle){
    $("#btnTextChange").click(changeStyle);
}
function changeStyle(){
    $("#panel2").css({
        'font-size' : 25,
        'color' : 'green'
    });
}