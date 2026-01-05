$(document).ready(function(){
    // case.1 xAxis 움직임
    $("#btnMoveCircle").click(moveCircle);

    // case.2 x,yAxis 움직임
    // $("#btnDetailMove").click(detailMoveCircle);
    detailMoveCircleExt();
    keyControl();
});
function moveCircle(){
    var $circle = $(".circle");
    var xpos = prompt("0부터 380이하의 숫자만 입력하세요.");
    xpos = parseInt(xpos);
    if(xpos >= 0 && xpos <= 380){
        $circle.css("left",xpos);
    }else{
        alert("잘못된 수치입니다.");
    }
}
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    // val() -> value() : 앞의 대상의 value를 가져온다./ val(다른값) : 앞의 대상의 value를 다른값으로 바꾼다.
    // todo.1 위 입력 변수들 (xpos,ypos 형변환)
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    // todo.2 사각형을 벗어나지 못하도록 조건관계식짜기
    if(xpos <= 380 && ypos <= 380 && xpos >=0 && ypos>=0){
        // todo.3 원을 움직이거나 경고창을 작동 시키기
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }else{
        alert("모든 방향의 값은 0 ~ 380 이내여야 합니다.");
    }
}
// *exp.2ext function grouping
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
    circleMovCommand(xpos, ypos);
}
function circleMovCommand(xpos, ypos){
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
        alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
    }else{
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }
}
function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;
    $(document).keydown(function(e){
        // console.log("입력한 키 코드 : " + typeof(e.keyCode) + e.keyCode);
        // * w: 87(Ypos-), d: 68(Xpos+), s: 83(Ypos+), a: 65(Xpos-)
        switch(e.keyCode){
            case 87:
                currentYpos -= range;
                break;
            case 83:
                currentYpos += range;
                break;
            case 65:
                currentXpos -= range;
                break;
            case 68:
                currentXpos += range;
                break;
        }
        if(currentXpos < 0){
            currentXpos = 0;
        }
        if(currentXpos > 380){
            currentXpos = 380;
        }
        if(currentYpos < 0){
            currentYpos = 0;
        }
        if(currentYpos > 380){
            currentYpos = 380;
        }

        $circle.css("left",currentXpos);
        $circle.css("top",currentYpos);
    });
}