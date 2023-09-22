$(document).ready(function(){
    toggleCheck();
});
function toggleCheck(){
    var $checkTarget = $(".material-icons.checkIco");
    var $checkLabel = $(".label.checkLabel");
    var checkStatus = false;

    $checkLabel.click(function(){
        checkStatus = !checkStatus;
        // console.log(checkStatus);
        if(checkStatus == true){
            $checkTarget.text("check_box");
            // ! text() -> 대상의 text를 가져와. / .text("blah") -> 대상의 text를 blah로 변경해.
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}