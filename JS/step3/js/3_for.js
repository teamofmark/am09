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
// case.1 이름 10번 출력해보기.
function namePrint10(){
    var userName = "Mark";
    for(var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// case.2 이름 1,000번 출력
function namePrint1000(){
    var userName = "Mark";
    for (var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo 1,000번 출력 중 홀수 번째만 나오게
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i+=2){ //? 1,3,5,7,9,11,13........
        document.write(i + '.' + userName + '<br>');
    }
}
// todo.2 1 - 10까지 출력되는 반복문을 총 5가지로 작성해보자.
function answer1(){
    for(var i = 0; i < 10; i++){
        document.write((i+1)+"<br>");
    }
}
function answer2(){
    for(var i = 100; i<110; i++){
        document.write((i-99) + "<br>");
    }
}
function answer3(){
    for(var i = 1; i<=10; i+=2){
        document.write(i + "<br>");
        document.write((i+1) + "<br>");
    }
}
function answer4(){
    for(var i = 10; i >=1; i--){
        document.write((11-i)+"<br>");
    }
}
function answer5(){
    for(var i=10; i > 0; i--){
        document.write((11-i)+"<br>");
        console.log(i);
        continue;
        document.write(i+"<br>");
    }
}
// case.3 별 10개가 찍힌 결과물 출력
function star10(){
    var star = "";
    for(var i = 0; i < 10; i++){
        star += "*";
    }
    document.write("result = " + star);
}
// csae.4 자신이 좋아하는 과일 4개를 배열로 배치하고 값을 출력하기.
function favorFruit(){
    var array = ['딸기','귤','메론','수박'];
    // ? array(배열)- data들이 저장되는 방 -> array[0] = 0번방호출
    for(var i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
// case.5 지금까지 배웠던 js단원명을 배열로 출력해보자.
function arrayFor(){
    var data = ['변수','자료형','형변환','연산자','조건문 if','조건문 switch','반복문 for'];
    for(var i = 0; i< data.length; i++){
        document.write(i + "번째 단원 = " + data[i] + '<br>');
    }
}
function arrayFor2(){
    var data = ['변수','자료형','형변환','연산자','조건문 if','조건문 switch','반복문 for'];
    var swapNumb = ["첫","두","세","네","다섯","여섯","일곱"];
    for(var i = 0; i < data.length; i++){
        document.write(swapNumb[i]  + "번째 단원 = " + data[i] + '<br>');
    }
}
// todo. 위 결과를 switch문 형태로 변형해서 작성해보기(swapNumb배열이없는상태 일때)
function arrayFor3(){
    var data = ['변수','자료형','형변환','연산자','조건문 if','조건문 switch','반복문 for'];
    var swapNumb = '';
    for(var i = 0; i < data.length; i++){
        swapNumb = i;
        switch(i){
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
            case 6:
                swapNumb = '일곱';
                break;
        }
        document.write(swapNumb + "번째 내용 = " + data[i] + '<br>');
    }
}