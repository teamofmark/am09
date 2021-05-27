$(document).ready(function(){
    tabUI();
    toggle();
    toggleMenu();
    todoMaterial();
});
function toggle(){
    var $checkTarget = $('.ico.check');

    $('.label').click(function(){
        $checkTarget.toggleClass('fas fa-check');
    });
}

function toggleMenu(){
    var $menuTarget = $('.material-icons.menu');
    var menuStatus = false;

    $($menuTarget).click(function(){
        menuStatus = !menuStatus;
        if(menuStatus==true){
            $menuTarget.text('menu_open');
        }else{
            $menuTarget.text('menu');
        }
    });
}
function todoMaterial(){
    // todo. 자신이 원하는 material-icons를 가져다 사용해보기.
}

function tabUI(){
    $('.tabMenu li').click(function(){
        var activeTab = $(this).attr('data-tabNumb');
        $('.tabMenu li').removeClass('activated');
        $(this).addClass('activated');

        $('.tabPage').removeClass('activated');
        $('#'+activeTab).addClass('activated');
    });
}