$(document).ready(function(){
    toggleCheck();
    // todo. toggleRadio 만들어보기
    toggleRadio();
});
function toggleCheck(){
    var $checkLabel = $(".label.checkLabel");// ? 시키는놈. -> button, input, click, keydown....
    var $checkTarget = $(".material-icons.checkIco");// ? 하는놈. -> div, section, img, li .....
    var checkStatus = false;

    $checkLabel.click(function(){
        checkStatus = !checkStatus;
        // console.log(checkStatus);
        if(checkStatus == true){
            $checkTarget.text("check_box");
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });


}
function toggleRadio(){
    
}