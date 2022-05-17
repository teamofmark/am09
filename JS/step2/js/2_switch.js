/*
    ? switch
    * switch는 딱딱 떨어지는 값(case)의 조건을 가지고 실행 할 때 사용된다.
*/
// *case.1 기본문법
function switchGrammar(){
    var input = Number(prompt('숫자를 입력하라', '숫자')); //? 입력부를 바로 형변환.
    
    // ? switch - 짝수,홀수 구분
    switch(input % 2){
        case 0:
            alert("짝수!");
            break;
        case 1:
            alert("홀수!");
            break;
        default:
            alert("숫자아님.");
            break;
    }
}

// *case.2 lotto 과제를 switch로 변경
function lotto(){
    var numbValue = window.prompt("입력하실 번호는?");

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