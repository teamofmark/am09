$(document).ready(function(){
    imgAlignHori();
    imgAlignMix();
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
// todo
function imgAlignMix(){
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;
    $(".alignMix").click(function(){
        var imgLength = img.length;
        // var imgWidth = img.width();
        var imgHeight = img.height();

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%3)*imgHeight; //? 0,1,2,0,1,2,0,1,2.... = i -> 0/3 = 0, 1/3 = 1, 2/3 = 2, 3/3 = 0, 4/3 = 1, 5/3 = 2, / 6/3 = 0....
            ypos = parseInt(i/3) * imgHeight; //? 0,0,0,1,1,1,2,2,2.... = i -> 0 / 3 = 0, 1/3 =0, 2/3 = 0, 3/3 = 1, 4/3 = 1, 5/3 = 1, 6/3 = 2
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