$(document).ready(function(){
    imgAlignCustom(6); //? case.1 매개변수로 사용할 시
});
function imgAlignCustom(count){
    var img = $(".imgContainerCustom img");
    var xpos = 0;
    var ypos = 0;
    $(".alignMix").click(function(){
        // var count = $("#colVal").val(); case.2 input number를 사용 했을 때는 매개변수를 제거하고 이런식으로..
        var imgLength = img.length;
        var imgWidth = img.width();
        var imgHeight = img.height();

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%count)*imgWidth;
            ypos = parseInt(i/count)*imgHeight;
            image.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
    $(".resetMix").click(function(){
        img.css({
            "left": 0,
            "top" : 0
        });
    });
}