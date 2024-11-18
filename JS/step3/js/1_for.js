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
    var swapNumb = ["첫","두","세","네","다섯","여섯"];
    for(var i = 0; i<data.length; i++){
        document.write(swapNumb[i] + "번째 내용 " + data[i] + '<br>');
    }
}
// todo. switch 로 변형해오기
function arrayFor2(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 for"];
    // ? 치환 배열을 짜는방법 var swapNumb = ["첫","두"..];
    var swapNumb = '';
    for (var i = 0; i < data.length; i++) {
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
            default:
                i = 'x';
                break;
        }
        document.write(swapNumb + "번째 내용 =" + data[i] + '<br>');
    }
}
// case.5 역반복배열
function reverseFavorFruit(){
    var array = ['포도','사과','딸기','메론','수박'];
    for(var i = array.length - 1; i>=0; i--){ //? 정반복(정방향출력) / 역반복 (역방향출력)
        document.write(array[i]+"<br>");
    }
}
// case.6 continue
function forContinue(){
    for(var i = 0; i <= 10; i++){
        continue;
        document.write(i+"<br>");
    }
    document.write("최종 i = " + i + "<br>");
}
function continueEx(){
    var text = '';
    for(var i = 0; i<10; i++){
        if(i == 3){
            continue;
        }
        // filter - 특정조건이 아닐때 함수실행금지 (ex> popupBtn x 10 라 가정 할 때 9개는 동일한 팝업을 출력해야됨. 1개는 예외 -> if(btnName=="???"){continue})
        text = text+i;
    }
    console.log(text);
}
function runContinue(){
    var output = 0;
    for(var i = 1; i<=10; i++){
        if(i%2==1){
            continue;
        }
        // continue filter 만들어보기
        output += i; //todo continue를 이용하여 (2,6,12,20,30)만 출력되게 만들어라.
        console.log(output);
    }
}
// case.7 break
function forBreak(){
    for(var i = 1; i <= 10; i++){
        break;
        document.write(i+"<br>");
    }
    document.write("최종 i = " + i + "<br>");
}
function breakEx(){
    var i = 0;
    while(i<6){
        if(i == 3){
            break;
        }
        i = i + 1;
    }
    console.log(i);
}
// todo
function runBreak(){
    for(var i = 0; true; i++){
        alert(i + "번째 반복문");
        if(!confirm('계속할래?')){
            break;
        }
    }
}
function runBreak2(){
    var swapNumb = ['첫','두','세','네','다섯']; //? 배열값을 변화시키면 자동으로 반응하는 경고창.
    for(var i = 0; true; i++){
        alert(swapNumb[i] + '번째 반복문');
        if( i == swapNumb.length-1){
            break;
        }
    }
    document.write('지정된 배열값' + swapNumb.length + '모두 출력 완료');
    // todo 출력문 : 반복이 완료된 이후 "지정된 배열값 [배열수] 모두출력완료"
}
// ! 다중 for
// case.1 반절 피라미드
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
// todo 역반절 피라미드
function reverseHalfPyramid(){
    var star = '';
    for(var i = 10; i>=1; i--){
        for(var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
// todo 피라미드
// ! &nbsp;(공백문자), 반복문 총 3개(공백+별+줄바꿈 / 단, 별은 홀수출력이 되어야만 피라미드 모양)