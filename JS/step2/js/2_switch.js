
/*
?switch
switch는 조건식의 결과가 case에 걸리는 경우, 비교할때 사용한다.
( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// case. 1 문법 (홀,짝 구분)

function switchGrammar(){
    var input = Number(prompt('숫자를 입력하라.'));
    // if(input%2==0){

    // }
    switch(input%2){
        case 0:
            alert("짝수입니다.");
            break;
        case 1:
            alert("홀수입니다.");
            break;
        default:
            alert("숫자가 아닙니다."); 
            break;
    }
}
// case.2 입력된 숫자에 따른 결과값을 출력하자. (1 -> 1등 10억!, 2 -> 2등 5천만원!, 3 -> 3등 300만원!, 외 낙첨)
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
// ? 첫번째 숫자와 연산자, 그리고 두번째 숫자를 입력받아 계산해주는 계산기
function calculator(){
    var firstNumb = Number(prompt("첫번째 숫자를 입력하세요."));
    var operator = prompt("사칙연산 연산자중 하나를 입력하세요.(+,-,*,/)");
    var lastNumb = Number(prompt("두번째 숫자를 입력하세요."));
    var result = 0;
    // todo switch
    // ? keyValue의 조건은 반드시 중에하나 이거나 하나 인 식으로 명확해야 함.
    switch(operator){
        case "+":
            result = (firstNumb+lastNumb);
            alert('두 수의 합은' + result);
            break;
        case "-":
            alert('두 수의 차는' + (firstNumb-lastNumb));
            break;
        case "*":
            alert('두 수의 곱은' + (firstNumb*lastNumb));
            break;
        case "/":
            alert('두 수의 나눔은' + (firstNumb/lastNumb));
            break;
        default:
            alert('잘못된 값이 입력되었습니다.');
            break;

    }

}