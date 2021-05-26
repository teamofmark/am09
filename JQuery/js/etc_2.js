$(document).ready(function(){
    // *case. 1 원움직이기(xAxis)
    moveCircle();

    // *case. 2 원움직이기(xAxis, yAxis)
    detailMoveCircle();
});

//  *case. 1
/*
    ? 1. #btnMoveCircle을 click 했을때, .circle을 0부터 380이내로 움직인다. 그외 에러메시지.
    ? 선언 / 처리 / 출력.
*/
function moveCircle(){
    var $circle = $('.circle');
    $('#btnMoveCircle').click(function(){
        var xpos = window.prompt('0부터 380이하의 숫자만 입력하세요.'); //? 379
        xpos = parseInt(xpos);
        if(xpos >= 0 && xpos <= 380){
            $circle.css('left',xpos);
        }else{
            alert('잘못된 수치입니다.');
        }
    });

}

// *case. 2
function detailMoveCircle(){
    var circle = $('.circleDetail');
    $('#btnDetailMove').click(function(){
        var xpos = $('#xpos').val();
        var ypos = $('#ypos').val();
        
        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
            alert('잘못된 수치입니다. 0 ~ 380이내로 입력하세요.');
        }else{
            $(circle).css({
                'left' : xpos,
                'top' : ypos
            });
        }
    });

}