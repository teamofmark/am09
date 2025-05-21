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
// 단일 for - for를 한 번만 사용 하는 것

// case.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for(var i = 1; i <= 10; i++){
        console.log(i + '. ' + userName);
    }
}
// case.2 이름을 1,000번 출력해보자.
function namePrint1000(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i++){
        console.log(i + '. ' + userName);
    }
}
// todo. 위 1,000번 출력 예제에서 홀수 번째만 출력 될 수 있도록 반복문을 짜오기(1,2,3,4...(X) 1,3,5,7,9...(O))
function namePrint500(){
    
}