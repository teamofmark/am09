/*
    ? while
    while 반복문은 조건이 참일 경우 무한 반복한다.
    (물론 조건이 정해진다면 for문 처럼도 사용 가능하지만, 
        용도를 구분지어 사용하는 것이 좋다.)
    정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리, 파일 읽고쓰기 및 
    전송(java,php...), DB데이터 출력하기.
*/
// *case. 1 password가 '1234'로 입력되면 '접속승인', 아니면 '잘못입력하였습니다.' 무한출력.

function pwCheck(){
    while(true){
        var value = window.prompt('password를 입력하세요.');
        if(value == 1234){
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
    while(i <= 10){ //? 총 10회 반복.
        i++; //? 초기값 1부터 1씩증가
        continue;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}

// *case. 3 while Break
function whileBreak(){
    var i = 1;
    while(i<=10){
        document.write(i + "<br>");
        i++;
        break;
    }
    document.write("최종 i = " + i + "<br>");
}

// todo. end가 입력될 때까지 숫자를 입력받고 합을 출력. prompt에는 몇번 수행중인지 count 표시.
