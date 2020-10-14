$(document).ready(function(){
    gallery(5,200,200);

    $(".trans1").click(function(){
        gallery(3,150,150);
    });
    
    $(".trans2").click(function(){
        gallery(5,200,200);
    });
});

function gallery(count, imgWidth, imgHeight){
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;
    
        imgWidth = $images.width();
        imgHeight = $images.height();

    var xpos, ypos

    for(i = 0; i<$imgLength; i++){
        var $image = $images.eq(i); //? eq = DOM 요소 세트를 나타내는 jQuery 객체가 주어지면 .eq()메소드는 해당 세트 내의 한 요소에서 새 jQuery 객체를 구성한다.
        
        xpos = 100+(i % count) * imgWidth;
        ypos = 100+parseInt(i / count) * imgHeight;

        $image.css({
            'left' : xpos,
            'top' : ypos
        })
    }
}