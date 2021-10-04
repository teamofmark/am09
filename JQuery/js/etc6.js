$(document).ready(function(){
    gallery(0,200,200);
    // todo. 각 button 클릭시 열 수 변환
    $(".1way").click(function(){gallery(1,1000,1000);});
    $(".2way").click(function(){gallery(2,500,500);});
    $(".3way").click(function(){gallery(3,333,333);});
    $(".4way").click(function(){gallery(4,250,250);});
    $(".5way").click(function(){gallery(5,200,200);});
    $(".6way").click(function(){gallery(6,166,166);});
    $(".7way").click(function(){gallery(7,142,142);});
    $(".8way").click(function(){gallery(8,125,125);});
    $(".9way").click(function(){gallery(9,111,111);});
    $(".10way").click(function(){gallery(10,100,100);});
});

function gallery(count, imgWidth, imgHeight){
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;
    var xpos, ypos;
    for (i = 0; i<$imgLength; i++){
        var $image = $images.eq(i);

        xpos = (i % count) * imgWidth;
        ypos = parseInt(i / count) * imgHeight;

        $image.css({
            'left' : xpos,
            'top' : ypos,
            'width' : imgWidth,
            'height' : imgHeight
        });
    }
}