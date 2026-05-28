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
        if(checkStatus == true){
            $checkTarget.text("check_box");
            // ? text를 변경할수있는 JQuery 함수... text() -> text불러와. text("blabla") -> text 내용을 blabla로 바꿔.
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}
function toggleTodo(){
    // todo. text() -> text를 불러오거나 수정할때
    // todo.  attr([attr이름],[attr값]) -> attr('type','password') -> attr '이름'의 '값'을 넣어라.
    var $toggleTarget = $(".material-icons.toggleVisible");
    var $toggleInput = $("#userPW");
    var toggleStatus = false;
    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $toggleTarget.text('visibility');
            $toggleInput.attr('type','text');
        }else{
            $toggleTarget.text('visibility_off');
            $toggleInput.attr('type','password');
        }
    });
}