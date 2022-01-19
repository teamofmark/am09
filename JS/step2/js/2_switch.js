/*
    ? switch
    * switch는 if와 달리 case로 구분되어 딱 떨어지는 조건을 찾을때 사용한다.
*/

// *case.1 문법
function switchGrammar(){
    var input = Number(prompt('숫자만 입력'));

    // switch
    switch(input % 2){
        case 0:
            alert('짝수!');
            break;
        case 1:
            alert('홀수!');
            break;
        default:
            alert('숫자입력하라했다.');
            break;
    }
}
// todo. 숫자 1을 입력 받았을 때 "1등 10억!", 2를 입력 받았을 때 "2등 5천만원!", 3은 "3등 300만원", 그외 "낙첨쏘리"

function lotto(){
    var numbValue = window.prompt('입력하실 번호는?');

    switch(numbValue){
        case "1":
            alert("1등 10억!");
            break;
        case "2":
            alert("2등 5천!");
            break;
        case "3":
            alert("3등 3백!");
            break;
        default:
            alert("낙첨되었습니다.");
            break;
    }
}
// *case.2 계산기
// ? 첫번째 숫자와 연산자, 두번째 숫자를 입력받아 계산해주는 계산기
function calculator(){
    var firstNumb = window.prompt("첫번째 숫자 입력");
    var operator = window.prompt("사칙연산 연산자중 하나를 입력하세요.(+,-,*,/)");
    var lastNumb = window.prompt("두번째 숫자 입력");

    // *형변환
    firstNumb = parseInt(firstNumb);
    lastNumb = parseInt(lastNumb);

    switch(operator){
        case "+":
            alert(firstNumb + lastNumb);
            break;
        case "-":
            alert(firstNumb - lastNumb);
            break;
        case "*":
            alert(firstNumb * lastNumb);
            break;
        case "/":
            alert(firstNumb / lastNumb);
            break;
        default:
            alert("연산이 불가능합니다.");
            break;
    }
}