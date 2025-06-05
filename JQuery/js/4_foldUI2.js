$(document).ready(function(){
    imgAlignCustom(3);
});
function imgAlignCustom(count){
    var img = $(".imgContainerCustom img");
    var xpos = 0;
    var ypos = 0;
    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        var imgHeight = img.height();

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%count)*imgWidth;
            ypos = parseInt(i/count)*imgHeight;
            image.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
}
