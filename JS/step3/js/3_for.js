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

// ! 단일 for문
// * case.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for (var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo. 이름을 1,000번 출력해보자.
function namePrint1000(){
    var userName = "Mark";
    for (var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// *case.2 1,000번 출력될 이름 에서 홀수 번째만 출력하기.
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo. 1 - 10까지 출력되는 반복문을 여러가지로 직접 짜보기.
function answer1(){
    for (var i =1; i<=10; i+=2){ //? 10보다 작거나 같을 때 (1~10)만 반복수행, 루프가 끝난후 i에 2를 더함.
        document.write(i + "<br>"); //? 1,3,5,7,9
        document.write((i+1) + "<br>"); //? 2,4,6,8,10
    }
}
function answer2(){
    for (var i = 0; i<10; i++){
        document.write((i+1) + "<br>");
    }
}
function answer3(){
    for (var i=100; i<110; i++){
        document.write((i-99) + "<br>");
    }
}
function answer4(){
    for (var i = 10; i>=1; i--){
        document.write((11-i) +"<br>");
    }
}
function answer5(){
    for (var i = 1; i<=10; i++){
        document.write(i+"<br>");
    }
}
// *case. 3 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력하기.
function favorFruit(){
    var array = ["귤","포도","딸기","메론","수박"]; //? array(배열) -> data들이 저장되는 공간.
    // *["귤"] -> data[0] -> array[0]
    for(var i = 0; i < array.length; i++){
        // console.log(i);
        alert(array[i]);
    }
}
// todo. 지금까지 배웠던 js단원명을 배열을통해 출력해보자.
function arrayFor(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    // todo. 0.변수,1.연산자,2.형변환,3.조건문 if.....출력되게
    for(var i = 0; i < data.length; i++){
        document.write(i +"."+data[i]+"<br>");
    }
    // todo. 과제 -_-... 0 -> 첫번째, 1 -> 두번째, 2 -> 세번째 ....로 변형 출력.
    // todo. 1 switch를 활용한 방법.
    // todo. 2 array를 활용한 방법.
}