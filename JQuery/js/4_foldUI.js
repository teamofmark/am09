$(document).ready(function(){
    imgAlignHori();
});
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        // console.log(imgLength,imgWidth);
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = i* imgWidth;
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left",0);
    });
}