var $ex2 = null;
var count = 0;
$(document).ready(function(){
    $ex2 = $("#ex2");
    $ex2.html("<p>" + count + "- 번째, 문단 </p>");
    $("#ex2prepend").click(prependCount);
    $("#ex2append").click(appendCount);
});
function prependCount(){
    count --;
    $ex2.prepend("<p>" + count + "- 번째, 문단 </p>");
}
function appendCount(){
    count ++;
    $ex2.append("<p>" + count + "- 번째, 문단 </p>");
}