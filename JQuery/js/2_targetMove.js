$(document).ready(function(){
    $("#btnMoveCircle").click(moveCircle);
    // $("#btnDetailMove").click(detailMoveCircle);
    detailMoveCircleExt();
});
// *case. 1 원 움직이기 (xAxis)
function moveCircle(){
    var $circle = $(".circle");
    var xpos = window.prompt("0 부터 380이하의 숫자만 입력하세요.");
    xpos = parseInt(xpos);
    // ?선언
    if(xpos >= 0 && xpos <= 380){
        $circle.css("left",xpos);
    }else{
        alert("잘못된 수치입니다.");
    }

}
// *case. 2 원 움직이기 (x,y Axis)
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    //! 대상.val() -> 대상의 값을 가져와라.
    //! 대상.val("값") -> 대상의 값을 변경해라.
    // console.log("xpos = " + typeof(xpos) + xpos + "/" + "ypos = " + typeof(ypos) + ypos);

    xpos = parseInt(xpos);
    ypos = parseInt(ypos);

    // todo. 조건식을 완성시켜 x,y축 둘다 0미만 or 380초과를 막고 정상 이동될수있게 처리.
    // ! 초과될시 "잘못된 수치입니다. 0 ~ 380 이내로만 입력하세요." 경고창.
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
        alert("잘못된 수치입니다. 0 ~ 380이내로 입력하세요.");
    }else{
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
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
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    circleMovCommand(xpos,ypos);
}
function circleMovCommand(xpos,ypos){
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
        alert("잘못된 수치입니다. 0 ~ 380이내로 입력하세요.");
    }else{
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }
}