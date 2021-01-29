$(document).ready(function(){
    // *exp.1 원움직이기
    moveCircle();

    // *exp.2 원움직이기(detail)
    detailMoveCircle();
});
function moveCircle(){
    var $circle = $('.circle');
    $('#btnMoveCircle').click(function(){
        var xpos = window.prompt('0부터 380이하의 숫자만 입력하세요.');
        xpos = parseInt(xpos);
        if(xpos >= 0 && xpos <= 380){
            $circle.css('left',xpos);
        }else{
            alert('잘못된입력값입니다.');
        }
    });
}

function detailMoveCircle(){
    var $circle = $(".circleDetail");
    $('#btnDetailMove').click(function(){
        var xpos = $('#xpos').val();
        var ypos = $('#ypos').val();
    
        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
            alert('잘못된 입력값입니다.');
        }else{
            $($circle).css({
                'left': xpos,
                'top' : ypos
            });
        }
    });


}