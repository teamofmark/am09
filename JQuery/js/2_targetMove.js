$(document).ready(function(){
    // case.1 x Axis 움직임
    $("#btnMoveCircle").click(moveCircle);
    // case.2 x,y Axis 움직임(value가져오기)
    detailMoveCircleExt();
});
function moveCircle(){
    var $circle = $(".circle"); //? init - 처리해야하는 프로그래밍의 대상(들)을 선언 및 초기화
    var xpos = prompt("0 부터 380이하의 숫자만 입력하세요."); //? dataType ? : string
    xpos = parseInt(xpos);
    
    if(xpos >= 0 && xpos <= 380){
        $circle.css("left",xpos);
    }else{
        alert("잘못된 수치 입니다.");
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
    var xpos = $("#xpos").val(); //? .value() -> Nope! - js꺼
    var ypos = $("#ypos").val();
    // console.log("dataType : " + typeof(xpos));
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    circleMovCommand(xpos,ypos); //? 판단 및 출력 
}
function circleMovCommand(xpos,ypos){
    if(xpos < 0 || xpos > 380 || ypos < 0 || ypos > 380){ //? 오류를 잡겠다 - xpos와 ypos값이 0보다 적거나 380보다 클 때
        alert("잘못된 수치입니다.");
    }else{
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }
}