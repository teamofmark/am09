$(document).ready(function(){
    imgAlignCustom(3,150,150);
});

function imgAlignCustom(count, imgWidth, imgHeight){
    var img = $(".imgContainerCustom img");
    var xpos = 0;
    var ypos = 0;

    $(".alignMix").click(function(){
        var imgLength = img.length;
            imgWidth = img.width();
            imgHeight = img.height();

        for (var i = 0; i < imgLength; i++) {
            var image = img.eq(i);
            xpos = (i%count)*imgWidth;//? 0/3 = 나머지 0, 1/3 = 1, 2/3 = 2, 3/3 = 0 ....*imgWidth
            //! 나눗셈 나머지? = 몫은 정수상태여야 하고, 뺼수없는 소수가 되었을때 나오는 나머지.
            ypos = parseInt(i/count) * imgHeight;//? 0/3 = 0 , 1/3 = 0, 2/3 = 0, 3/3 = 1, 3/4 = 0, 3/5 = 0... *imgHeight
            // todo 만약 간격을 두고 싶다면 width, height 에 ()우선연산을 이용해 space변수를 하나 선언및 더하여 값을 넣어주면 된다.
            image.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
    $(".resetMix").click(function(){
        img.css({
            "left": 0,
            "top" : 0
        });
    });
    
}