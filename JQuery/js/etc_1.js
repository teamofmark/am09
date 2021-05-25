$(document).ready(function(){
    var $divs = $('div');
    $divs.css('color','#00f');

    // *case. 2
    sayHello();
    
    // *case. 3
    addBorder();

    // todo. 1
    textChange();
});

// *case. 2
function sayHello(){
    $('#btnCheck').click(function(){
        alert('안녕');
    });
}

// *case. 3
function addBorder(){
    $('#btnAddBorder').click(function(){
        $('#panel').css('border', '5px solid black');
    });
}
// todo. 1
function textChange(){
    $('#btnTextChange').click(function(){
        // $('#panel2').css('font-size','25px');
        // $('#panel2').css('color','green');
        // $('#panel2').css('border','5px solid blue');
        $('#panel2').css({
            'font-size' : '25px',
            'color' : 'green',
            'border' : '5px solid blue'
        });
    }); 
}