$(document).ready(function(){
    // *case. 1
    toggleCheck();
});
function toggleCheck(){
    var $checkTarget = $(".material-icons.checkIco");
    var $checkLabel = $(".label.checkLabel");
    var checkStatus = false;

    $checkLabel.click(function(){
        checkStatus = !checkStatus;
        console.log(checkStatus);
        if(checkStatus == true){
            $checkTarget.text("check_box"); //? target.text(); -> 대상 "글자" 불러와. / target.text("check_box") -> 대상 "글자" "check_box"로 바꿔.
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}