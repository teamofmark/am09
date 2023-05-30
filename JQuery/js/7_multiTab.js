$(function(){
    tabMenu("[id^='tabMenu'] li");
});
function tabMenu(tabNumb){
    var $selectMenu = null; //? click한 tabMenu 를 저장하는 변수 

    $(tabNumb).click(function(){ 
        //? closureFunction  - 내부에서 selectMenu라는 외부 변수를 사용중.
        if($selectMenu != null){
            $selectMenu.removeClass("activated");
        }
        $selectMenu = $(this);
        $selectMenu.addClass("activated");
    });
}
// var $selectMenu = null;
// function tabMenu(tabNumb){
//     $(tabNumb).click(clickEvent);
// }
// function clickEvent(){
//     if($selectMenu != null){
//         $selectMenu.removeClass("activated");
//     }
//     $selectMenu = $(this); 
//     $selectMenu.addClass("activated");
// }