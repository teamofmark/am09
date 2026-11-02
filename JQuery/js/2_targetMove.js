$(document).ready(function(){
    // case.1
    $("#btnMoveCircle").click(moveCircle);
    // case.2
    // $("#btnDetailMove").click(detailMoveCircle);
    detailMoveCircleExt();
    // case.3
    // keyControl();
    keyControlExt();
});
    // case.1
function moveCircle(){
    var $circle = $(".circle");
    var xpos = window.prompt("0부터 380이하의 숫자만 입력하세요.");
    xpos = parseInt(xpos);

    if(xpos >= 0 && xpos <= 380){
        $circle.css("left", xpos);        
    }else{
        alert("잘못된 수치입니다. 글안읽어요?");
    }
}
    // case.2
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    // ! 대상.val(); = 대상의 값을 불러오다. / 대상.val(값); = 대상의 값을 변경하다.
    xpos=parseInt(xpos);
    ypos=parseInt(ypos);

    if(xpos <= 380 && ypos <= 380 && xpos>=0 && ypos>=0){ //todo. 조건 한줄로처리
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }else{
        alert("잘못된 수치입니다. 글안읽어요?");
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
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos <0){
        alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
    }else{
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }
}
// case.3
function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;
    $(document).keydown(function(e){
        console.log("입력한 keyCode : " + typeof(e.keyCode) + e.keyCode);
        // todo. w 87(ypos-), d 68(xpos+), s 83(ypos+), a 65(xpos -)
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
        // todo. 범위내로 움직임 고정하기
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

function keyControlExt(){
    const $circle = $(".circleKey");
    const RANGE = 50;
    const MAX_POS = 380;
    const MIN_POS = 0;

    let currentXpos = 0;
    let currentYpos = 0;
    const moveMap = {
        87 : {y: -RANGE}, //W
        83: {y: RANGE}, //S
        65: {x:-RANGE}, //A
        68: {x: RANGE} //D
    }
    $(document).on("keydown",function(e){
        const move = moveMap[e.keyCode];
        if(!move) return;
        if(move.x !== undefined) currentXpos += move.x;
        if(move.y !== undefined) currentYpos += move.y;
        currentXpos = Math.max(MIN_POS, Math.min(currentXpos, MAX_POS));
        currentYpos = Math.max(MIN_POS, Math.min(currentYpos, MAX_POS));
        $circle.css({
            left: currentXpos,
            top: currentYpos
        })
    });
}