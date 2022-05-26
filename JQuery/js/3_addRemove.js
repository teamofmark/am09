$(document).ready(function(){
    toggleCheck();
    toggleTodo();
    tabUI();
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
function tabUI(){
    $(".tabMenu li").click(function(){
        var activeTab = $(this).attr("data-tabNumb");
        console.log(activeTab);

        $(".tabMenu li").removeClass("activated");
        $(this).addClass("activated");

        $(".tabPage").removeClass("activated");
        $("#" + activeTab).addClass("activated");
    });
}