/*
    ?for
    *특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    실무사용의 예
    1. 게시판의 게시글 목록 불러올 때
    2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    4. 갤러리의 이미지 목록을 출력 할 때
    5. os 등의 파일 탐색기의 파일 목록 출력 할 때...

    *루프
    1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    3. 참일경우 이하 구문 실행 > 4. 증감부 실행 > 5. 2단계

for (var index = 0; index < 10; index++) {
    console.log(index);
}
*/
// case.1 자신의 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for(var i = 1; i <= 10; i++){
        document.write(i + '. ' + userName + '<br>');
    }
}
function namePrint1000(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i+=2){
        document.write(i + '. ' + userName + '<br>');
    }
}
function thinkJS(){
    for(var i = 0; i < 10; i++){ //? i 는 0으로 선언 및 초기화. i가 10보다 작을때까지 반복수행. i는 매턴마다 1씩 증가
        document.write("i = " + i, "<br>"); //? i가 10보다 작을때 html에 0~9까지 출력.
    } //? i가 10이되는순간 break.
    document.write("종료 i = " + i); //? 위 반복문이 실행을 종료해야지만 실행 될 수 있고 이미 변경된 10이 출력.
}
// todo. 과제 - 1부터 10까지 출력되는 각기 다른 반복문 케이스 5개 짜오기.