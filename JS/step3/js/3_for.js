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
// *case. 1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for(var i = 1; i <= 10; i++){
        document.write(i+'.'+userName+'<br>');
    }
}
// *case. 2 이름을 1000번 출력하되 홀수 번째만 나오게 해보기.
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}
// *case. 3 1 - 10까지 출력되는 반복문을 여러case 잡아보자.
function answer1(){
    for(var i = 0; i<10; i++){
        document.write((i+1) + "<br>");
    }
}
function answer2(){
    for(var i = 1; i<=10; i++){
        document.write(i + '<br>');
    }
}
function answer3(){
    for(var i = 100; i<110; i++){
        document.write((i-99) + '<br>');
    }
}
function answer4(){
    for(var i = 1; i <= 10; i+=2){
        document.write(i+"<br>");
        document.write((i+1)+"<br>");
    }
}
function answer5(){
    for(var i = 10; i>=1; i--){
        document.write((11-i)+'<br>');
    }
}
// *case. 5 * 10개가 찍힌 결과를 출력하자.

function star10(){
    var star = "";
    for(var i = 0; i < 10; i++){
        star += "*";
    }
    document.write("result = " + star);
}
// *case. 6 자신이 좋아하는 과일 4개를 배열로 배치하고 출력하기.
function favorFruit(){
    var array = ['메론','수박','딸기','귤','키위'];
    //? array(배열) - data들이 저장되는 방. ex> var array = ['data'(0),'data1'(1),'data2'(2)]
    // * ex> array[0] -> data, array[1] -> data1
    // ! data는 입력 및 저장되는 순서대로 0부터 index를 증가시키며 부여받게되어있다.
    // * var array = []; -> 빈배열
    for(var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}
// todo. 지금까지 배웠던 JS 단원을 배열을 활용해 출력해보자.
// !단 1,2,3,4,5 가아닌 "첫"번째, "두"번째, "세"번째.. 로 출력.
function arrayFor(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
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
            default:
                i = 'x';
                break;
        }
        document.write(swapNumb + '번째 내용 = ' + data[i] + '<br>');
    }
}
function arrayFor2(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    var swapNumb = ["첫","두","세","네","다섯","여섯","일곱"];
    for(var i = 0; i < data.length; i++){
        document.write(swapNumb[i] + '번째 내용 = ' + data[i] + '<br>');
    }
}

// *case. 7 역반복
function reverseFavorFruit(){
    var array = ['메론','수박','딸기','귤','키위'];
    for(var i = array.length - 1; i>=0; i--){
        document.write(array[i]);
    }
}

// *case. 8 continue
function runContinue(){
    var output = 0;
    for (var i = 1; i <= 10; i++){
        if(i % 2 ==1){
            continue;
        }
        output += i; //?(2,6,12,20,30);
        console.log(output);
    }
}
// *case. 9 break
function runBreak(){
    for(var i = 0; true; i++){
        alert(i + '번째 반복문');
        if(!confirm('계속할래?')){ // todo 선택하는것과 반대인 상황을 원상태로 돌리기
            break;
        }
    }
}

// *case. 10 반절 피라미드
function halfPyramid(){
    var star = '';
    for (var i = 1; i <= 10; i++){ //? 1. ifor = 1 ~ 10까지 수행
        for(var j = 0; j < i; j++){ //? 2. jfor = j가 i보다 작을때 까지 반복 수행 *,**,***...
            star += '*'; //? 변수 star에 생성된 *을 넣음.
        }
        star += '<br>'; //? ifor만큼 <br>을 변수 star에 넣음.
    }
    document.write(star); //? ifor가 죽는 시점에 star에 담긴 정보들을 출력.
}