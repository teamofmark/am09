/*
    ? while
    while 반복문은 조건이 참일 경우 무한 반복한다.
    (물론 조건이 정해진다면 for문 처럼도 사용 가능하지만, 용도를 구분지어 사용하는 것이 좋다.)
    정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리, 파일 읽고쓰기 및 
    전송(java,php...), DB데이터 출력하기.

*/
// case.1 password '1234'가 입력되면 '접속승인', 아니면 '잘못입력하였습니다.'
function pwCheck(){
    while(true){
        var value = prompt("패스워드를 입력하세요.");
        if(value==1234){
            alert('접속승인!');
            break;
        }else{
            alert("잘못입력하였습니다.");
        }
    }
}
// case.2 whileContinue
function whileContinue(){
    var i = 1;
    while(i<=10){ //? 총 10회 반복
        i++; //? i 초기값부터 10번증가
        continue; //? for문과 마찬가지로 continue로 인해 이하 로직수행불가.
        document.write(i + '<br>');
    }
    document.write("최종 i =" + i + '<br>');
}
// case.3 while Break
function whileBreak(){
    var i = 1;
    while(i<=10){
        i++;
        break;
        document.write(i + '<br>');
    }
    document.write("최종 i = " + i + "<br>");
}

// todo 구구단 출력 while loop.
// ! 1 ~ 9 까지만 입력될 수 있게 / 이상이 입력될 경우 '9단 이하로 입력하세요' 메시지 출력
function gugudan(){
    var guguNumb = prompt('구구단 숫자를 입력(1~9까지)');
    var i = 1;
    if(guguNumb <= 9){
        while(i <= 9){
            document.write(guguNumb + ' x ' + i + ' = ' + guguNumb * i + '<br>');
            i++;
        }
    }else{
        alert('9단 이하로 입력하세요.');
    }
    /*
    while(i <= 9){
        if(guguNumb > 9){
            alert('9단 이하로 입력하세요');
            break;
        }
        document.write(guguNumb + ' x ' + i + ' = ' + guguNumb * i + '<br>');
        i++;
    }*/
}
// todo. end가 입력될 때 까지 숫자를 계속해서 입력받아 입력값 합을 출력하기.
// ! prompt에는 실행한 횟수가 출력되야함(x번째 입력중)
function sumNumb(){
    var i = 1; //? 카운트 변수
    var result = 0; //? 결과를 담을 변수
    while(true){
        var numb = window.prompt(i+"번째 입력"); //? 무한 루프로 입력받기.
        if(numb=="end"){ //? end 라는 값과 일치하면
            alert('입력이 종료되었습니다.');
            break; //? 루프 중단 및 종료alert 출력
        }else if(numb == "" || numb == " "){
            alert("입력된 값이 잘못되었습니다. 다시 입력하세요.");
        }
        result += parseInt(numb); //? 결과변수에 형변환후 더해서 저장.
        document.write("현재까지의 총합 : " + result + "<br>"); //? 저장된 result 값을 출력.
        i++; //? 수행할 때마다 카운트 중가.
    }
}