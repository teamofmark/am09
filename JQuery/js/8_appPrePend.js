// ? append - 추가 / prepend - 앞에추가
var $ex2 = null;
var count = 0;
$(document).ready(function(){
    $ex2 = $("#ex2");
    $ex2.html("<p>" + count + " - th. paragraph </p>");
    $("#ex2prepend").click(prependCount);
    $("#ex2append").click(appendCount);
    // ex> cartPanel - product list up.
});
function prependCount(){
    count --;
    $ex2.prepend("<p>" + count + " - th. paragraph </p>"); //? 대상안에 역순추가
}
function appendCount(){
    count ++;
    $ex2.append("<p>" + count + " - th. paragraph </p>");
}