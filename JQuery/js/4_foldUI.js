$(function(){
    imgAlignHori();
    imgAlignMix();
});

// *case. 1 xAxis 배치.
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        // console.log(imgLength);
        var imgWidth = img.width(); //? 너비구하기 = 150.
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? n번째 img를 선택하는 방법.
            xpos = i * imgWidth; //? 0 = 0, 1 = 150, 2 = 300....
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left",0);
    });
}

// todo. 
function imgAlignMix(){
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;

    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        var imgHeight = img.height();
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos= (i%3)*imgWidth; //? 0 = 0, 1 = 1, 2 = 2 / 3 = 0
            ypos= parseInt(i/3)*imgHeight; //? 0 = 0, 1 = 0, 2 = 0 / 3 = 1 ~~~ / 6 = 2 ~~~ / 9 = 3~~~~
            image.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    // ? xpos
    // ? 0(0), 1(1), 2(2),
    // ? 3(0), 4(1), 5(2),
    // ? 6(0), 7(1), 8(2),

    // ? ypos
    // ? 0(0), 1(0), 2(0),
    // ? 3(1), 4(1), 5(1),
    // ? 6(2), 7(2), 8(2),
    });
    $(".resetMix").click(function(){
        img.css({
            "left": 0,
            "top": 0
        })
    });
}