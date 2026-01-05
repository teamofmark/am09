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
        // console.log(checkStatus);
        if(checkStatus == true){
            $checkTarget.text("check_box");
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });  
}
// todo. password 만들어보기
// ! html대상의 속성을 변경하거나 불러오는 함수는 attr(); 함수이다.
function toggleTodo(){
    var $toggleTarget = $(".material-icons.toggleVisible");
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
function tabUI(){
    $(".tabMenu li").click(function(){
        var activeTab = $(this).attr("data-tabNumb");
        // console.log(activeTab);
        $(".tabMenu li").removeClass("activated");
        $(this).addClass("activated");
        $(".tabPage").removeClass("activated");
        $("#" + activeTab).addClass("activated");
    });
}