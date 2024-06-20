$(document).ready(function(){
    // *case.1 xAxis 움직임
    $("#btnMoveCircle").click(moveCircle);

    // *case.2 x,yAxis 움직임
    // $("#btnDetailMove").click(detailMoveCircle);
    detailMoveCircleExt();

    // *case.3 keyBoard로 움직임
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
    var xpos = $("#xpos").val(); //? val() - 대상의 값을 불러오다, var(nextVal) - 대상의 값을 바꿔라
    var ypos = $("#ypos").val();

    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    // console.log("xpos = " + typeof(xpos) + xpos + "/" + "ypos = " + typeof(ypos) + ypos);

    // todo. 1번예제 참고하여 x,y축으로 입력받은 수치만큼 이동하되 한계수치를 넘어설 시 "잘못된 수치입니다." 출력
    if(xpos <= 380 && ypos <= 380 && xpos >= 0 && ypos >= 0){
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }else{
        alert("잘못된 수치입니다. 0 - 380 이내로 입력하시오.");
    }

}
// ? 함수구조분리 - 함수지향
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
    // todo. 이전 통합 구조와 반대의 조건식으로 구동하게 만들기
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){ //? x,y 값이 0보다 작거나 380보다 클때
        alert("잘못됐는데?");
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
        console.log(e.keyCode);
        // ? w (87 Ypos-) a (65 Xpos-) s (83 Ypos+) d (68 Xpos+)
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
        // todo. 집나가는 원 가두기
        if(currentXpos < 0){
            currentXpos = 0;
        }
        // (currentXpos > 0) ? $circle.css("left",currentXpos) : currentXpos = 0;
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