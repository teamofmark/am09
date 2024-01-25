$(document).ready(function(){
    // *case. 1 xAxis 원움직이기
    $("#btnMoveCircle").click(moveCircle);

    // *case. 2 x/yAxis 원움직이기
    $("#btnDetailMove").click(detailMoveCircle);

    // *case. 3 방향키조작
    keyControl();
});
function moveCircle(){
    // ? 선언
    var $circle = $(".circleWrap .circle");
    var xpos = window.prompt("0부터 380이하의 숫자만 입력하세요."); // * prompt로 숫자입력되면? -> string.

    // ? 처리
    xpos = parseInt(xpos);
    if(xpos >= 0 && xpos <= 380){
        $circle.css("left",xpos);
        // ? 출력
    }else{
        alert("잘못된 수치입니다.");
    }
}
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    // ?선언

    // todo 처리
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);

    if(xpos <= 380 && ypos <= 380 && xpos >= 0 && ypos >= 0){
        // todo 출력
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }else{
        alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하시오.");
    }

}
function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;

    $(document).keydown(function(e){
        console.log("입력한 keyCode : " + typeof(e.keyCode) + e.keyCode);
        // * w: 87(Ypos-), d: 68(Xpos+), s: 83(Ypos+), a: 65(Xpos-)
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
        // todo. 자유분방한 원 가둬두기

        $circle.css("left",currentXpos);
        $circle.css("top",currentYpos);
    });
}
