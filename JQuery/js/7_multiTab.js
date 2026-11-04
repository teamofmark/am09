$(document).ready(function(){
    tabMenu("#tabMenuDepth0 li");
    tabMenu("#tabMenuDepth1 li");
});
function tabMenu(tabNumb){
    var $selectMenu = null;
    $(tabNumb).click(function(){
        if($selectMenu != null){
            $selectMenu.removeClass("activated");
        }
        $selectMenu = $(this);
        $selectMenu.addClass("activated");
    });
}