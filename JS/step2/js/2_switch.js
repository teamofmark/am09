
/*
?switch
switch는 딱딱 떨어지는 값의 조건을 비교할때 사용한다.
( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// *exp.1 문법
function switchGrammar(){
    var input = Number(prompt('숫자를 입력하라', '숫자'));
    
    //조건문
    switch (input % 2) {
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
