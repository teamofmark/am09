$(document).ready(function(){
    /*
    gallery2(0,200,200);
    $(".1way").click(function(){gallery2(1,1000,1000)});
    $(".2way").click(function(){gallery2(2,500,500)});
    $(".3way").click(function(){gallery2(3,333,333)});
    $(".4way").click(function(){gallery2(4,250,250)});
    $(".5way").click(function(){gallery2(5,200,200)});
    $(".6way").click(function(){gallery2(6,166,166)});
    $(".7way").click(function(){gallery2(7,142,142)});
    $(".8way").click(function(){gallery2(8,125,125)});
    $(".9way").click(function(){gallery2(9,111,111)});
    $(".10way").click(function(){gallery2(10,100,100)});*/
    // todo case.1 parameter를 이용한 방법. - click이 일어날 때 해당 열,너비,높이를 함수에 전달.
    
    gallery();
    // todo case.2 parameter를 사용하지 않고 한번에 해결하는 방법. - .replace(); 함수 찾아적용.
});


function gallery(){
    var currentWay,xpos, ypos;
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;
    var containerW = $("#imgContainer").width();
    var imgSize = $images.width();

    $("[class$='way']").click(function(){
        currentWay = parseInt($(this).attr("class").replace("way",""));
        for(i = 0; i<$imgLength; i++){
            var $image = $images.eq(i); //? eq = DOM 요소 세트를 나타내는 jQuery 객체가 주어지면 .eq()메소드는 해당 세트 내의 한 요소에서 새 jQuery 객체를 구성한다.
            imgSize = containerW / currentWay;
            xpos = (i % currentWay) * imgSize;
            ypos = parseInt(i / currentWay) * imgSize;
            
            $image.css({
                'left' : xpos,
                'top' : ypos,
                'width' : imgSize,
                'height' : imgSize
            })
        }
    });
}
function gallery2(count, imgWidth, imgHeight){
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;
    var xpos, ypos;

    for(i = 0; i<$imgLength; i++){
        var $image = $images.eq(i); //? eq = DOM 요소 세트를 나타내는 jQuery 객체가 주어지면 .eq()메소드는 해당 세트 내의 한 요소에서 새 jQuery 객체를 구성한다.
        
        xpos = (i % count) * imgWidth;
        ypos = parseInt(i / count) * imgHeight;

        $image.css({
            'left' : xpos,
            'top' : ypos,
            'width' : imgWidth,
            'height' : imgHeight
        })
    }
}