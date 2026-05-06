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
// case.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for(var i =  1; i <= 10; i++){
        document.write(i+". "+userName + "<br>");
    }
}
// case.2 이름을 1,000번 출력해보자.
function namePrint1000(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i++){
        document.write(i + '. ' + userName + "<br>");
    }
}
// todo. 1,000번 출력중 홀수번째에만 이름이 출력되게 만들기
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i<= 1000; i+=2){
        document.write(i + '. ' + userName + "<br>");
    }
}
// case.3 JS Engine처럼 생각하기
function thinkJS(){
    for(var i = 0; i < 10; i++){ //? i가 10보다 작을때 까지만 반복을 수행.
        document.write("i = " + i, "<br>"); //? 위 조건이 참일 경우 실행한다 = 0~9까지 출력.
    }//? i가 증가하다가 10이 되는 순간 break.
    document.write("종료 i = " + i ); //? for loop가 중지될 때 i의 값인 10이 출력.
}
// todo. 1-10까지 출력되는 단순 반복문을 여러개 만들어보기
function answer1(){
    for(var i = 1; i<=10; i+=2){ //?10보다 작거나 같을때 (1~10)까지만 반복 수행. 단, 반복이 끝난후 i에 2를 더함.
        document.write(i+"<br>"); //? 증감이 이루어 지지 않은 1,3,5,7,9
        document.write((i+1)+"<br>"); //? 증감이 이루어진 2,4,6,8,10
    }
}
function answer2(){
    for(var i = 10; i > 0; i--){
        document.write((11 - i) + "<br>");
        console.log(i);
        continue;
        document.write(i+"<br>");
    }
}
function answer3(){
    for(var i = 10; i >= 1; i--){
        document.write((11- i ) + "<br>");
    }
}