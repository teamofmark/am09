// *case.1 pw '1234'가 입력되면 '접속승인', 아니면 '잘못입력하였습니다.'
function pwCheck(){
    while(true){
        var value = window.prompt('password를 입력하세요.');

        if(value==1234){
            alert('접속승인');
            break; 
        }else{
            alert('잘못입력하였습니다.');
        }
    }
}
// *case. 2 while Continue
function whileContinue(){
    var i = 1;
    while(i<=10){ //? 총 10회 반복
        i++;
        continue;
        document.write(i+'<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}

// *case. 3 while Break