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

// ! 단일 for문
// * case.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for (var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo. 이름을 1,000번 출력해보자.
function namePrint1000(){
    var userName = "Mark";
    for (var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// *case.2 1,000번 출력될 이름 에서 홀수 번째만 출력하기.
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo. 1 - 10까지 출력되는 반복문을 여러가지로 직접 짜보기.
function answer1(){
    for (var i =1; i<=10; i+=2){ //? 10보다 작거나 같을 때 (1~10)만 반복수행, 루프가 끝난후 i에 2를 더함.
        document.write(i + "<br>"); //? 1,3,5,7,9
        document.write((i+1) + "<br>"); //? 2,4,6,8,10
    }
}
function answer2(){
    for (var i = 0; i<10; i++){
        document.write((i+1) + "<br>");
    }
}
function answer3(){
    for (var i=100; i<110; i++){
        document.write((i-99) + "<br>");
    }
}
function answer4(){
    for (var i = 10; i>=1; i--){
        document.write((11-i) +"<br>");
    }
}
function answer5(){
    for (var i = 1; i<=10; i++){
        document.write(i+"<br>");
    }
}
// *case. 3 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력하기.
function favorFruit(){
    var array = ["귤","포도","딸기","메론","수박"]; //? array(배열) -> data들이 저장되는 공간.
    // *["귤"] -> data[0] -> array[0]
    for(var i = 0; i < array.length; i++){
        // console.log(i);
        alert(array[i]);
    }
}
// todo. 지금까지 배웠던 js단원명을 배열을통해 출력해보자.
    // todo. 과제 -_-... 0 -> 첫번째, 1 -> 두번째, 2 -> 세번째 ....로 변형 출력.
    // todo. 1 switch를 활용한 방법.
function arrayFor(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    // todo. 0.변수,1.연산자,2.형변환,3.조건문 if.....출력되게
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
                i = "x";
                break;
        }
        document.write(swapNumb + "번째 내용 = " + data[i] + '<br>');
    }
    
}
// todo. 2 array를 활용한 방법.
function arrayFor2(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    var swapNumb = ["첫","두","세","네","다섯","여섯","일곱"];
    for (var i = 0; i < data.length; i++){
        document.write(swapNumb[i] + "번째 내용 = " + data[i] + "<br>");
    }
}
// * case. 4  continue
function forContinue(){
    for(var i = 0; i <= 10; i++){
        continue;
        document.write(i + "<br>");
    }
    document.write("최종 i = " + i + "<br>");
}
// *case. 4-1 continue문제

function continueEx(){
    let text = '';
    for (let i = 0; i < 10; i++){
        if (i == 3){
            continue;
        }
        text = text + i;
    }
    console.log(text); //? 예상 결과 : 0124567689

}
// *case. 4-2 continue문제

function runContinue(){
    var output = 0;
    for (var i = 1; i <= 10; i++){
        if (i % 2 == 1){
            continue;
        }
        output += i; //? 예상 : ?,?,?,?,?
        console.log(output); //? 최종결과 : 
    }
}

// *case. 5  break
function forBreak(){
    for (var i = 1; i <= 10; i++){
        break;
        document.write(i + "<br>");
    }
    document.write("최종 i = " + i + "<br>");
}
// *case. 5-1 break 문제
function breakEx(){
    var i = 0;

    while(i < 6){
        if(i == 3){
            break;
        }
        i = i + 1;
    }
    console.log(i); //? 예상결과 :  3
}

// *case. 5-2 break 문제
function runBreak(){
    for (var i = 0; true; i++){
        alert(i + '번째 반복문');
        if(!confirm('계속할래?')){
            //? break가 구동되려면 if는 true = confirm 확인(true)/취소(false)
           break; 
        }
        // todo 대화창에서 확인을 누르면 계속 진행되고 / 취소를 누르면 중단 되게.
    }
}

// ! 다중 for

// *case.1 반절 피라미드
function halfPyramid(){
    var star = '';
    for (var i = 1; i <= 10; i++){
        for(var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
// todo. 역반절피라미드
function reverseHalfPyramid(){
    var star = '';
    for (var i = 10; i >= 1; i--) {//? 1. ifor = 10~1 까지 수행
        for (var j = 0; j < i; j++) { //? jfor = j가 i보다 작을때 까지 반복 수행 10,9,8,7,6....
            star += '*';//? 변수 star에 반복생성된 만큼 *을 넣음.
        }
        star += '<br>';//? ifor 만큼 <br>을 변수 star에 넣음.
    }
    document.write(star);
}
// todo. pyramid 만들기 - 과제
function pyramid(){
    var star = '';
    // *. 반복시켜야되는 대상 수 - &nbsp;, *, <br> / 만큼의 for문을 작성.
    // !. 각 루프가 할당해야하는 대상을 정확히 지정하기. (ex> i loop, s loop, e loop...)
    // * 한번 반복이 완성 할 때 형태가 star 변수에 어떻게 담기는지 예측하면서 작성.
}