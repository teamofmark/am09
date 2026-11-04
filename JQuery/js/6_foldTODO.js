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
    // todo.2 매개변수로 열만 전달후 함수내에서 이미지 크기를 연산하는 방식
});
// todo. frame width 1500 = 각 열 버튼을 눌렀을때 1000을 나눠쓸수있게 만들어야함.= width,height변경
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