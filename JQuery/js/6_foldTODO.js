$(document).ready(function(){
    $(".1way").click(function(){gallery2(1)});
    $(".2way").click(function(){gallery2(2)});
    $(".3way").click(function(){gallery2(3)});
    $(".4way").click(function(){gallery2(4)});
    $(".5way").click(function(){gallery2(5)});
    $(".6way").click(function(){gallery2(6)});
    $(".7way").click(function(){gallery2(7)});
    $(".8way").click(function(){gallery2(8)});
    $(".9way").click(function(){gallery2(9)});
    $(".10way").click(function(){gallery2(10)});
});
function gallery2(count){
    var $images=$("#imgContainer img");
    var $imgLength = $images.length;
    var xpos, ypos;
    var containerW = $("#imgContainer").width();
    var imgW =  containerW / count;
    var imgH =  containerW / count;

    for(var i = 0; i<$imgLength; i++){
        var $image = $images.eq(i);
        xpos = (i % count) * imgW;
        ypos = parseInt(i / count) * imgH;
        $image.css({
            "left" : xpos,
            "top" : ypos,
            "width" : imgW,
            "height" : imgH
        })
    }
}