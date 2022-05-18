/*
    ? for
    * 특정구문을 정해진 횟수 만큼 반복해야 할 경우 주 사용 되는 반복문.
    * 1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 3. 참일경우 실행 > 4. 종결식 실행 > 5. 2단계
*/
// ! 단일 for loop
// * case.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    
    for (var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// *case.2 이름을 1,000번 출력해보자.
function namePrint1000(){
    var userName = "Mark";
    for (var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo. 1,000번 출력중 홀수 번째만 나오게 해보자.
function namePrint500(){
    var userName = "Mark";
    // todo. for loop
    for (var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}