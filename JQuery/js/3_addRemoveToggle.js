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
        if(checkStatus == true){
            $checkTarget.text("check_box");
            // ! text() -> 대상의 text를 가져와. / .text("blah") -> 대상의 text를 blah로 변경해.
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}
function toggleTodo(){
    // ! .attr("attr이름") -> 대상의 attr을 불러와 / .attr("attr이름","attr속성") -> attr값을 바꿔
    // todo 1. 눈알모양을 키고 끄기.
    // todo 2. 눈알모양을 누를때마다 킨상태 = type='text', 끈 상태 = type='password'
    var $toggleTarget = $(".material-icons.toggleVisible");
    var $toggleInput = $("#userPW");
    var toggleStatus = false;

    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        // console.log(toggleStatus);
        if(toggleStatus == true){
            $toggleTarget.text("visibility");
            $toggleInput.attr("type","text");            
        }else{
            $toggleTarget.text("visibility_off");     
            $toggleInput.attr("type","password");            
        }
    });
}