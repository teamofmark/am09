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

// case.1 if에서 처리했던 홀,짝수 구분을 switch화
function switchGrammar(){
    var input = Number(prompt('숫자를 입력하세요.'));

    switch(input % 2){
        case 0:
            alert("짝수!");
            break;
        case 1:
            alert("홀수!");
            break;
        default:
            alert("숫자가아님!");
            break;
    }
}
// case.2 복권의 예를 들어보자. 입력값이 1= 1등10억!,  2 = 2등 5천!, 3 = 3등 3백!, 외나머지는 낙첨...

function lotto(){
    var numbValue = window.prompt("입력하실번호는?");
    switch(numbValue){
        case "1":
            alert("1등 10억");
            break;
        case "2":
            alert("2등 5천만원!");
            break;
        case "3":
            alert("3등 300만원!");
            break;
        default:
            alert("낙첨...");
            break;
    }
}
// todo. switch 문을 이용한 계산기
function calculator(){
    var firstNumb = Number(window.prompt("첫번째 숫자를 입력하세요."));
    var operator = window.prompt("연산자를 입력하세요.");
    var lastNumb = Number(window.prompt("두번째 숫자를 입력하세요."));

    switch(operator){
        case "+":
            console.log(firstNumb + operator + lastNumb + " = " + (firstNumb + lastNumb));
            break;
        case "-":
            console.log(firstNumb + operator + lastNumb + " = " + (firstNumb - lastNumb));
            break;
        case "x":
            console.log(firstNumb + operator + lastNumb + " = " + (firstNumb * lastNumb));
            break;
        case "/":
            console.log(firstNumb + operator + lastNumb + " = " + (firstNumb / lastNumb));
            break;
        default:
            alert('올바른 연산자가 아닙니다.');
            break;
    }
}