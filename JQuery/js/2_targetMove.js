$(document).ready(function(){
    // *case.1
    $("#btnMoveCircle").click(moveCircle);

    // *case.2
    // detailMoveCircle();

    // *case.2-1
    detailMoveCircleExt();

    // *case.3 
    keyControl();
});

// *case.1
function moveCircle(){
    var $circle = $(".circle");
    var xpos = window.prompt("0부터 380이하의 숫자만 입력하세요.");
    // console.log(typeof(xpos) + xpos);

    xpos = parseInt(xpos);

    if(xpos >= 0 && xpos <= 380){
        $circle.css("left", xpos);
    }else{
        alert("잘못된 수치입니다. 다시 입력하세요.");
    }
}

// *case.2
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();

        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
            alert("잘못된 수치 입니다. 0 ~ 380 이내로 입력하세요.");
        }else{
            $circle.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
}

// *case.2-1 2번 case를 함수구조분리.
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

// *case.3 
function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;

    $(document).keydown(function(e){ //? e - 이벤트가 일어난 대상.
        console.log("입력한 키 코드" + e.keyCode);
        // * w: 87(위 = y축에서 -), d: 68(오른쪽 = x축에서 +), s: 83(아래 = y축에서 +), a: 65(왼쪽 = x축에서 -)

        switch(e.keyCode){
            case 87:
                currentYpos -= range;
                break;
            case 68:
                currentXpos += range;
                break;
            case 83:
                currentYpos += range;
                break;
            case 65:
                currentXpos -= range;
                break;
        }
        // todo. 사각형안에 원을 가두기.

        $circle.css("left",currentXpos);
        $circle.css("top",currentYpos); 
    });//? key가 눌리는 것을 감지. - keypad 마다 keyCode(숫자). 


}