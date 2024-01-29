$(document).ready(function(){
    // *case. 1
    imgAlignHori();

});
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    // ? 선언
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? eq...n번째 대상 구하기
            xpos = imgWidth * i;
            // console.log(xpos);
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left",0);
    });
}