$(document).ready(function(){
    $("#btnMoveCircle").click(moveCircle);
    // $("#btnDetailMove").click(detailMoveCircle);
    detailMoveCircleExt();
});
function moveCircle(){
    var $circle = $(".circle");
    var xpos = prompt("0부터 380이하의 숫자만 입력하세요.");
    xpos = parseInt(xpos);
    if(xpos>=0 && xpos<=380){
        $circle.css("left",xpos);
    }else{
        alert("잘못된 수치입니다.");
    }
}
// todo. x,y축 움직임 주기 : 380 제한
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    if(xpos <= 380 && ypos <= 380 && xpos >= 0 && ypos >= 0){
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }else{
        alert("잘못된 수치입니다. 0 ~ 380이내로 입력하세요.");
    }
}

function detailMoveCircleExt(){
    var $circle = null;
    circleInit();
    $("#btnDetailMove").click(circleEvent);
}
function circleInit(){
    $circle = $(".circleDetail");
}
function circleEvent(){
    var $circle = $(".circleDetail");
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    circleMovCommand(xpos,ypos);
}
function circleMovCommand(xpos, ypos){
    if(xpos <= 380 && ypos <= 380 && xpos >= 0 && ypos >= 0){
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }else{
        alert("잘못된 수치입니다. 0 ~ 380이내로 입력하세요.");
    }
}