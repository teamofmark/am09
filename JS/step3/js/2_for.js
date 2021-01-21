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
// todo.3 지금까지 배웠던 js를 배열을 활용해 출력해보자.
function arrayfor(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 for", "반복문 while", "함수", "클래스"];
    // ? 반복 및 출력문 작성.
    for (var i = 0; i < data.length; i++){
        alert(data[i]);
    }
}
// todo.4 역반복 배열
function reverseFavorFluit(){
    var array = ['포도','사과','바나나','망고']; //? 4개의 배열 선언후
    // ? 역반복 및 출력문 작성.
    for(var i = array.length-1; i>=0; i--){ //? i 변수는 배열의 갯수 -1 (4-1 = 3) 로 선언, 그 변수가 0보다 크거나 같을때 까지 (3>=0 ----> 3,2,1,0) 실행 .
        document.write(array[i]); //? 그래서 3,2,1,0 순으로 출력. 이것을 역반복
    }
}

// *case. 5 ES6 Example

function favorFluitES6(){
    var array = ['포도','사과','바나나','망고']; 
    for (let i = 0; i < array.length; i++){
        const element = array[i];
        document.write(i + '번째 배열 = ' + element + '<br>');
    }
}

// * case.6 continue
function forContinue(){
    for (var i = 0; i < 10; i++){ //? 과정 1 0 - 9 : 10번반복
        continue; //? 과정 2 continue : 이하코드 실행불가. 반복수행.
        document.write(i + '<br>'); //? 과정3 실행불가
    }
    document.write('최종 i =' + i + "<br>"); //? 결과 10.
}
// * case.7 continue 활용
function runContinue(){
    var output = 0;
    for (var i = 1; i <= 10; i++){
        if(i % 2 == 1){
            /*
                ? i가 홀수일 경우 반복 중지 다음반복수행, 현재 다음 반복은 없다.
                ? (1 을 2로 나눈 나머지가 1과 일치 할경우  다음 반복을 수행하라.) 다시 반복문으로
                ? (2 를 2로 나눈 나머지가 1과 일치 할경우  다음 반복을 수행하라.) 이탈후 output += i; 실행
                ? (3 을 2로 나눈 나머지가 1과 일치 할경우  다음 반복을 수행하라.) 다시 반복문으로
                ? (4 를 2로 나눈 나머지가 1과 일치 할경우  다음 반복을 수행하라.) 이탈후 output += i; 실행
                ? ..
                ? 이조건으로 i값이 10보다 작거나 같을때까지 수행하여 출력하라.
            */
            continue;
        }
        output += i; //? (2, 6, 12, 20, 30)
    }
    document.write(output);
}
// *case.8 break

function forBreak(){
    for(i = 1; i<=10; i++){
        break; //? 해당루프 즉시 중단.
        document.write(i + '<br>'); //? 실행불가.
    }
    document.write('최종 i ='+ i + '<br>'); //? 1출력
}

// *case.9 break 활용
function runBreak(){
    for (var i = 0; true; i++){ //? for 무한반복
        alert(i + '번째 반복문'); //? 계속 돔.
        if(!confirm('계속진행하시겠습니까?')){ //? ! = 논리부정연산자. ex> !true = false, !false = true.
            break;
        }
    }
}

// ! 다중 for

// *case.1 반절피라미드

function halfPyramid(){
    var star = '';
    for (var i = 1; i <=10; i++){ //?
        for(var j = 0; j < i; j++){ //?
            star += '*'; //?
        }
        star += '<br>'; //?
    }
    document.write(star); //?
}