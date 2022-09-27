$(document).ready(function(){
    // *case.1 x축으로 움직이기
    $("#btnMoveCircle").click(moveCircle);

    // todo. x,y축으로 움직이기
    // $("#btnDetailMove").click(detailMoveCircle);
    $("#btnDetailMove").click(circleEvent);

});

function moveCircle(){
    var $circle = $(".circle");
    var xpos = window.prompt("0~380숫자만입력.");
    xpos = parseInt(xpos);

    if(xpos >= 0 && xpos <= 380){
        $circle.css("left",xpos);
    }else{
        alert("잘못되었다.");
    }
}

function detailMoveCircle(){
    var $circle = $(".circleDetail");
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);

    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
        alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
    }else{
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }
}

function circleEvent(){


    circleMoveCommand(xpos,ypos);
}
function circleMoveCommand(xpos,ypos){

}