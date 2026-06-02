$(document).ready(function(){
    imgAlignHori();
    imgAlignMix(3);
});
// case. 1 x축 정렬
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width(); //? 너비구하기, .height() 높이구하기.
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? n번째 대상(이미지) 구하기
            xpos = i * imgWidth;
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left",0);
    });
}

// todo. x,y축으로 이미지 배치하기 (3열x3행 배치) + 매개변수형태변환
function imgAlignMix(count){
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;
    $(".alignMix").click(function(){
        var imgLength = img.length;
        // var imgWidth = img.width();
        var imgHeight = img.height();
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = parseInt(i%count) * imgHeight; //? 0/3 = 나머지 0, 1/3 = 1, 2/3 = 2, 3/3 = 0, 3/4 = 1, 3/5 = 2, 3/6 = 0....
            ypos = parseInt(i/count) * imgHeight; //? 0/3 = 0, 1/3 = 0, 2/3 = 0, 3/3 = 1, 3/4 = 1.xxxx, 3/5 = 1.xxxx, 3/6 = 2
            image.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
    $(".resetMix").click(function(){
        img.css({
            "left" : 0,
            "top" : 0
        });
    });
}