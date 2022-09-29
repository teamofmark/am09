$(document).ready(function(){
    // *case.1 x축으로 움직이기
    $("#btnMoveCircle").click(moveCircle);
    // todo. x,y축으로 움직이기
    // $("#btnDetailMove").click(detailMoveCircle);
    // $("#btnDetailMove").click(circleEvent);
    detailMoveCircleExt();
    keyControl();
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

// function detailMoveCircle(){
//     var $circle = $(".circleDetail");
//     var xpos = $("#xpos").val();
//     var ypos = $("#ypos").val();
    
//     xpos = parseInt(xpos);
//     ypos = parseInt(ypos);

//     if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
//         alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
//     }else{
//         $circle.css({
//             "left" : xpos,
//             "top" : ypos
//         });
//     }
// }
// function circleEvent(){
//     var xpos = $("#xpos").val(); //? 해당 아이디의 value를 가져오기
//     var ypos = $("#ypos").val(); //? 해당 아이디의 value를 가져오기
//     xpos = parseInt(xpos);
//     ypos = parseInt(ypos);
//     circleMoveCommand(xpos,ypos); //? circleMoveCommand 함수를 실행하라. 단 xpos, ypos 형변환된 인자를 넣어라.
// }
// function circleMoveCommand(xpos,ypos){
//     var $circle = $(".circleDetail");
//     if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
//         alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
//     }else{
//         $circle.css({
//             "left" : xpos,
//             "top" : ypos
//         });
//     }
// }

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
function circleMovCommand(xpos,ypos){
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
        alert('잘못되었다.');
    }else{
        $circle.css({
            "left" : xpos,
            "top" : ypos
        })
    }
}

function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;

    $(document).keydown(function(e){
        console.log("입력한 키 코드" + e.keyCode);
        // ? w(top) : 87, d(right) :  68, s(bottom) : 83, a(left) : 65
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
        // todo. 원이 박스를 벗어나지 못하게 가두기

        $circle.css("left", currentXpos);
        $circle.css("top", currentYpos);
    });
}
