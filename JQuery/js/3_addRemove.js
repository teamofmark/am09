$(document).ready(function(){
    toggleCheck();
    // todo. toggleRadio 만들어보기
    toggleTodo();
    tabUI(".tabMenu li","data-tabNumb");
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
function toggleTodo(){
    var $toggleTarget = $(".material-icons.toggleVisible");
    var toggleStatus = false;

    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $toggleTarget.text("visibility");
            $("#userPW").attr("type","text");
        }else{
            $toggleTarget.text("visibility_off");
            $("#userPW").attr("type","password");
        }
    });
}
function tabUI(btn,target){
    $(btn).click(function(){
        var activeTab = $(this).attr(target);
        console.log(activeTab);
        
        $(btn).removeClass("activated");
        $(this).addClass("activated");

        $(".tabPage").removeClass("activated");
        $("#" + activeTab).addClass("activated");
    });
}