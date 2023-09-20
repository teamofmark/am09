$(document).ready(function(){
    colorChange();
    $("#btnHello").click(sayHello);
});

function colorChange(){
    var $divs = $("div"); //? 변수에 $를 붙히는건 선생님습관.
    $divs.css("color","#f00"); //? jquery css 함수로 스타일적용.
}
function sayHello(){
    alert('hello!');
}