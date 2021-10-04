$(document).ready(function(){
    tabMenu("#tabMenuDepth1 li");
    tabMenu("#tabMenuDepth2 li");
});
function tabMenu(tabNumb){
    var $selectMenu = null; //? click한 tabMenu 를 저장하는 변수 

    $(tabNumb).click(function(){
        if($selectMenu != null){ //? $selectMenu 변수에 click이 일어날 시에 click 대상을 담게되면 null이 아닌상태가 된다.
            $selectMenu.removeClass("activated");
        }
        $selectMenu = $(this);
        $selectMenu.addClass("activated");
    });
}