
/*
?switch
switch는 조건식의 결과가 case에 걸리는 경우, 비교할때 사용한다.
( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// *case.1 기본문법 - 홀,짝구분
function switchGrammar(){
    var input = Number(prompt('숫자를 입력하라', '숫자'));
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
// *case.2 lotto 과제를 switch로
function lotto(){
    var numbValue = window.prompt("입력하실번호는?");
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
// todo. switch로 만드는 간단한 계산기
function calculator(){
    var firstNumb = window.prompt("첫번째 숫자를 입력하세요.");
    var operator = window.prompt("사칙연산자중 하나를 입력하세요.(+,-,*,/)");
    var lastNumb = window.prompt("두번째 숫자를 입력하세요.");

    // todo.1 prompt를 통해 들어오는 문자형을 숫자형으로 변환 단계
    firstNumb = Number(firstNumb);
    lastNumb = Number(lastNumb);

    // console.log(typeof(firstNumb));
    // console.log(typeof(lastNumb));
    // todo.2 switch문을 작성하여 계산기가 작동되게하기
    // ? alert(값) (ex>2+1을 입력했을 때 3만 출력)
    switch (operator) {
        case "+":
            alert(firstNumb+lastNumb);
            break;
        case "-":
            alert(firstNumb-lastNumb);
            break;
        case "*":
            alert(firstNumb*lastNumb);
            break;
        case "/":
            alert(firstNumb/lastNumb);
            break;
        default:
            alert("잘못된 값이 입력되었습니다.");
            break;
    }
}