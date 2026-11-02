$(document).ready(function(){
    toggleCheck();
    toggleTodo();
});
function toggleCheck(){
    var $checkTarget = $(".material-icons.checkIco");
    var $checkLabel = $(".label.checkLabel");
    var checkStatus = false;
    $checkLabel.click(function(){
        checkStatus = !checkStatus;
        // console.log(checkStatus);
        if(checkStatus){
            $checkTarget.text("check_box");
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}
function toggleTodo(){
    var $toggleTarget = $(".material-icons.toggleVisible");
    var $toggleInput = $("#userPW");
    var toggleStatus = false;
    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus){
            // todo. 1 눈알모양 바꾸기 (이전예제와 동일)
            // todo. 2 input type 변경 - ? 함수... attr이라는 함수 사용해보기.([attr-name],[attr-value])
        }else{

        }
    });
}