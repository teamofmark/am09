$(document).ready(function(){
    imgAlignHori();

    imgAlignMix();
});

// *case. 1
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        // console.log(imgLength);
        var imgWidth = img.width();
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? n번째 이미지 구하기.
            xpos = i * imgWidth;
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left", 0);
    });
}

// *case.2
function imgAlignMix(){
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;

    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgHeight = img.height();

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%3) * imgHeight;
            // ? 0(0), 1(1), 2(2),
            // ? 3(0), 4(1), 5(2),
            // ? 6(0), 7(1), 8(2)...
            // ! = 나머지 n , 3을 나눈 나머지-
            
            ypos = parseInt(i/3) * imgHeight;
            // ? 0(0), 1(0), 2(0).
            // ? 3(1), 4(1), 5(1).
            // ? 6(2), 7(2), 8(2).
            image.css({
                "left" : xpos,
                "top" : ypos
            })
        }
    });
    $(".resetMix").click(function(){
        img.css({
            "left" : 0,
            "top" : 0
        })
    });
}