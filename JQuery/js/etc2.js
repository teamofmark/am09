$(document).ready(function(){
    //*case. 1 원 움직이기
    $("#btnMoveCircle").click(moveCircle); 

    // *case. 2 원 움직이기 (detail)
    detailMoveCircle();

    // *case. 3 w,a,s,d 조작
    keyControl();
});

function moveCircle(){
    var $circle = $(".circle");
    var xpos = window.prompt("0부터 380이하의 숫자만 입력하세요.");
    xpos = parseInt(xpos);

    if(xpos >= 0 && xpos <= 380){
        $circle.css("left", xpos);
    }else{
        alert("잘못된 수치입니다.");
    }

}

function detailMoveCircle(){
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
    circleMoveCommand(xpos, ypos);
}
function circleMoveCommand(xpos, ypos){
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
        console.log('입력한 키 코드' + e.keyCode);
        //  todo. w,a,s,d keycode를 구하고 position 좌표인 left, top을 입력해서 원을 움직이게 만들기.

        switch(e.keyCode){
            case 65:
                currentXpos -= range;
            break;

            case 87:
                currentYpos -= range;
            break;

            case 68:
                currentXpos += range;
            break;

            case 83:
                currentYpos += range;
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
        $circle.css("left", currentXpos);
        $circle.css("top", currentYpos);
    });
}
