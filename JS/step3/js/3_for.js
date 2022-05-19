/*
    ? for
    * 특정구문을 정해진 횟수 만큼 반복해야 할 경우 주 사용 되는 반복문.
    * 1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 3. 참일경우 실행 > 4. 종결식 실행 > 5. 2단계
*/
// ! 단일 for loop
// * case.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    
    for (var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// *case.2 이름을 1,000번 출력해보자.
function namePrint1000(){
    var userName = "Mark";
    for (var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo. 1,000번 출력중 홀수 번째만 나오게 해보자.
function namePrint500(){
    var userName = "Mark";
    // todo. for loop
    for (var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}

// * case.3 jsEngine처럼 생각하기.
function answer1(){
    for(var i = 0; i<10; i++){ // todo. 10보다 작을 때 (0 ~ 9)까지 만 반복 수행
        document.write((i+1) + '<br>'); // todo. 1 ~ 10번 까지 출력.
    }
}
function answer2(){
    for(var i = 1; i<=10; i++){ //todo.  10보다 작거나 같을 때 (1 ~ 10) 까지만 반복 수행
        document.write(i + '<br>'); //todo. 1 ~ 10번 까지 출력.
    }
}
function answer3(){
    for(var i = 100; i < 110; i++){ //todo. 110보다 작거나 같을 때(100~109)까지만 반복수행
        document.write(i+'<br>'); //todo. 1 ~ 10번 까지 출력.
    }
}
function answer4(){
    for(var i = 1; i <= 10; i+=2){ //todo. 10보다 작거나 같을 때 (1~10)까지만 반복 수행, 단 루프가 끝난 이후 i에 2를 더함.(증가부)
        document.write( i + '<br>'); //todo. 1,3,5,7,9.. (증감이 이루어 지지 않은 iteration)
        document.write( (i+1) + '<br>'); //todo. 2,4,6,8,10 (증감이 일어난 iteration)
    }
}
function answer5(){
    for(var i = 10; i >= 1; i--){ // todo. 1보다 크거나 같을 때 (10~1)까지만 반복 수행. -> 역반복
        document.write((11-i) + '<br>'); // todo. 1 ~ 10번 까지 출력.
    }
}

// *case.4 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력하라.
function favorFluit(){
    var array = ['포도','사과','바나나','망고','메론','수박'];
    // ? 배열 = array (arr) -> data들을 보관하고 위치를 이동시켜 순서를 바꾸는 공간.

    for(var i = 0; i < array.length; i++){ //? length = 갯수(길이) 
        alert(array[i]); //? 배열값을 부를 땐 "배열이름(array)[3] = 3번 배열값 가져와."
    }
}

// todo. 지금까지 배웠었던 JS단원들을 배열에 배치하고 위 예제처럼 출력해보자.
// ! 단, '1'번째 내용 = 변수........... X번째 내용 = 반복문 for.
function arrayFor(){
    var data = ["변수","연산자","형변환","조건문 if","조건문 switch","반복문 while","반복문 for"];
    for (var i = 0; i < data.length; i++){
        document.write((i + 1) + "번째 내용 = " + data[i] + '<br>');
    }
}

// *case.5 역반복배열
function reverseFavorFluit(){
    var array = ['포도','사과','바나나','망고','메론','수박'];
    for (var i = array.length-1; i>=0; i--){
        document.write(array[i]);
    }
}

// *case.6 for Continue
function forContinue(){
    for (var i = 0; i <= 10; i++){
        continue;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
// *case.6-1 for Continue 활용(filter)
function runContinue(){
    var output = 0;
    for (var i = 1; i <= 10; i++){
        // ? 홀수 필터.
        if(i%2==1){
            continue;
        }
        output += i; //? (2,6,12,20,30);
        alert(output);
    }
}

// *case.7 for break
function forBreak(){
    for (var i = 1; i <= 10; i++){
        break; //? 위 조건이 참 일지라도 break가 존재 하면, 해당 로직에서 강제로 빠져나오게 된다.
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
// *case.7-1 for break활용(breakPoint-중단지점)
function runBreak(){
    for(var i = 0; true; i++){ //? 수행되는 조건 자체가 true 상태기 때문에 무한반복.
        alert(i + '번째 반복문');
        if(!confirm('계속진행하시겠습니까?')){
            break;
        }
    }
}
