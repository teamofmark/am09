/*
?switch
switch는 조건식의 결과가 case에 걸리는 경우, 비교할때 사용한다.
( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// case.1 문법
function switchGrammar(){
    var input = Number(prompt('숫자를 입력하라'));
    switch(input % 2){
        case 0:
            alert("짝수");
            break;
        case 1:
            alert("홀수");
            break;
        default:
            alert("잘못 입력된 값");
            break;
    }
}
// todo. if에서 풀었던 lotto과제를 switch문법으로 변형 해보라.
function lotto(){
    var numbValue = prompt("입력하실번호는?");
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
        default :
            alert("낙첨되었습니다.");
            break;
    }
}
// case.2 switch문을 이용한 계산기
function calculator(){
    var firstNumb = Number(prompt("첫번째 숫자를 입력하세요."));
    var operator = prompt("사칙연산자중 하나를 입력하세요.(+,-,*,/)");
    var lastNumb = Number(prompt("두번째 숫자를 입력하세요."));

    switch(operator){
        case "+":
            console.log(firstNumb + operator + lastNumb + " = " + (firstNumb+lastNumb));
            break;
        case "-":
            console.log(firstNumb + operator + lastNumb + " = " + (firstNumb-lastNumb));
            break;
        case "*":
            console.log(firstNumb + operator + lastNumb + " = " + (firstNumb*lastNumb));
            break;
        case "/":
            console.log(firstNumb + operator + lastNumb + " = " + (firstNumb/lastNumb));
            break;
        default:
            console.log("입력된 값에 오류가 있습니다.");
            break;
    }
    
}