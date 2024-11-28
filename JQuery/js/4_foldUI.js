$(document).ready(function(){
    // case.1 xAxis 로 imgs 펼치기
    imgAlignHori();
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