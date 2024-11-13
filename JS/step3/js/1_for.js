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
        document.write(i + '.' + userName + '<br>');
    }
}
// case.2 자신의 이름을 1000번 출력해보자.
function namePrint1000(){
    var userName = "Mark";
    for(var i = 1; i<=1000; i++){
        document.write(i+'.'+userName+'<br>');
    }
}
// todo. 1,000번 출력중 홀수 번째만 나오게 해보자.
function namePrint500(){
    for(var i = 1; i<=1000; i+=2){
        document.write(i+'.'+userName+'<br>');
    }
}
// case.3 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력하라.
function favorFruit(){
    var array = ['포도','사과','딸기','메론','수박'];
    // ? array(배열) - data들이 저장되는 방. -> ex> ['data'[0],'data1'[1],'data2[2]'];
    for(var i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
// case.4 지금까지 배웠던 JS단원명을 배열을 활용해 출력해보기.
function arrayFor(){
    var data = ["변수","자료유형변환","연산자","조건문if","조건문switch","반복문for"];
    for(var i = 0; i<data.length; i++){
        document.write(i + "번째 내용 " + data[i] + '<br>');
    }
}