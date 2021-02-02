$(document).ready(function(){
    gallery(3,200,200);

    $(".3way").click(function(){
        gallery(3,200,200);
    });
    $(".4way").click(function(){
        gallery(4,200,200);
    });
    $(".5way").click(function(){
        gallery(5,200,200);
    });
});

function gallery(count, imgWidth, imgHeight){
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;
    
    var xpos, ypos;

    for(i = 0; i<$imgLength; i++){
        var $image = $images.eq(i);
        xpos = (i % count) *imgWidth;
        ypos = parseInt(i / count) * imgHeight;

        $image.css({
            'left' : xpos,
            'top' : ypos
        });
    }
}