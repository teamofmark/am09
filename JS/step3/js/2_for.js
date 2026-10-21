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
// case.1 자신의 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for(var i = 1; i <= 10; i++){
        document.write(i + '. ' + userName + '<br>');
    }
}
function namePrint1000(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i+=2){
        document.write(i + '. ' + userName + '<br>');
    }
}
function thinkJS(){
    for(var i = 0; i < 10; i++){ //? i 는 0으로 선언 및 초기화. i가 10보다 작을때까지 반복수행. i는 매턴마다 1씩 증가
        document.write("i = " + i, "<br>"); //? i가 10보다 작을때 html에 0~9까지 출력.
    } //? i가 10이되는순간 break.
    document.write("종료 i = " + i); //? 위 반복문이 실행을 종료해야지만 실행 될 수 있고 이미 변경된 10이 출력.
}
// todo. 과제 - 1부터 10까지 출력되는 각기 다른 반복문 케이스 5개 짜오기.
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
    for(var i=100; i<110; i++){ //? 110보다 작을때 (100~109)까지만 반복 수행
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
// case.2 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 순차 출력하기
function favorFruit(){
    var array = ['포도','딸기','수박','사과','키위','토마토'];
    // ? array(배열) - 데이터(data)들이 저장되는 방. -> 입력 및 저장되는 순서대로 0부터 증가되게 되어있다.
    for(var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}
// case.3 지금까지 배웠던 js단원을 배열을 활용해 출력해보자.
function arrayFor(){
    var data = ['변수','연산자','형변환','조건문 if','조건문 switch','반복문 for'];
    for(var i = 0; i < data.length; i++){
        document.write(i + '번째 내용 = ' + data[i] + '<br>');
    }
}
function arrayFor2(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    var swapNumb = ["첫","두","세","네","다섯","여섯","일곱"];
    for (var i = 0; i < data.length; i++) {
        document.write(swapNumb[i] + "번째 내용 =" + data[i] + '<br>');
    }
}
function arrayFor3(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 for"];
    // todo. switch 문을 활용해 풀어보기 = 배열식추가금지.
    var swapNumb = '';// 옮길그릇위치
    for(var i = 0; i < data.length; i++){
        switch (i) {
            case 0:
                swapNumb = '첫';
                break;
            case 1:
                swapNumb = '두';
                break;
            case 2:
                swapNumb = '세';
                break;
            case 3:
                swapNumb = '네';
                break;
            case 4:
                swapNumb = '다섯';
                break;
            case 5:
                swapNumb = '여섯';
                break;
            default:
                swapNumb = 'x';
                break;
        }
        // 출력문위치
        document.write(swapNumb +"번째 내용 = " + data[i] + '<br>');
    }
}