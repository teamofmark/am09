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
// todo. 구구단 숫자를 입력받아 출력하는 while문.
// ? 1. 숫자를 입력받을 prompt 출력.
// ? 2. 숫자를 입력받으면 해당 구구단을 출력하면 된다.
// ! 9단 이내로만 입력받아야하고, 9단이 넘어갈 시 '9단 이하로 입력하세요.' alert 출력.
function gugudan(){
    var guguNumb = window.prompt('구구단 숫자를 입력 (1~9)');
    var i = 1;

    // ? 변수 -> 구구단 숫자를 입력받을 변수, 1~9까지 증가 해야하는 변수.
    
    // ? ? x 1~9 = (실제연산 ex> 2*1).

    if(guguNumb <= 9){
        while(i<=9){
            document.write(guguNumb + 'x' + i + '=' + guguNumb*i + "<br>");
            i++;
        }
    }else{
        alert('9단 이하로 입력하세요.');
    }

    // ? 1. 거짓의 조건을 if? 참의 조건을 if?
    
}
// todo. end가 입력될 때 까지 숫자를 계속해서 입력받아 입력값 합을 출력하고,
// todo. prompt에는 몇번 수행 했는가에 대한 "x 번째 입력" 이 표시되야함.

function sumNumb(){
    var i = 1; //? count Var
    var result = 0; //? 합 결과를 담을 변수.
    // ?선언부

    while(true){
        var numb = window.prompt(i + '번째 입력'); //? i가 증가될때마다 자동으로 변경되는 부분.

        if(numb == "end"){ //? end라는 값과 일치하면
            alert('입력이 종료되었습니다.');
            break; //? loop중단 및 종료 경고창 출력.
        }

        result += parseInt(numb); //? 결과변수에 형변환 후 더해서 저장.
        // ?처리부

        document.write("현재까지의 총합 : " + result + '<br>'); //? 출력부 - 저장된 result 값을 출력.
        i++; //? 잔여처리부 - 수행할 때마다 카운트 증가
    }

}

function dowhileEx(){
     //변수 선언
     var value = 0;
     //반복문
     do {
         alert(value + '번째 반복문');
         value++;
     } while (value < 5)
     /*
         do while 반복문은 조건이 참이든 거짓이든 한번은 무조건 실행 하는 반복문이다.
         value가 5보다 작을때까지 총 ( 0,1,2,3,4 ) 5번의 얼럿을 띄운다.
     */
}