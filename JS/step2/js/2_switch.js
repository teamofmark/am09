
/*
?switch
switch는 조건식의 결과가 case에 걸리는 경우, 비교할때 사용한다.
( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)

key : 값을 전달받거나 변형 시킬수 있다. 
ex> a(var) ->key(전달)
a % 2 (변형)

case : 위에서 전달된 key값과 일치하는 지 비교하는 부분 
ex> case 0 -> 위에서 전달된 값이 0인지를 판단 하는 부분 
0이 아니다 -> 다음 case로 넘김.

break : switch는 if와 다르게 한번 실행되면 모든 case를 다 훑게 되어 있기 때문에(그값이 걸리던 안걸리던..) 수동으로 멈춰야 하는데 그것이 break; 
break는 switch 전유가 아님. 아무데나 쓸수 있음.

default : 위 case에 걸리지 못한 값 (예외처리)일 때  실행 되는 부분
*/
// case.1 기본문법
function switchGrammar(){
    var input = Number(prompt("숫자만 입력"));
    switch (input %2) {
        case 0:
            alert("짝수입니다");
            break;
        case 1:
            alert("홀수 입니다.");
            break;
        default:
            alert("숫자가 아닙니다.");
            break;
    }
}
// case.2 lotto과제를 switch로 변경.
function lotto(){
    var numbValue = prompt("입력하실 번호는?");
    switch (numbValue) {
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
// ? 첫번째 숫자와 연산자, 그리고 두번째 숫자를 입력받아 계산해주는 계산기
function calculator(){
    /*
        todo.
        1. 함수실행시 첫 번째 숫자를 입력받는 프롬프트 출력.
        2. 첫 번째 숫자를 입력하면 연산자를 입력받는 프롬프트 출력.(단, % 나머지 연산자 제외 = 사칙연산만)
        3. 연산자 입력하면 두 번째 숫자를 입력받는 프롬프트 출력.
        4. 1,2,3 모두가 입력되면 수식과 답을 console에 출력. ( ex> 10+10 = 20)
    */
    var firstNumb = Number(prompt('첫번째 숫자를 입력하세요.'));
    var operator = prompt("연산자를 입력하세요");
    var lastNumb = Number(prompt('두번째 숫자를 입력하세요.'));
    
    switch(operator){
        case "+":
            console.log(firstNumb + operator + lastNumb + "=" + (firstNumb + lastNumb));
            break;
        case "-":
            console.log(firstNumb + operator + lastNumb + "=" + (firstNumb - lastNumb));
            break;
        case "x":
            console.log(firstNumb + operator + lastNumb + "=" + (firstNumb * lastNumb));
            break;
        case "/":
            console.log(firstNumb + operator + lastNumb + "=" + (firstNumb / lastNumb));
            break;
        default :
            alert("올바른 연산자가 아닙니다.");
            break;
    }
}