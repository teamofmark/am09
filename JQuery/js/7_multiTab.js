$(document).ready(function(){
    tabMenu("#tabMenuDepth0 li");
    tabMenu("#tabMenuDepth1 li");
});
function tabMenu(tabNumb){
    var $selectMenu = null;

    $(tabNumb).click(function(){ 
        // ? closureFunction(클로저함수) - 내부에서 외부변수를 사용중.
        if($selectMenu != null){
            $selectMenu.removeClass("activated");
        }
        $selectMenu = $(this);
        $selectMenu.addClass("activated");
    });
}

// var $selectMenu = null;

// function tabMenu(tabNumb){

//     $(tabNumb).click(tabEvent);
// }
// function tabEvent(){ 
//     if($selectMenu != null){
//         $selectMenu.removeClass("activated");
//     }
//     $selectMenu = $(this);
//     $selectMenu.addClass("activated");
// }