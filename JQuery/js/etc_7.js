$(document).ready(function(){
    tabMenu('#tabMenuDepth1 li');
    tabMenu('#tabMenuDepth2 li');
});
function tabMenu(tabNumb){
    var $selectMenu = null;

    $(tabNumb).click(function(){
        if($selectMenu != null){
            $selectMenu.removeClass('activated');
        }
        $selectMenu = $(this);
        $selectMenu.addClass('activated');
    });
}