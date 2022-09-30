$(document).ready(function(){
    imgAlignCustom(2); //? 매개변수로 넣은 숫자형태(n)로 작동할 수 있도록.
});

function imgAlignCustom(count){
    var img = $(".imgContainerCustom img");
    var xpos = 0;
    var ypos = 0;

    $(".alignMix").click(function(){
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
            "left" : 0,
            "top" : 0
        });
    });
}
