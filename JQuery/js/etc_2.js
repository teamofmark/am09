$(document).ready(function(){
    // *case. 1 원움직이기(xAxis)
    moveCircle();

    // *case. 2 원움직이기(xAxis, yAxis)
    detailMoveCircle();

    // *case. 3 원움직이기(keyControl)
    keyControl();
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

// *case. 3
function keyControl(){
    var circle = $('.circleKey');
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;

    $(document).keydown(function(e){
        console.log('입력한 키 코드 = ' + e.keyCode);
        // ? top : w : 87, right : d : 68, bottom : s : 83, left : a : 65
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
            default:
                console.log('잘못된키가 입력되었습니다!!');
                break;
        }
        // todo. 못뚫고 나가게 하고, console로 메시지도 출력.
        if(currentXpos < 0){
            currentXpos = 0;
            console.log('그라믄안대');
        }
        if(currentXpos > 380){
            currentXpos = 380;
            console.log('그라믄안대');
        }
        if(currentYpos < 0){
            currentYpos = 0;
            console.log('그라믄안대');
        }
        if(currentYpos > 380){
            currentYpos = 380;
            console.log('그라믄안대');
        }
        circle.css('left',currentXpos);
        circle.css('top',currentYpos);
    });
}