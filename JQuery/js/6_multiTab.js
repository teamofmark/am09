$(document).ready(function(){
    tabMenu("#tabMenuDepth0 li");
    tabMenu("#tabMenuDepth1 li");
    tabMenu("#tabMenuDepth2 li");
});
function tabMenu(tabNumb){
    var $selectMenu = null; //? null - element(Tag's)를 넣을 예정
    $(tabNumb).click(function(){
        // ? closureEffect(function) - 클로저 함수. = 함수가 실행된 이후 내부 값을 외부로 보내 사라지지 않게함.
        if($selectMenu != null){ //? = 대상이 담긴 상태.(#tabMenuDepth0 li중 하나)
            $selectMenu.removeClass("activated");
        }
        $selectMenu = $(this);
        $selectMenu.addClass("activated");
    });
}