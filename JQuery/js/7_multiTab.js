$(document).ready(function(){
    tabMenu("#tabMenuDepth1 li");
    tabMenu("#tabMenuDepth2 li");
    tabMenu("#tabMenuDepth3 li");
});
function tabMenu(tabNumb){
    var $selectMenu = null;

    $(tabNumb).click(function(){ //? closureFunction  - 내부에서 selectMenu라는 외부 변수를 사용중.
        if($selectMenu != null){
            $selectMenu.removeClass("activated");// ? null이 아닐때가 곧 최소 한번은 실행된 상황 이란얘기?
        }
        $selectMenu = $(this);
        $selectMenu.addClass("activated");
    });
}