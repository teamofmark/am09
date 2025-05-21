/*
?switch
switch는 조건식의 결과가 case에 걸리는 경우, 비교할때 사용한다.
( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// case.1 문법
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
            alert("잘못 입력된 값");
            break;
    }
}
// todo. if에서 풀었던 lotto과제를 switch문법으로 변형 해보라.
function lotto(){
    
}