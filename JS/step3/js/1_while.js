/*
    ? while
    while 반복문은 조건이 참일 경우 무한 반복한다.
    (물론 조건이 정해진다면 for문 처럼도 사용 가능하지만, 
        용도를 구분지어 사용하는 것이 좋다.)
    정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리, 파일 읽고쓰기 및 
    전송(java,php...), DB데이터 출력하기.

*/

// *case.1 password "1234"가 입력되면 '접속승인', 아니면 '잘못 입력하였습니다.' 후 맞을 때까지 되묻기.
function pwCheck(){
    while(true){
        var value = window.prompt("패스워드를 입력하세요.");
        if(value == 1234){
            alert("접속승인");
            document.write("방문을 환영합니다.");
            break;
        }else{
            alert("잘못 입력하였습니다.");
        }
    }
}
// *case.2 while Continue
function whileContinue(){
    var i = 1;
    while(i<=10){ //? 총 10회 반복
        i++;//? i 초기값부터 10번증가
        continue;//? for문과 마찬가지로 continue로 인해 아래 로직 수행 불가.
        document.write(i + '<br>');
    }
    document.write('최종 i =' + i + '<br>');//? 최종결과만 출력.
}
//* exp.3 while Break
function whileBreak(){
    var i = 1;
    while(i<=10){//? 총 10회 반복
        break;//? for문과 마찬가지로 break로 인해 루프 실행불가.
        i++;
        document.write(i+"<br>");
    }
    document.write("최종 i = "+ i + "<br>"); //? 최종결과만 출력.
}