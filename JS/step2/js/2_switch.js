
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