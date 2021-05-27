$(document).ready(function(){
    tabUI();
});

function tabUI(){
    $('.tabMenu li').click(function(){
        var activeTab = $(this).attr('data-tabNumb');
        $('.tabMenu li').removeClass('activated');
        $(this).addClass('activated');

        $('.tabPage').removeClass('activated');
        $('#'+activeTab).addClass('activated');
    });
}