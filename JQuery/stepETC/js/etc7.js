$(document).ready(function(){
    tabMenu("#tabMenuDepth0 li");
    tabMenu("#tabMenuDepth1 li");
    tabMenu("#tabMenuDepth2 li");
    tabMenu("#tabMenuDepth3 li");
});


function tabMenu(tabTarget){
    var $selectMenu = null;

    $(tabTarget).click(function(){
        if($selectMenu != null){
            $selectMenu.removeClass("activated");
        }
        $selectMenu = $(this);
        $selectMenu.addClass("activated");
    });
}