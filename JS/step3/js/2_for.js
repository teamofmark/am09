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
    ! 1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    ! 3. 참일경우 문장 실행 > 4. 종결식 실행 > 5. 2단계

*/
//!단일 for

// *case. 1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = 'Mark';
    for (var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// *case. 2 이름을 1,000번 출력해보자.
function namePrint1000(){
    var userName = 'Mark';
    for (var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}

// todo.1 이름을 500번만찍되, 홀수 번째만 출력. (1000);
function namePrint500(){
    var userName = 'Mark';
    for (var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}

// todo.2 js Engine처럼 생각해보기.

function thinkJS(){
    for (var i = 0; i < 10; i++){ //? 10보다 작을때 (0 ~ 9)까지 만 반복수행.
        document.write('i = ' + i, '<br>'); //? 0 ~ 9번까지 출력.
    }
    document.write('종료 i = ' + i); //? 이미 변경된 10이 출력.
}

//todo.2 1 - 10 까지 출력되는 반복문을 직접 짜보자.
function answer1(){
    for(var i=0; i<10; i++){ //? 10보다 작을때 (0~9) 까지 만 반복 수행
        document.write((i+1)+"<br>");//? 1~ 10번 까지 출력
    }
}
function answer2(){
    for(var i=1; i<=10; i++){ //? 10보다 작거나 같을때 (1~10)까지 만 반복 수행
        document.write(i+"<br>"); //? 1~10번 까지 출력
    }
}
function answer3(){
    for(var i=100; i<110; i++){ //? 110보다 작거나 같을때 (100~109)까지만 반복 수행
        document.write((i-99)+"<br>"); //?1~10번 까지 출력
    }
}
function answer4(){
    for(var i=1; i<=10; i+=2){ //? 10보다 작거나 같을때 (1~10)까지 만 반복 수행, 단 루프가 끝난후 i에 2를 더함.(증감부)
        document.write(i+"<br>"); //? 1, 3, 5, 7, 9 (증감이 이루어 지지 않은 iteration)
        document.write((i+1)+"<br>"); //? 2, 4, 6, 8, 10 (증감이 이루어 진 이후 iteration)
    }
}
function answer5(){
    for(var i=10; i>=1; i--){ //? 1보다 크거나 같을때 (10~1)까지 만 반복 수행.
        document.write((11-i)+"<br>"); //? 1~10번 까지 출력
    }
}
// * case.3 star(*)를 10개 찍어보자.
function star10(){
    var star = '';
    for (var i = 0; i < 10; i++){ 
        star += '*';
    }
    document.write('result = ' + star);
}

// * case.4 자신이 좋아하는 과일 4개를 배열로 배치하고 alert으로 출력.
function favorFluit(){
    var array = ['포도','사과','바나나','딸기','배','메론','귤']; //? 4개의 data array. 0,1,2,3

    for (var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}