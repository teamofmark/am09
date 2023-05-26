$(document).ready(function(){
    // *case. 1
    $("#btnMoveCircle").click(moveCircle);
    // *case. 2
    $("#btnDetailMove").click(detailMoveCircle);
});
// *case. 1
function moveCircle(){
    var $circle = $(".circle");
    var xpos = window.prompt("0 부터 380이하의 숫자만 입력하세요.");
    xpos = parseInt(xpos);

    if(xpos >= 0 && xpos<=380){
        $circle.css("left",xpos);
    }else{
        alert("하여간 말 참 안들어.");
    }
}
// *case. 2
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    var xpos = $("#xpos").val(); //? target.val(); = target의 value를 가져와라. //? target.val('blah'); = target의 value를 blah로 바꿔라. 
    var ypos = $("#ypos").val();
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);

    if(xpos <= 380 && ypos <= 380 && xpos >= 0 && ypos >= 0){ //? && -> true condition.
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }else{
        alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
    }
    // todo. || -> false condition .

}