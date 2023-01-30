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
            $checkTarget.text("check_box"); //? ex> text() -> text불러와. text("blabla") -> text 내용을 blabla로 바꿔.
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });  
}

function toggleTodo(){
    var $toggleTarget = $('.material-icons.toggleVisible');
    var $toggleInput = $("#userPW");
    var toggleStatus = false;
    
    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $toggleTarget.text('visibility');
            $toggleInput.attr("type","text");
        }else{
            $toggleTarget.text('visibility_off');
            $toggleInput.attr("type","password");
        }
    });
}