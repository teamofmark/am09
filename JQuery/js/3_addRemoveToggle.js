$(document).ready(function(){
    toggleCheck();
});
function toggleCheck(){
    var $checkTarget = $(".material-icons.checkIco");
    var $checkLabel = $(".label.checkLabel");
    var checkStatus = false;
    $checkLabel.click(function(){
        checkStatus = !checkStatus;
        if(checkStatus == true){
            $checkTarget.text("check_box");
            // ? text를 변경할수있는 JQuery 함수... text() -> text불러와. text("blabla") -> text 내용을 blabla로 바꿔.
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}