$(document).ready(function(){
    // *case. 1
    toggleCheck();
    // todo.
    toggleTodo();
    // *case. 2
    tabUI();
});
function toggleCheck(){
    var $checkTarget = $(".material-icons.checkIco");
    var $checkLabel = $(".label.checkLabel");
    var checkStatus = false;

    $checkLabel.click(function(){
        checkStatus = !checkStatus;
        console.log(checkStatus);
        if(checkStatus == true){
            $checkTarget.text("check_box"); //? target.text(); -> 대상 "글자" 불러와. / target.text("check_box") -> 대상 "글자" "check_box"로 바꿔.
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}

function toggleTodo(){
    // ? target.attr("type"); -> 대상의 type 값을 가져와라 / target.attr("type","변경사항") -> 대상의 type값을 "변경사항"으로 바꿔라.
    // * img.attr("src") = https://.. , img.attr("src","via.placeholder") = src에 via.placeholder를넣어라.
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
}
function tabUI(){
    $(".tabMenu li").click(function(){
        // var activeTab = $(this).attr("data-tabNumb");
        var activeTab = "#" + $(this).text();
        // console.log(activeTab);
        $(".tabMenu li").removeClass("activated");
        $(this).addClass("activated");

        $(".tabPage").removeClass("activated");
        $(activeTab).addClass("activated");
    });
}