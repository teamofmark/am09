/*
    ? while
    while 반복문은 조건이 참일 경우 무한 반복한다.
    (물론 조건이 정해진다면 for문 처럼도 사용 가능하지만,  용도를 구분지어 사용하는 것이 좋다.)
    정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리, 파일 읽고쓰기 및 
    전송(java,php...), DB데이터 출력하기.
*/
// case. 1 패스워드 '1234'가 입력되면 '접속승인'->끝 아니면 '잘못입력하셨습니다.'->반복
function pwCheck(){
    while(true){
        var value = window.prompt("비밀번호를 입력하세요.");
        if(value == 1234){ //?value == 1234 면 중단.
            alert("접속승인");
            break;
        }else{
            alert("잘못입력하셨습니다.");
        }
    }
}
//* exp.2 while Continue
function whileContinue(){
    var i=1;
    while(i<=10){ //? 총 10회 반복
        i++; //? i 초기값부터 10번증가
        continue; //? for문과 마찬가지로 continue로 인해 아래 로직 수행 불가.

        document.write(i+"<br>");
    }
    document.write("최종 i = "+ i + "<br>"); //? 최종결과만 출력.
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
//todo. end가 입력될 때 까지 숫자를 계속해서 입력받아 입력값 합을 출력하고, prompt에는 몇번 수행 했는가에 대한 "x 번째 입력" 이 표시되야함. 
function sumNumb(){
    var i = 1; //? 카운트 변수
    var result = 0; //? 결과를 담을 변수
    while(true){
        var numb = window.prompt(i + "번째 입력"); //? 무한루프로 입력받는 부분
        if(numb=="end"){//? esc- end라는 값이 입력되면
            alert("입력이 종료되었습니다.");
            break; //? loop 죽이고 종료 경고창 출력
        }else if(numb=="" || numb == " "){ //? 예외처리부 - 후에는 pattern 등을 이용.
            alert("입력된 값이 잘못되었습니다. 다시 입력하세요.");
        }
        result += Number(numb); //? 결과변수에 형변환후 더해서 저장
        document.write("현재까지의 총합 : " + result + "<br>"); //? 저장되는 result 출력
        i++; //? 수행완료시 카운트 증가.
    }
}