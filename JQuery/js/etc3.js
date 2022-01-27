$(document).ready(function(){
    toggleMenu();
    tabUI();
});

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

function tabUI(){
    $(".tabMenu li").click(function(){
        var activeTab = $(this).attr("data-tabNumb");
        // console.log(activeTab);
        $(".tabMenu li").removeClass("activated");
        $(this).addClass("activated");

        $(".tabPage").removeClass("activated");
        $("#"+activeTab).addClass("activated");
    });
}