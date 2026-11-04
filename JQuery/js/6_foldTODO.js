$(document).ready(function(){
    /* todo.1 매개변수로 열,너비,높이 모두 전달하는 방식
    $(".1way").click(function(){gallery(1,1000,1000)});
    $(".2way").click(function(){gallery(2,500,500)});
    $(".3way").click(function(){gallery(3,333,333)});
    $(".4way").click(function(){gallery(4,250,250)});
    $(".5way").click(function(){gallery(5,200,200)});
    $(".6way").click(function(){gallery(6,166,166)});
    $(".7way").click(function(){gallery(7,142,142)});
    $(".8way").click(function(){gallery(8,125,125)});
    $(".9way").click(function(){gallery(9,111,111)});
    $(".10way").click(function(){gallery(10,100,100)});*/

    /* todo.2 매개변수로 열만 전달후 함수내에서 이미지 크기를 연산하는 방식
    $(".1way").click(function(){gallery2(1)});
    $(".2way").click(function(){gallery2(2)});
    $(".3way").click(function(){gallery2(3)});
    $(".4way").click(function(){gallery2(4)});
    $(".5way").click(function(){gallery2(5)});
    $(".6way").click(function(){gallery2(6)});
    $(".7way").click(function(){gallery2(7)});
    $(".8way").click(function(){gallery2(8)});
    $(".9way").click(function(){gallery2(9)});
    $(".10way").click(function(){gallery2(10)});*/

    gallery3();
});

function gallery(count,imgWidth,imgHeight){
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;
    var xpos, ypos;
    for(i = 0; i<$imgLength; i++){
        var $image = $images.eq(i);
        xpos = (i % count) * imgWidth;
        ypos = parseInt(i / count) * imgHeight;
        $image.css({
            "left": xpos,
            "top": ypos,
            "width": imgWidth,
            "height": imgHeight
        });
    }
    
}
function gallery2(count){
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;
    var containerW = $("#imgContainer").width();
    var imgW = containerW / count;
    // var imgH = containerW / count; 직사각형일때는 변환 필요
    var xpos, ypos;
    for(i = 0; i<$imgLength; i++){
        var $image = $images.eq(i);
        xpos = (i % count) * imgW;
        ypos = parseInt(i / count) * imgW;
        $image.css({
            "left": xpos,
            "top": ypos,
            "width": imgW,
            "height": imgW
        });
    }
    
}
function gallery3(){
    var currentWay,xpos,ypos;
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;
    var containerW = $("#imgContainer").width();
    var imgSize = $images.width();

    $("[class$='way']").click(function(){
        currentWay = parseInt($(this).attr("class").replace("way",""));
        // console.log("현재 열 수 는 : " + currentWay + "열 이다. 자료 유형은" + typeof(currentWay) + "이다.");
        for(var i = 0; i<$imgLength; i++){
            var $image = $images.eq(i);
            imgSize = containerW / currentWay;
            xpos = (i % currentWay) * imgSize;
            ypos = parseInt(i / currentWay) * imgSize;
            $image.css({
                "left" : xpos,
                "top" : ypos,
                "width" : imgSize,
                "height" : imgSize
            });
        }
    });
}