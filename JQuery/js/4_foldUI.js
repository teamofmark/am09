$(document).ready(function(){
    imgAlignHori();
    imgAlignMix(6);
});
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = i * imgWidth;
            image.css("left",xpos);
        }
    });
    // todo. 원위치로 돌려놓기
    $(".reset").click(function(){
        img.css("left", 0);
    });
}
function imgAlignMix(count){
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;
    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgHeight = img.height();
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%count)*imgHeight;
            ypos = parseInt(i/count)*imgHeight;
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