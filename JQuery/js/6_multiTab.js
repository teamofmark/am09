$(document).ready(function(){
    tabMenu("[id^='tab'] li");
    // tabMenu("#tabMenuDepth1 li");
});
function tabMenu(tabNumb){
    var $selectMenu = null; //? click이 일어난 tabMenu를 저장하는 변수

    $(tabNumb).click(function(){
        // ? closureEffect - 클로저현상 / 내부에서 selectMenu라는 외부 변수를 사용중.
        if($selectMenu != null){
            $selectMenu.removeClass("activated");
        }
        $selectMenu = $(this);
        $selectMenu.addClass("activated");
    });
}