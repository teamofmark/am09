$(document).ready(function(){
    imgAlignHori();
    imgAlignMix();
});
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        // console.log(imgLength,imgWidth);
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = i* imgWidth;
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left",0);
    });
}
function imgAlignMix(){
    // todo. 1 선언부 (이미지들, x좌표,y좌표 변수)
    var img= $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;
    // todo.2 정렬 버튼 클릭시
    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgHeight = img.height();
        // -1. img개수-1 만큼 반복
        for(var i = 0; i < imgLength; i++){
        var image = img.eq(i);
        // -2. 반복 안에서 n번째 image구하기
        xpos = ;
        // -3. x좌표 구하기 = 0,1,2,0,1,2... 패턴
        ypos = ;
        // -4. y좌표 구하기 = 0,0,0,1,1,1,2,2,2... 패턴
        image.css({
            "left" : xpos,
            "top" : ypos
        });
        // -5. left, top css 적용
        }
    // todo.3 원위치 버튼 클릭시 기존 left,top 모두 0 으로 복구 처리.
    });
}