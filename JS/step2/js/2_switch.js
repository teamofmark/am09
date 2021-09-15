
/*
    ?switch
    switch는 딱딱 떨어지는 값의 조건을 비교할때 사용한다.
    ( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
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
            alert("숫자가 아닙니다.");
            break;
    }
}

// *case.2 복권과제 switch로 변경
function lotto(){
    var numbValue = window.prompt("입력하실 번호는?");

    switch(numbValue){
        case "1":
            alert("1등 10억");
            break;
        case "2":
            alert("2등 5천");
            break;
        case "3":
            alert("3등 300");
            break;
        default:
            alert("낙첨");
            break;
    }
}
// todo.1 switch 문을 이용한 계산기
//? 첫번째 숫자와 연산자, 그리고 두번째 숫자를 입력받아 계산해주는 계산기.
function calculator(){
    // ? 첫번째숫자, 연산자, 두번째숫자 입력받아야함.
    var firstNumb = window.prompt("첫번째 숫자를 입력");
    var operator = window.prompt("사칙연산자중 하나를 입력");
    var lastNumb = window.prompt("두번째 숫자를 입력");

    // ? 뭔가있어야될걸...?
    firstNumb = parseInt(firstNumb);
    lastNumb = parseInt(lastNumb);

    // ? switch 조건처리부
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