var $ex2 = null; //? jquery ready 외부 함수가 같이 사용할 변수
var count = 0;

$(document).ready(function(){
    $ex2 = $("#ex2");
    $ex2.html("<p>" + count + " - hi, hello </p>");
    $("#ex2append").click(appendCount);
    $("#ex2prepend").click(prependCount);
});
function appendCount(){
    count ++;
    $ex2.append("<p>" + count + " - hi, hello</p>"); // ? append는 대상안에 정순추가
}
function prependCount(){
    count --;
    $ex2.prepend("<p>" + count + " - hi, hello</p>"); //? prepend는 대상안에 역순추가
}