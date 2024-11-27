$(document).ready(function(){
    // case. 1 tag에 간섭받지않는 checkbox
    toggleCheck();
    // todo.
    toggleTodo();
});
// case. 1
function toggleCheck(){
    var $checkTarget = $(".material-icons.checkIco");
    var $checkLabel = $(".label.checkLabel");
    var checkStatus = false;

    $checkLabel.click(function(){
        checkStatus = !checkStatus;
        // console.log("현재 toggle 상태 : " + checkStatus);
        if(checkStatus == true){
            $checkTarget.text("check_box");
            // todo. jquery official - text search -> .text()
            // * text() - target.text() = 대상의 글자를 가져와 / target.text("변경글자") - 대상의 글자를 변경글자로 바꾼다.
            // ? material icons - text 를 조작하여 icon을 변경.
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}
// todo
function toggleTodo(){
    var $toggleTarget = $(".material-icons.toggleVisible");
    var $toggleInput = $("#userPW");
    var toggleStatus = false;

    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $toggleTarget.text("visibility");
            $toggleInput.attr("type","text");
        }else{
            $toggleTarget.text("visibility_off");
            $toggleInput.attr("type","password");
        }
    });
    // ? target.attr() = 대상의 모든 attr을 불러와 / 
    // ? target.attr("attr이름") = 대상의 해당 attr을 불러와 /
    // ? target.attr("attr이름","attr값") = 대상의 해당 attr 값을 바꿔라
}