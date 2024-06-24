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
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}

function toggleTodo(){
    // todo. 1 사용할 변수 선언
    var $toggleTarget = $(".material-icons.toggleVisible");
    var $toggleInput = $("#userPW");
    var toggleStatus = false;

    // todo. 2 처리(이벤트 > 바뀌었을 때(after) : 바뀌기 전(before))
    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            // todo. 3 icon이름 찾아서 text함수로 변경 / type 변경 -> .attr()
            // ? attr -  attr(); - 모든 attr반환. / attr(attrName) - 지정된 attr값 불러오기 / attr(attrName,attrValue) - 지정된 attr의 값을 value로 바꿔라.
            $toggleTarget.text("visibility");
            $toggleInput.attr("type","text");
        }else{
            $toggleTarget.text("visibility_off");
            $toggleInput.attr("type","password");
        }
    });
}