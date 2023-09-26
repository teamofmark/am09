var $ex2 = null;
var count = 0;

$(document).ready(function(){
    $ex2 = $("#ex2");
    $ex2.html("<p>" + count + "- th. paragraph </p>");
    $("#ex2prepend").click(prependCount);
    $("#ex2append").click(appendCount);
});
function prependCount(){
    count --;
    $ex2.prepend("<p>" + count + "- th. paragraph </p>"); //? prepend는 대상안에 역순추가
}
function appendCount(){
    count ++;
    $ex2.append("<p>" + count + "- th. paragraph </p>"); //? append는 대상안에 정순추가
}
// ! clone(), remove() - 같이공부하면 좋음.