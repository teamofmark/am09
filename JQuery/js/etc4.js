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
}
