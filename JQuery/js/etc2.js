$(document).ready(function(){
    moveCircle();
    // detailMoveCircle();
    detailMoveCircleExt();
    keyControl();
});

function moveCircle(){
    var $circle = $(".circle");
    $("#btnMoveCircle").click(function(){
        var xpos = window.prompt("0부터 380이하의 숫자만 입력하세요.");
        xpos = parseInt(xpos);

        if(xpos >= 0 && xpos <= 380){
            $circle.css('left',xpos);
        }else{
            alert("잘못된 수치입니다.");
        }
    });
}
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();
        
        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        // ? xpos, ypos는 0보다 크거나 같고 380보다 작거나 같을때 구동하는 if. 그외 나머지 error
        // ? xpos, ypos는 0보다 작거나 380보다 클때 구동하는 if. 그외 나머지 실행.
        // todo.
        if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
            alert('잘못된 수치입니다. 0 ~ 380이내로 입력하세요.');
        }else{
            $circle.css({
                'left' : xpos,
                'top' : ypos
            });
        }
    });
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
    circleMovCommand(xpos, ypos);
}
function circleMovCommand(xpos, ypos){
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
        alert("잘못된 수치입니다. 0 ~ 380이내로 입력하세요.");
    }else{
        $circle.css({
            'left' : xpos,
            'top' : ypos
        });
    }
}

function keyControl(){
    var $circle = $(".circleKey");
    var range = 10;
    var currentXpos = 0;
    var currentYpos = 0;
    $(document).keydown(function(e){
        console.log("입력한 키 코드" + e.keyCode);
        // ? w(top) : 87, d(right) : 68, s(bottom) : 83, a(left) : 65
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
        $circle.css("left",currentXpos);
        $circle.css("top",currentYpos);
    });
}