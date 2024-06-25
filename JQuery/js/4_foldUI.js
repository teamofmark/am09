$(document).ready(function(){
    imgAlignHori();
    imgAlignMix();
});

// *case. 1 xAxisFold
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = i * imgWidth;
            // console.log(i +'th img' + xpos);
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left",0);
    });
}
// todo. x,yAxis Fold
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
            xpos = (i%3)*imgWidth;
            console.log("currentXpos : " + xpos);
            /*
                ? x pattern
                * 0(x0) 1(x1) 2(x2)
                * 3(x0) 4(x1) 5(x2)
                * 6(x0) 7(x1) 8(x2)
                * .....
            */
           ypos = parseInt(i/3)*imgHeight;
           console.log("currentYpos : " + ypos);
            /*
                ? y pattern
                * 0(x0) 1(x0) 2(x0)
                * 3(x1) 4(x1) 5(x1)
                * 6(x2) 7(x2) 8(x2)
                * .....
           */
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