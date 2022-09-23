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
// *case.1 이름을 10번 출력.
function namePrint10(){
    var userName = "Mark";
    for (var i = 1; i <= 10; i++){
        document.write(i+'.' + userName + '<br>');
    }
}
// *case.2 이름을 1,000번 출력.
function namePrint1000(){
    var userName = "Mark";
    for (var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
function thinkJS(){
    for (var i = 0; i < 10; i++){ //? 0 ~ 9 = 총 10회 반복.
        document.write("i = " + i, "<br>"); //? html문서에 "i=0~9 줄바꿈포함" 출력
    }
    document.write("종료 i = " + i); //? ? 이미 변경된 10이 출력.
}
// todo. 1 ~ 10까지 출력되는 반복문들이다. js Engine처럼 생각하고 주석달기
function answer1(){
    for(var i=0; i<10; i++){ //? 10보다 작을때 까지 (0~9) 까지만 반복수행
        document.write((i+1)+"<br>"); //? 0~9까지각 1씩 더해서 1~ 10 출력.
    }
}
function answer2(){
    for(var i=1; i<=10; i++){ //? 10보다 작거나 같을때 (1~10)까지만 반복수행
        document.write(i+"<br>");  //? 1~10 출력.
    }
}
function answer3(){
    for(var i=100; i<110; i++){ //? 110보다 작을때 까지 100~109까지만 반복수행
        document.write((i-99)+"<br>"); //? 100~109까지 99씩 빼서 1~ 10 출력.
    }
}
function answer4(){
    for(var i=1; i<=10; i+=2){ //? 10보다 작거나 같을 때(1~10)까지만 반복수행. 단, 반복이 끝난후 i에 2를 더함(증감부)
        document.write(i+"<br>"); //? 증감이 이루어지지 않은  1,3,5,7,9.
        document.write((i+1)+"<br>"); //? 증감이 이루어진 이후 2,4,6,8,10.
    }
}
function answer5(){
    for(var i=10; i>=1; i--){ //? 역반복 - 1보다 크거나 같을 때 (10~1)까지만 반복수행
        document.write((11-i)+"<br>");  //? (11-)10~1 -> 1~10 출력.
    }
}
// *case.3 간단한 배열식으로 알아보는 배열.(자신이 좋아하는 과일 4개를 배열로 배치하고 alert으로 출력.)
function favorFluit(){
    var array = ["무화과","샤인머스캣","오렌지","메론","딸기"];
    console.log(array.length);
    for(var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}
// todo. 지금까지 배웠던 JS단원 을 배열을 활용해 출력해보자.
// * 변수,연산자,형변환,조건문if,조건문switch,반복문while,반복문for
// * 출력구문 = 1번째 내용 = 변수 줄바꿈 ~ 7번째 내용 = 반복문for
function arrayFor(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    for (var i = 0; i < data.length; i++){
        document.write((i + 1) + "번째 내용 = " + data[i] + '<br>');
    }
}

// *case. 4 역반복
function reverseFavorFluit(){
    var array = ["무화과","샤인머스캣","오렌지","메론","딸기"];
    for(var i = array.length-1; i >= 0; i--){
        document.write(array[i]);
    }
}

// *case. 5 for continue
function forContinue(){
    for (var i = 0; i < 10; i++){
        continue;
        document.write(i + '<br>');
    }
    document.write('최종 i =' + i + '<br>');
}
// *case. 6 continue활용
function runContinue(){
    var output = 0;
    for (var i = 1; i <= 10; i++){//?
        if(i % 2 == 1){//?
            continue;
            /*

            */
        }
        output += i; //?
        document.write(output+'<br>'); //?
    }
}

// *case. 7 break
function forBreak(){
    for (var i = 1; i <= 10; i++){
        break;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
// *case. 8 break활용

function runBreak(){
    for(var i = 0; true; i++){
        alert(i + '번째 반복문');
        if(!confirm('계속할래?')){
            break;
        }
    }
}

// ! 다중 for

// *case. 반절 피라미드
function halfPyramid(){
    var star = '';
    for(var i = 1; i <= 10; i++){
        for(var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
// todo.1 역반절 피라미드
function reverserHalfPyramid(){
    var star = '';
    for(var i = 10; i >= 1; i--){
        for(var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
// todo. H/W 완성체피라미드
// todo.case for문 3개

function pyramid(){
    var star = '';
    for (var i = 1; i <= 10; i++){ //? 1. ifor = 1~10 까지 수행
        for(var e = 10; e >= i; e--){ //? 2. efor = 10 ~ 1까지 수행
            star += '&nbsp;'; //?. 공백이 10개부터 1개까지 들어감.
        }
        for(var s = 0; s < 2*i-1; s++){ //? 3. sfor = i가 들어올때마다 홀수화 됨. (1,3,5,7,9,11,13,15,17,19)
            star += '*';//? 홀수화 된 s의 수치만큼 반복해서 *이 들어감.
        }
        star += '<br>';//? ifor 만큼 <br>을 변수 star에 넣음
    }
    document.write(star);
}
// todo.case for문 4개
function pyramidEx(){
    for(var i = 0; i < 10; i++)  {
        for(var j=9; j > i; j--)  {
          // space
          document.write('&nbsp');
        }
        for(var j=0; j <= i; j++)  {
          document.write('*');
        }
        for(var j=1; j <= i; j++)  {
          document.write('*');
        }
        document.write('<br>');
      }      
}
function pyramidCustom(n){ //?
    for (var i = 1; i <= n; i++){ //?
        var s = ""; //?
        for (var j = 1; j <= (2 * n - 1); j++){ //?
            (j >= n + 1 - i && j <= n - 1 + i ) ? s += "*" : s += " "; //?
        }
        console.log(s); //?
    }
}