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
    3. 참일경우 문장 실행 > 4. 종결식 실행 > 5. 2단계
*/

// ! 단일 for (1wayLoop).

// *case.1 이름을 10번 출력.

function namePrint10(){
    var userName = 'Mark';
    
    for(var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}

// *case.2 이름을 1000번 출력.
function namePrint1000(){
    var userName = 'Mark';
    for(var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo. 이름을 1000번중에 500번만 찍되. 홀수번째만 나오게 출력.
function namePrint500(){
    var userName = 'Mark';
    for (var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}
// *case.3 JS Engine 처럼 생각해보기.
function thinkJS(){
    for (var i = 0; i < 10; i++){ //? 10보다 작을때 (0 ~ 9)까지 만 반복 수행. (10번반복)
        document.write('i =' + i, '<br>'); //? document에 i = 0~9번까지 출력.
    } //? i가 10이 되는 순간 break.
    document.write('종료 i = ' + i); //? 이미 변경된 10이 출력.
}

// *ex. 1 - 10 까지 출력되는 반복문?
function answer1(){
    for(var i = 1; i <= 10; i++){
        document.write(i + '<br>');
    }
}
function answer2(){
    for(var i = 0; i < 10; i++){
        document.write((i+1) + '<br>');
    }
}
function answer3(){
    for(var i = 100; i < 110; i++){
        document.write((i - 99) + '<br>');
    }
}
function answer4(){
    for(var i = 1; i <= 10; i+=2){
        document.write(i+'<br>');//? 1, 3, 5, 7, 9
        document.write((i+1)+'<br>'); //? 2, 4, 6, 8, 10
    }
}
// *case.4 자신이 좋아하는 과일 4개를 배열(?)로 배치하고, alert으로 출력하기.
function favorFluit(){
    var array = ['포도','사과','바나나','망고','딸기','멜론','샤인머스켓'];
    // console.log(array.length);
    for(var i = 0; i < array.length; i++){
        document.write(array[i]);
    }
}
// todo. 지금까지 배웠던 JS ITEM들의 배열을 출력해보자.
function arrayFor(){
    var data = ['변수','연산자','자료형','조건문 if','조건문 switch','반복문 while','반복문for'];
    
}