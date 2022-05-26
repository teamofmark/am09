$(document).ready(function(){
    // *case.1
    imgAlignHori();
});

function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgWidth = img.width();
        var imgLength = img.length;

        for (var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? n번째 앞에 대상 구하기.
            xpos = i * imgWidth;
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left", 0);
    });
}