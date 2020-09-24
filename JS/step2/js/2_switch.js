
/*
?switch
switch는 딱딱 떨어지는 값의 조건을 비교할때 사용한다.
( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// *exp.1 문법 (홀,짝판별)
function switchGrammar(){
    var input = Number(prompt('숫자를입력해라!','숫자'));

    // 조건문
    switch(input % 2){
        case 0:
            alert('짝수!');
            break;
        case 1:
            alert('홀수!');
            break;
        default:
            alert('숫자아님!');
            break;
    }
}

// *exp.2 lotto 과제를 switch로 변경

function lotto(){
    var numbValue = window.prompt("입력하실번호는?");

    switch (numbValue){
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
//todo.1 switch 문을 이용한 계산기
function calculator(){
    var firstNumb = window.prompt("첫번째 숫자 입력"); 
    var operator = window.prompt("사칙연산자중 하나입력(+,-,*,/)");
    var lastNumb = window.prompt("두번째 숫자 입력");
    // 입력부

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
            alert('연산할 수 없습니다.');
            break;
    }

}