$(function(){
    imgAlignHori();
    imgAlignMix();
});

// *case. 1 xAxis 배치.
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        // console.log(imgLength);
        var imgWidth = img.width(); //? 너비구하기 = 150.
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? n번째 img를 선택하는 방법.
            xpos = i * imgWidth; //? 0 = 0, 1 = 150, 2 = 300....
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left",0);
    });
}

// todo. 
function imgAlignMix(){

}