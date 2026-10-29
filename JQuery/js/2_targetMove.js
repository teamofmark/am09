$(document).ready(function(){
    $("#btnMoveCircle").click(moveCircle);
    $("#btnDetailMove").click(detailMoveCircle);
});
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