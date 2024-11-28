$(document).ready(function(){
    // case.1 xAxis 로 imgs 펼치기
    imgAlignHori();
    // todo. x,yAxis 로 imgs 펼치기
    imgAlignMix();
});
// case.1
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        // ? target.width() -> 대상의 너비 , target.height() -> 대상의 높이
        for(var i = 0; i<imgLength; i++){
            var image = img.eq(i); //? target.eq(index) -> index번째 대상 구하기
            xpos = i * imgWidth;
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left",0);
    });
}
// todo
function imgAlignMix(){
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;
    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgHeight = img.height();
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%3)*imgHeight; //? 0,1,2,0,1,2... -> 3을 넘지 못한다. (ex> 3/3 = 0)
            ypos = parseInt(i/3)*imgHeight; //? 0,0,0,1,1,1,2,2,2.... -> 3배수관계일때 1씩 증가
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
        })
    });
}