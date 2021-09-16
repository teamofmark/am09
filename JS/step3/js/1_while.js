/*
    ? while
    while 반복문은 조건이 참일 경우 무한 반복한다.
    (물론 조건이 정해진다면 for문 처럼도 사용 가능하지만, 
        용도를 구분지어 사용하는 것이 좋다.)
    정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리, 파일 읽고쓰기 및 
    전송(java,php...), DB데이터 출력하기.
*/
// *case. 1 password '1234가 입력되면 '접속승인' 그게 아니라면 '잘못 입력하였습니다. 다시입력해주세요' 반복
function pwCheck(){
    while(true){
        var value = window.prompt("패스워드를 입력하세요.");

        if(value == 1234){
            alert("접속승인");
            break;
        }else{
            alert("패스워드가틀렸습니다. 다시 입력해주세요.");
        }
    }
}
// *case.2 while Break
function whileBreak(){
    var i = 0;
    while(i <= 10){
        i++;
        document.write(i + '<br>');
        break;
    }
    document.write('최종 i = ' + i + '<br>');
} 
// *case.3 while Continue
function whileContinue(){
    var i = 0;
    while(i<=10){
        i++;
        continue;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}