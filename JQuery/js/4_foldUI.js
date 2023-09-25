$(document).ready(function(){
    imgAlignHori();
});

// *case. 1
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0; //? xAxis Position -> xpos..
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        // console.log(imgLength,imgWidth);

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? n 번째 구하기.
            xpos = imgWidth * i; //? 150x0 = 0, 150x1 = 150, 150x2 = 300.....
            image.css("left", xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left",0);
    });
}
