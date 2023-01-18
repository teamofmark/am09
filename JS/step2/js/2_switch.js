/*
?switch
switch는 조건식의 결과가 case에 걸리는 경우, 비교할때 사용한다.
( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// *case. 1 기본문법

function switchGrammar(){
    var input = Number(prompt('숫자를 입력하라.', '숫자'));
    
    switch(input%2){
        case 0:
            alert("짝수입니다.");
            break; //? break: 해당logic종료.
        case 1:
            alert("홀수입니다.");
            break;
        default: //? if else
            alert("숫자가 아닙니다.");
            break;
    }
}
// todo. 복권 (1입력 = 1등10억, 2입력 = 2등 5천, 3입력 = 3등 300만원, 외 입력 = 낙첨되었습니다.)

function lotto(){
    var numbValue = window.prompt("입력하실번호는?");

    switch(numbValue){
        case "1":
            alert("1등 10억!");
            break;
        case "2":
            alert("2등 5천!");
            break;
        case "3":
            alert("3등 300만!");
            break;
        default :
            alert("낙첨되었습니다.");
            break;
    }
}

// *case. 2 switch문을 이용한 기본사칙연산기
function calculator(){
    var firstNumb = window.prompt("첫번째 숫자를 입력하세요.");
    var operator = window.prompt("사칙연산자중 하나를 입력하세요.(+,-,*,/)");
    var lastNumb = window.prompt("두번째 숫자를 입력하세요");

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
            alert("잘못된 값이 입력되었습니다.");
            break;
    }
    
}