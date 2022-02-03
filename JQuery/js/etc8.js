var $ex2 = null;
var count = 0;

$(document).ready(function(){
    $ex2 = $("#ex2");
    $ex2.html("<p>" + count + " - hi, hello </p>");
    $("#ex2append").click(appendCount);
    $("#ex2prepend").click(prependCount);
});
function appendCount(){
    count ++;
    $ex2.append("<p>" + count + " - hi, hello </p>"); //? 정순추가
}
function prependCount(){
    count --;
    $ex2.prepend("<p>" + count + " - hi, hello </p>"); //? 역순추가
}