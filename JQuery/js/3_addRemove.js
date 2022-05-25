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
            $checkTarget.text("check_box"); //? text를 가져오거나 매개변수로 값을 넣어 바꾸기.
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}