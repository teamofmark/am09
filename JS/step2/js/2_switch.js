/*
    ?switch
    switch는 조건식의 결과가 case에 걸리는 경우, 비교할때 사용한다.
    ( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// *case. 1 문법
function switchGrammar(){
    var input = Number(prompt('숫자를입력해라.',''));
    switch(input % 2){
        case 0: //? true
            alert('짝수입니다.');
            break;
        case 1:
            alert('홀수입니다.');
            break;
        default:
            alert('숫자넣으라니까?');
            break;
    }
}
// todo. switch 계산기
function calculator(){
    var firstNumb = prompt("첫번째 숫자를 입력하세요.");
    var operator = prompt("사칙연산자 중 하나를 입력하세요.(+,-,*,/)");
    var lastNumb = prompt("두번째 숫자를 입력하세요.");

    switch(?){
        case ? :
            alert(?);
            break;

        default:
            alert('잘못된값이입력되었습니다.');
            break;
    }
}