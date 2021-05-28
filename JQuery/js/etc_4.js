$(document).ready(function(){
    // *case.1
    imgAlignHori();

    // *case.2
    imgAlignMix();
}); 
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $('.alignHori').click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? 대상.x 번째 구하기.
            xpos = i * imgWidth;
            image.css('left',xpos);
        }
    });
    $('.reset').click(function(){
        img.css('left', 0);
    });
}

function imgAlignMix(){
    var img = $('.imgContainerMix img');
    var xpos = 0, ypos = 0;
    $('.alignMix').click(function(){
        var imgLength = img.length;
        var imgHeight = img.height();

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%3)*imgHeight;
            // ? 0(0), 1(1), 2(2),
            // ? 3(0), 4(1), 5(2),
            // ? 6(0), 7(1), 8(2),
            // ? 9(0), 10(1), 11(2)
            // ? 12(0)............
            ypos = parseInt(i/3)*imgHeight;
            // ? 0(0), 1(0), 2(0),
            // ? 3(1), 4(1), 5(1),
            // ? 6(2), 7(2), 8(2),
            // ? 9(3), 10(3), 11(3)
            // ? 12(4)............
            image.css({
                'left' : xpos,
                'top' : ypos
            });
        }
    });
    $('.resetMix').click(function(){
        img.css({
            'left': 0,
            'top' : 0
        })
    });
}