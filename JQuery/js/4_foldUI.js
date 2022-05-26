$(document).ready(function(){
    // *case.1
    imgAlignHori();

    // todo
    imgAlignMix();
});

function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgWidth = img.width();
        var imgLength = img.length;

        for (var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? n번째 앞에 대상 구하기.
            xpos = i * imgWidth;
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left", 0);
    });
}

function imgAlignMix(){
    var img = $(".imgContainerMix img");
    var xpos = 0, ypos = 0;

    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        // var imgHeight = img.height();
        
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%3)*imgWidth; //? 0 % 3 = 0, 1 % 3 = 1, 2 % 3 = 2, 3 % 3 = 0......* imgWidth 
            ypos = parseInt(i/3)*imgWidth; //? 0 ? 3 = 0, 1 ? 3 = 0, 2 ? 3 = 0, 3 ? 3 = 1

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