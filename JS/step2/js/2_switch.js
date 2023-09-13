/*
    ?switch
    switch는 조건식의 결과가 case에 걸리는 경우, 비교할때 사용한다.
    ( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// *case. 1 문법
function switchGrammar(){
    var input = Number(prompt('숫자를 입력하라', '숫자')) % 2;
    
    switch(input){
        case 0:
            alert('짝수입니다.');
            break;
        case 1:
            alert('홀수입니다.');
            break;
        default:
            alert('숫자가 아닙니다.');
            break;
    }
}
// *case. 2 lotto과제를 switch로 변경
function lotto(){
    var numbValue = prompt("입력하실번호는?");
    switch(numbValue){
        case "1":
            alert("1등 10억!");
            break;
        case "2":
            alert("2등 5천만원!");
            break;
        case "3":
            alert("3등 300만원!");
            break;
        default:
            alert("낙첨되었습니다.");
            break;
    }
}
// todo. switch문을 이용한 계산기
//? 첫번째 숫자 와 연산자 와 두번째 숫자를 입력받아 계산해주는 계산기
function calculator(){
    var firstNumb = window.prompt("첫번째 숫자를 입력하세요.");
    var operator = window.prompt("사칙연산자중 하나를 입력하세요.(+,-,*,/)");
    var lastNumb = window.prompt("두번째 숫자를 입력하세요.");
    // ?선언부

    firstNumb = Number(firstNumb);
    lastNumb = Number(lastNumb);
        // ? 자료형처리

    switch(operator){
        case "+":
            console.log(firstNumb + lastNumb);
            break;
        case "-":
            console.log(firstNumb - lastNumb);
            break;
        case "*":
            console.log(firstNumb * lastNumb);
            break;
        case "/":
            console.log(firstNumb/lastNumb);
            break;
        default:
            console.log("잘못된 값이 입력되었습니다.");
            break;
    }
    // ?처리부
}