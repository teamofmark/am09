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

// *exp.1 이름을 10번 출력.
function namePrint10(){
    var userName = "Mark";
    for (var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}

// *exp.2 이름을 500번만 찍되 홀수만 나오게 해보자.
// ? 1000 / 500(odd)
function namePrint500(){
    var userName = "Mark";
    for (var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}

// *case. 3 문자열(*) 10번 출력.
function star10(){
    var star = '';
    for (var i = 0; i < 10; i++){
        star += '*';
    }
    document.write('result = ' + star);
}
// *case. 4
function thinkJS(){
    for (var i = 0; i < 10; i++){ //? 10보다 작을 때(0~9) 까지 만 반복 수행
        document.write('현재 i =' + i, '<br>'); //? 0 ~ 9번까지 출력.
    } //? i가 10이 되는 순간 break.
    document.write('종료 i = ' + i); //? 이미 변경된 10이 출력.
}

//todo.2 1 - 10 까지 출력되는 반복문을 직접 짜보자.
function answer1(){
    for(var i=0; i<10; i++){ //? 
        document.write((i+1)+"<br>");//? 
    }
}
function answer2(){
    for(var i=1; i<=10; i++){ //? 
        document.write(i+"<br>"); //? 
    }
}
function answer3(){
    for(var i=100; i<110; i++){ //? 
        document.write((i-99)+"<br>"); //?
    }
}
function answer4(){
    for(var i=1; i<=10; i+=2){ //? 
        document.write(i+"<br>"); //? 
        document.write((i+1)+"<br>"); //? 
    }
}
function answer5(){
    for(var i=10; i>=1; i--){ //? 
        document.write((11-i)+"<br>"); //? 
    }
}
// *case. 5 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력.
function favorFluit(){
    var array = ['포도','사과','바나나','망고','딸기','토마토'];
    // console.log(array.length);
    for (var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}
// *case. 6 지금까지 배운 js를 배열을 활용해 출력.
function arrayFor(){
    var data = ['변수','연산자','형변환','조건문if','조건문switch','반복문while','반복문for'];
    for (var i = 0; i < data.length; i++){
        document.write((i+1) + '번째 내용 = ' + data[i] + '<br>');
    }
}
function arrayForES6(){
    var data = ['변수','연산자','형변환','조건문if','조건문switch','반복문while','반복문for'];
    for (let i = 0; i < data.length; i++){
        const element = data[i];
        document.write((i+1) + '번째 내용 = ' + element + '<br>');
    }
}

// *case. 7 역반복 배열
function reverseFavorFluit(){
    var array = ['포도','사과','바나나','망고']; //? 4개의 배열 선언후
    for(var i = array.length - 1; i >= 0; i--){ //? 변수는 배열의 갯수 - 1 (4 - 1 = 3)
        alert(array[i]); //? 그래서 3,2,1,0순으로 출력. 이것을 역반복이라한다.
    }
}

// *case. 8 continue문
function forContinue(){
    for (var i = 0; i <= 10; i++){ //?
        continue; //?
        document.write(i + '<br>'); //?
    }
    document.write('최종 i = ' + i + '<br>'); //?
}
// *exp. 7 continue 활용
function runContinue(){
    var output = 0;
    for (var i = 1; i <= 10; i++){
        if(i % 2 == 1){
            /*
                ? i가 홀수일 경우 이탈(continue).
                ? (1 을 2로 나눈 나머지가 1과 일치할 경우 다음 수행) = 반복문으로..  
                ? (2 를 2로 나눈 나머지가 1과 일치할 경우 다음 수행) = 이탈. output += i; 실행
                ? (3 을 2로 나눈 나머지가 1과 일치할 경우 다음 수행) = 반복문으로..
                ? (4 를 2로 나눈 나머지가 1과 일치할 경우 다음 수행) = 이탈. output += i; 실행
                ..
                ? 이조건으로 i 값이 10보다 작거나 같을 때 까지 수행.
            */
            continue;
        }
        output += i; //? ( 2, 6, 12, 20, 30)
        alert(output); //? ? 출력.
    }
}

// *case. 9 break
function forBreak(){
    for (var i = 1; i <= 10; i++){
        break;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
// *case. 10 break 활용
function runBreak(){
    for (var i = 0; true; i++){
        alert(i + '번째 반복문');
        if(!confirm('계속할래?')){
            break;
        }
    }
}

// ! 다중반복

function halfPyramid(){
    var star = '';
    for (var i = 1; i <= 10; i++){ //? 1. ifor = 1 ~ 10까지 수행
       for (var j = 0; j < i; j++){ //? 2. jfor = j가 i보다 작을때 까지 반복 수행. 
            star += '*'; //? *(이탈),**(이탈),***(이탈),****(이탈)....
       }
       star += '<br>'; //? ifor만큼 <br>을 변수 star(이탈부분)에 넣음.
    }
    document.write(star); //? 반절 피라미드 출력.
}