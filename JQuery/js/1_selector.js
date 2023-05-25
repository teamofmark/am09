$(document).ready(function(){
    var $divs = $("div"); // ? js - document.querySelector("div");
    $divs.css("color","red"); // ? $divs.style.color = "red";
    
    // *case. 2
    $("#btnCheck").click(sayHello);
});
// *case. 2
function sayHello(){
    alert("안녕? 또왔니?");
}