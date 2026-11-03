$(document).ready(function(){
    toggleCheck();
    toggleTodo();
    tabUI();
    accControl(".accComponent li h3");
    // accControl(".accComp li h4");
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
            $toggleTarget.text('visibility');// todo. 1 눈알모양 바꾸기 (이전예제와 동일)
            $toggleInput.attr("type","text");// todo. 2 input type 변경 - ? 함수... attr이라는 함수 사용해보기.([attr-name],[attr-value])
            // ? attr([attr-name]) = 해당attr의 값을 가져와라. / attr([attr-name],[attr-value]) = 해당 attr의 값을 바꿔라.
        }else{
            $toggleTarget.text('visibility_off');
            $toggleInput.attr("type","password");
        }
    });
}
function tabUI(){
    $(".tabMenu li").click(function(){
        var activeTab = $(this).attr("data-tabNumb");
        // var txtTab = "#" + $(this).text();
        // console.log(activeTab);
        $(".tabMenu li").removeClass("activated");
        $(this).addClass("activated");
        $(".tabPage").removeClass("activated");
        $("#"+activeTab).addClass("activated");
    });
}
function accControl(target){
    $(target).click(function(){
        $(this).toggleClass("active");
        $(this).next().slideToggle();
    });
}