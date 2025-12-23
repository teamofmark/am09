/*
    ? while
    while 반복문은 조건이 참일 경우 무한 반복한다.
    (물론 조건이 정해진다면 for문 처럼도 사용 가능하지만, 
        용도를 구분지어 사용하는 것이 좋다.)
    정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리, 파일 읽고쓰기 및 
    전송(java,php...), DB데이터 출력하기.

    ? do while
    do while 반복문은 조건이 참이든 거짓이든 한번은 무조건 실행 하는 반복문이다.
    value가 5보다 작을때까지 총 ( 0,1,2,3,4 ) 5번의 얼럿을 띄운다.
*/

// case.1 password가 1234면 접속 승인, 아니면 잘못입력하였습니다. 무한 체크
function pwCheck(){
    while(true){
        var value = window.prompt("패스워드를 입력하세요.");
        if(value == 1234){
            alert('접속승인');
            break;
        }else{
            alert('잘못입력하였습니다.');
        }
    }
}
// case.2 구구단 숫자를 입력받아 출력하는 while문
function gugudan(){
    var guguNumb = prompt('구구단 숫자를 입력하시오 (1~9)');
    var i = 1;
    /*
    if(guguNumb <= 9){
        while(i <= 9){
            document.write(guguNumb + 'x' + i + '=' + guguNumb*i + '<br>');
            i++;
        }
    }else{
        alert('9단 이하로 입력하세요.')
    }
    */
   while(i <= 9){
        if(guguNumb > 9){
            alert('9단 이하로 입력하세요');
            break;
        }
        document.write(guguNumb + 'x' + i + '=' + guguNumb*i + '<br>');
        i++;
   }
    
}
// todo. 문자열 "end"가 입력 될 때까지 숫자를 계속해서 입력받아 더하고 그 합을 출력하며 몇번 수행 했는지 여부도 'x 번째 입력'으로 표시 되어야 하는 함수
function sumNumb(){
    var i = 1;// ? 횟수 = 카운트 변수 = for 의 i와 같은역할
    var result = 0;// ? 결과를 담을 변수
    while(true){// ? 조건부 무한반복 시작
        var numb = prompt(i+"번째 입력");// ? 무한으로 입력받기 - prompt 별도의 변수에 저장(숫자)을 해야함
        if(numb=="end"){// ? break = end와 값이 같다면
            alert("입력이 종료되었습니다.");
            break;
        }else if(numb.trim() ==="" || isNaN(Number(numb))){// ? 외 나머지 상황 일땐 예외처리 - ex>입력된 값이 잘못되었습니다. 다시 반복 수행
            // trim() = 공백정리함수 - 앞,뒤공백모두제거 | isNaN = 대상이 숫자가 아니면 true, 숫자면 false
            alert('입력된 값이 잘못되었습니다. 다시입력하세요.');
            continue;
        }
        result += parseInt(numb);// ? 위 무한으로 입력받는 부분의 숫자를 형변환하여 무한반복 위쪽에 결과를 담을 변수에 저장
        document.write("현재까지의 총합 : " + result + "<br>");// ? 저장된 결과 변수 출력부 - document.write
        i++;// ? 횟수 = 카운트변수를 증가.
    }
}