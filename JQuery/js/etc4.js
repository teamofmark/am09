$(document).ready(function(){
    imgAlignHori();
    imgAlignMix();
});

// *exp.1
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;

    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = imgWidth * i;
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left",0);
    });
}

// *exp.2

function imgAlignMix(){
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;

    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        var imgHeight = img.height();

        for (var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%3)*imgWidth;
            ypos = parseInt(i/3)*imgHeight; //? 0/3 = 0, 1/3 = 0 2/3 = 0 3/3 = 1 3/4 = 0 3/5 = 0;
            
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
        })
    });
}
