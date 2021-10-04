$(document).ready(function(){
    gallery(0,200,200);
    // todo. 각 button 클릭시 열 수 변환
});

function gallery(count, imgWidth, imgHeight){
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;
    var xpos, ypos;
    for (i = 0; i<$imgLength; i++){
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