var $ex2 = null;
var count = 0;

$(document).ready(function(){
    $ex2 = $("#ex2");
    $ex2.html("<p>" + count + "- hello. </p>"); //? tag를 body 에 삽입.
    $("#ex2append").click(appendCount);
    $("#ex2prepend").click(prependCount);
});
function appendCount(){
    count ++;
    $ex2.append("<p>" + count + "- hello. </p>"); //? 대상안에 정순(위->아래) 추가. 
}
function prependCount(){
    count --;
    $ex2.prepend("<p>" + count + "- hello. </p>"); //? 대상안에 역순(아래 -> 위) 추가.
}