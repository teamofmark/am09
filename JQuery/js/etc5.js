$(document).ready(function(){
    imgAlignCustom(4); //? 정렬하고자 하는 단수를 매개변수로 입력.
});
function imgAlignCustom(count){
    var img = $(".imgContainerCustom img");
    var xpos = 0, ypos = 0;
    
    $(".alignImg").click(function(){
        var imgLength = img.length; //? loop의 횟수
        var imgWidth = img.width(); //? img 너비구하기
        var imgHeight = img.height(); //? img 높이구하기

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i % count)*imgWidth; //? 0,1,2,0,1,2,0,1,2
            ypos = parseInt(i / count)*imgHeight; //? 0,0,0, 1,1,1 2,2,2 3,3,3....
            image.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
    $(".resetImg").click(function(){
        img.css({
            "left": 0,
            "top" : 0
        });
    });
}