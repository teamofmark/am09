$(document).ready(function(){
    gallery(0,200,200); //? 초기식실행
    $(".1way").click(function(){gallery(1,1000,1000);});//? 1열 버튼을 click 하였을 때 위 gallery함수에 인자전달 및 수행
    $(".2way").click(function(){gallery(2,500,500);});//? 2열 버튼을 click 하였을 때 위 gallery함수에 인자전달 및 수행
    $(".3way").click(function(){gallery(3,333,333);});//? 3열 버튼을 click 하였을 때 위 gallery함수에 인자전달 및 수행
    $(".4way").click(function(){gallery(4,250,250);});//? 4열 버튼을 click 하였을 때 위 gallery함수에 인자전달 및 수행
    $(".5way").click(function(){gallery(5,200,200);});//? 5열 버튼을 click 하였을 때 위 gallery함수에 인자전달 및 수행
    $(".6way").click(function(){gallery(6,166,166);});//? 6열 버튼을 click 하였을 때 위 gallery함수에 인자전달 및 수행
    $(".7way").click(function(){gallery(7,142,142);});//? 7열 버튼을 click 하였을 때 위 gallery함수에 인자전달 및 수행
    $(".8way").click(function(){gallery(8,125,125);});//? 8열 버튼을 click 하였을 때 위 gallery함수에 인자전달 및 수행
    $(".9way").click(function(){gallery(9,111,111);});//? 9열 버튼을 click 하였을 때 위 gallery함수에 인자전달 및 수행
    $(".10way").click(function(){gallery(10,100,100);});//? 10열 버튼을 click 하였을 때 위 gallery함수에 인자전달 및 수행
});
function gallery(count,imgWidth,imgHeight){ //? 매개변수로 몇개를 어떤것을 전달해야 하는가?
    // * foldUI에 필요한 logic (매개변수를전달받아수행하게끔)
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;
    var xpos, ypos;

    for(var i = 0; i < $imgLength; i++){
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