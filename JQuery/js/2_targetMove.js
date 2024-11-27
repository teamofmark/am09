$(document).ready(function(){
    // case.1 xAxis 원움직이기 (조건 : frame내에서)
    $("#btnMoveCircle").click(moveCircle);

    // case.2 입력된 x,y value를 가져와 원움직이기
    // $("#btnDetailMove").click(detailMoveCircle);
    detailMoveCircleExt();

    // case.3 keyControl
    keyControl();
});
// case.1
function moveCircle(){
    var $circle = $(".circle");
    var xpos = prompt("0 부터 380이하의 숫자만 입력하세요.");
    xpos = parseInt(xpos);
    if(xpos >= 0 && xpos <= 380){ //? 움직이는 조건 : xpos 0보다 크거나 같고 xpos 380보다 작거나 같을때
        $circle.css("left",xpos);
    }else{
        alert("잘못된 수치입니다.");
    }
}

// case.2
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    // target.val() - target의 value를 불러옴 / target.val("값") - target의 value를 변경함
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    console.log("xpos = " + typeof(xpos) + xpos + "/" + "ypos = " + typeof(ypos) + ypos);

    if(xpos <= 380 && ypos <= 380 && xpos >= 0 && ypos >= 0){ //todo. x,y 둘다 가둬야하고 x,y 둘다 움직여야함.
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }else{
        alert("잘못된 수치입니다. 0~380이내로 입력하세요");
    }
    // todo. if <-> else 의 조건을 바꿔서도 해보면 좋음.
    /*
        if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
            alert("잘못된 수치입니다. 0~380이내로 입력하세요");
        }else{
            $circle.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    */
}

// case.2-1 function grouping
function detailMoveCircleExt(){
    // ! 선언 -> 처리 -> 출력
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
        alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
    }else{
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }
}

// case.3 keyControl
function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;
    // ? key입력받는 방법 - PsyElectronicSign -> softwareEngineering(true and false) -> language
    $(document).keydown(function(e){
        console.log("입력한 key Code : " + e.keyCode);
        // * w: 87(yPos-), d:68(xPos+), s:83(yPos+), a:65(xPos-)
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
        // 집 나간원 잡아오기 - 집못나가게
        
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