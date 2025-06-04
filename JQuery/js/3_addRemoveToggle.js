$(document).ready(function(){
    toggleCheck();
});
function toggleCheck(){
    var $checkTarget = $(".material-icons.checkIco");
    var $checkLabel = $(".label.checkLabel");
    var checkStatus = false; //? 상태변수
    $checkLabel.click(function(){
        checkStatus = !checkStatus;
        // console.log(checkStatus);
        if(checkStatus == true){
            $checkTarget.text("check_box"); //? jquery ? js로하면 구문이 많이 길어지니까..
            // target[대상]].text() = 대상의 글자를 가져와라
            // target[대상]].text("다른글자") = 대상의 글자를 "다른글자"로 바꿔라
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}