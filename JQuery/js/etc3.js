$(document).ready(function(){
    toggle();
    toggleMenu();
});
function toggle(){
    var $checkTarget = $(".ico.check");
    $(".label").click(function(){
        $checkTarget.toggleClass("fas fa-check");
    });
}
function toggleMenu(){
    var $menuTarget = $(".material-icons.menu");
    var menuStatus = false;

    $menuTarget.click(function(){
        menuStatus = !menuStatus;

        if(menuStatus==true){
            $menuTarget.text("menu_open");
        }else{
            $menuTarget.text("menu");
        }
    });
}