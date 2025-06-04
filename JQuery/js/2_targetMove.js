$(document).ready(function(){
    // case.1 x Axis 움직임
    $("#btnMoveCircle").click(moveCircle);
    // case.2 x,y Axis 움직임(value가져오기)
    detailMoveCircleExt();
    // case.3 방향키 조작으로 원 움직이기
    keyControl();
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
function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;

    $(document).keydown(function(e){
        console.log("입력한 키? : " + typeof(e.keyCode) + e.keyCode);
        // w(Ypos -) : 87, a(Xpos -) : 65, s(Ypos +) : 83,  d(Xpos +) : 68
        // w or a or s or 일 때만 -_-? 
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
        $circle.css("left",currentXpos);
        $circle.css("top",currentYpos);
    })
}