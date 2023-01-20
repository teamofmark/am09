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

// *case.1 이름을 10번 출력해보자.

function namePrint10(){
    var userName = "Mark";
    for (var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}

// *case.2 이름을 1000번 출력.

function namePrint1000(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// *case.3 1,000번 출력중 홀수만 나오게 하기.
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i+=2){
        document.write(i + ' . ' + userName + '<br>');
    }
}

// todo. 1 - 10까지 출력되는 반복문을 생각나는대로 짜보자.
function answer1(){
    for(var i=1; i<=10; i+=2){
        document.write(i + '<br>');
        document.write((i+1) + '<br>');
    }
}
function answer2(){
    for(var i=100; i<110; i++){
        document.write((i-99)+"<br>");
    }
}
function answer3(){
    for(var i=0; i<10; i++){
        document.write((i+1)+"<br>");
    }
}
function answer4(){
    for(var i = 10; i>=1; i--){
        document.write((11-i) + "<br>");
    }
}

// *case.4 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 순차출력.
function favorFluit(){
    var array = ['포도','사과','바나나','망고','딸기'];
    // ? array(배열) - data들이 저장되는 방. -> ex> ['data'(0),'data1'(1),'data2'(2)];
    // ! data는 입력및 저장되는 순서대로 0부터 증가되게 되어있다. = ++,--.
    // * var name = '', number = 0, variable, [];
    for(var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}
// todo. 지금까지 배웠던 js단원명을 배열로 활용해 출력해보자.
function arrayFor(){
    var data = ["변수","연산자","형변환","조건문if","조건문switch","반복문while","반복문for"];
 
    for(var i = 0; i < data.length; i++){
        document.write((i+1) + '번째 내용 = ' + data[i] + '<br>');
    }
}
function arrayForES6(){
    var data = ["변수","연산자","형변환","조건문if","조건문switch","반복문while","반복문for"];
    for (let i = 0; i < data.length; i++){
        const element = data[i];
        document.write(i + '번째 내용 = ' + element + '<br>');
    }
}

// *case. 5 역반복배열
function reverseFavorFluit(){
    var array = ['포도','사과','바나나','망고','딸기'];
    for(var i = array.length - 1; i >= 0; i--){
        document.write(array[i]);
    }
}

// *case. 6 continue
function forContinue(){
    for (var i = 0; i <= 10; i++){
        continue;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
// *case. 6-1 continue 활용의 예
function runContinue(){
    var output = 0;
    for(var i = 1; i <= 10; i++){
        if(i % 2 == 1){
            continue;
        }
        output += i;
        document.write(i + '번째 짝수의 합'+ output + '<br>');
    }
}
// *case. 7 break문
function forBreak(){
    for (var i = 1; i <= 10; i++){
        break;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
// *case. 7-1 break의 활용
function runBreak(){
    for(var i = 0; true; i++){
        document.write((i+1) + '번째 반복문');
        if(!confirm('계속할래?')){
            // ? write로 반복문을 출력 이후, confirm에서 오는 확인(true)를 누르면 !와 만나 false로 변환.
            break;
        }
    }
}

// ! 다중for - 많이 사용하지않음.

// *case. 1 반절 피라미드
function halfPyramid(){
    var star = '';
    for(var i = 1; i <= 10; i++){ //? 1.
        for(var j = 0; j < i; j++){ //? 2.
            star += '*'; //? 
        }
        star += '<br>'; //?
    }
    document.write(star); //?
}
// todo. 역반절피라미드
function reverseHalfPyramid(){
    var star = '';
    for(var i = 10; i >= 1; i--){
        for(var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}

// todo. 완성형피라미드 만들어오기
function pyramid(){
    
}