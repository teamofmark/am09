$(document).ready(function(){
    // addRemove();
    toggle();
});

function addRemove(){
    var $checkTarget = $(".ico.check");
    var clickStatus = false;

    $(".label").click(function(){
        clickStatus = !clickStatus;

        if(clickStatus == true){
            $checkTarget.addClass("fas fa-check");
        }else{
            $checkTarget.removeClass("fas fa-check");
        }
    });
}
function toggle(){
    var $checkTarget = $(".ico.check");
    $(".label").click(function(){
        $checkTarget.toggleClass("fas fa-check");
    });
}