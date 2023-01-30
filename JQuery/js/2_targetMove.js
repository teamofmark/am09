$(document).ready(function(){
    $("#btnMoveCircle").click(moveCircle);
    // $("#btnDetailMove").click(detailMoveCircle);
    detailMoveCircleExt();
    keyControl();
});
function moveCircle(){
    var $circle = $(".circle");
    var xpos = window.prompt("0부터 380이하의 숫자만 입력하세요.");
    xpos = parseInt(xpos);

    if(xpos >= 0 && xpos <= 380){
         $circle.css("left",xpos);
    }else{
        alert("잘못된 수치입니다.");
    }
    
}
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    var xpos = $("#xpos").val(); //? .val() -> 현재담긴"값"을불러오기 / .val("blabla") -> 현재담긴값을 "blabla"로 바꿔라.
    var ypos = $("#ypos").val();
    
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);

    if(xpos <= 380 && ypos <= 380 && xpos >= 0 && ypos >= 0){
        $circle.css({
            "left": xpos,
            "top" : ypos
        });
    }else{
        alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
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
    if(xpos <= 380 && ypos <= 380 && xpos >= 0 && ypos >= 0){
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }else{
        alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
    }
}
function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;

    $(document).keydown(function(e){
        console.log("입력한 키 코드" + e.keyCode);
        // ? w(top) : 87, d(right) : 68, s(bottom) : 83, a(left) : 65.
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

        $circle.css("top",currentYpos);
        $circle.css("left",currentXpos);
    });
}