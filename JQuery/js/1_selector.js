$(document).ready(function(){
    var $divs = $("div"); // ? js - document.querySelector("div");
    $divs.css("color","red"); // ? $divs.style.color = "red";
    
    // *case. 2
    $("#btnCheck").click(sayHello);
    // *case. 3
    $("#btnAddBorder").click(addBorder);
    // todo.
    $("#btnTextChange").click(textChange);
});
// *case. 2
function sayHello(){
    alert("안녕? 또왔니?");
}
// *case. 3
function addBorder(){
    $("#panel").css("border","5px solid black");
}

// todo
function textChange(){
    $("#panel2").css({
        "font-size": "25px",
        "color" : "green",
        "font-weight" : "bold"
    }); //? n개의 대상을 넣어야하는 경우
}