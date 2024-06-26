$(document).ready(function(){
    // todo.1 
    /*
    $(".1way").click(function(){gallery2(1,1000,1000)});
    $(".2way").click(function(){gallery2(2,500,500)});
    $(".3way").click(function(){gallery2(3,333,333)});
    $(".4way").click(function(){gallery2(4,250,250)});
    $(".5way").click(function(){gallery2(5,200,200)});
    $(".6way").click(function(){gallery2(6,166,166)});
    $(".7way").click(function(){gallery2(7,142,142)});
    $(".8way").click(function(){gallery2(8,125,125)});
    $(".9way").click(function(){gallery2(9,111,111)});
    $(".10way").click(function(){gallery2(10,100,100)});
    */
    // todo. 2 필요재료 : .replace("blah","") -> blah를 찾아서 ""로 바꿔
    gallery(); 
});
function gallery2(count,imgWidth,imgHeight){
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;
    var xpos,ypos;
    for(i = 0; i <$imgLength; i++){
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
function gallery(){
    var currentWay,xpos,ypos;
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;
    var containerW = $("#imgContainer").width();
    var imgSize = $images.width();

    $("[class$='way']").click(function(){
        currentWay = parseInt($(this).attr("class").replace("way",""));
        // console.log("현재 열 수는 " + currentWay + "열 이다. 자료 유형은" + typeof(currentWay) + "이다.");
        for(var i = 0; i<$imgLength; i++){
            var $image = $images.eq(i);
            imgSize = containerW / currentWay;
            xpos = (i % currentWay) * imgSize;
            ypos = parseInt(i / currentWay) * imgSize;
            $image.css({
                'left' : xpos,
                'top' : ypos,
                'width' : imgSize,
                'height' : imgSize
            });
        }
    });
}
