var $ex2 = null;
var count = 0;

$(document).ready(function(){
    $ex2 = $("#ex2");
    $ex2.html("<p>" + count + " - th. paragraph </p>");
    $("#ex2prepend").click(prependCount);
    $("#ex2append").click(appendCount);
});
function prependCount(){
    count --;
    $ex2.prepend("<p>" + count + " - th. paragraph </p>");
}
function appendCount(){
    count ++;
    $ex2.append("<p>" + count + " - th. paragraph </p>");
}