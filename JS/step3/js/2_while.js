/*
    ? while
    while 반복문은 조건이 참일 경우 무한 반복한다.
    (물론 조건이 정해진다면 for문 처럼도 사용 가능하지만, 
        용도를 구분지어 사용하는 것이 좋다.)
    정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리, 파일 읽고쓰기 및 
    전송(java,php...), DB데이터 출력하기.
*/
// case.1 pw '1234'가 입력되면 '접속승인', 아니면 '잘못입력하셨습니다' 출력
function pwCheck(){
    while(true){
        var value = prompt('패스워드를 입력하세요.');
        if(value == 1234){
            alert('접속승인');
            break;
        }else{
            alert("잘못입력하셨습니다.");
        }
    }
}
// case.2 whileContinue
function whileContinue(){
    var i = 1;
    while(i<=10){
        i++;
        continue;
        document.write(i+"<br>");
    }
    document.write("최종 i =" + i + "<br>");
}
// case.3 whileBreak
function whileBreak(){
    var i = 1;
    while(i<=10){
        break;
        i++;
        document.write(i+"<br>");
    }
    document.write("최종 i = " + i + "<br>");
}
// todo. 구구단 숫자를 입력받아 출력하는 while문
// ? 1. 숫자입력받을 prompt 출력
// ? 2. 숫자를 입력 받으면 해당 구구단을 출력.
// ! 9단이내로만 입력받기. ex> 9단이 넘어갈 시 '9단 이하로 입력하세요.' alert출력
function gugudan(){
    var guguNumb = prompt("구구단 숫자를 입력(1~9)");
    var i = 1;
    /*
    if(guguNumb <= 9){
        while(i <= 9){
            document.write(guguNumb + 'x' + i + '=' + guguNumb*i + '<br>');
            i++;
        }
    }else{
        alert('9단 이하로 입력하세요.');
    }*/
    while(i <= 9){
        if(guguNumb > 9){
            alert('9단 이하로 입력하세요.');
            break;
        }
        document.write(guguNumb + 'x' + i + '=' + guguNumb*i + '<br>');
        i++;
    }
}

// todo. end가 입력될 때 까지 숫자를 계속 입력해서 받는데, 입력값의 총 합을 출력하고, prompt에는 몇번 수행했는지에 대한 "x"번째 입력 메시지도 표시 되야함.

function sumNumb(){
    var i = 1; //? 카운트 변수
    var result = 0; //? 매턴 마다 결과 담기
    while(true){
        var numb = prompt(i+"번째입력");

        result += parseInt(numb);
        i++;
    }
}