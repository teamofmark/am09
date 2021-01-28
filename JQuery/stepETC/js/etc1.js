$(document).ready(function(){
    // *exp.1 대상 글자색 바꿔보기
    var $divs = $('div');
    $divs.css('color','#f00');

    // *exp.2 버튼 클릭으로 alert 띄워보기
    sayHello();

    // *exp.3 버튼 클릭으로 css변경하기
    addBorder();

    // todo.1 버튼(#btnTextChange)을 클릭하면 패널(#panel2)의 글자 크기와 색을 변경해보라.
    textChange();
});
function sayHello(){
    $("#btnCheck").click(function(){
        alert('Hello');
    });
}

function addBorder(){
    $("#btnAddBorder").click(function(){
        $("#panel").css('border','5px solid black');
    });
}

function textChange(){
    $("#btnTextChange").click(function(){
        $("#panel2").css({
            "font-size" : "25px",
            "color" : "green"
        });
    });
}