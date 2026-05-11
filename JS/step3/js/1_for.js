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
// case.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for(var i =  1; i <= 10; i++){
        document.write(i+". "+userName + "<br>");
    }
}
// case.2 이름을 1,000번 출력해보자.
function namePrint1000(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i++){
        document.write(i + '. ' + userName + "<br>");
    }
}
// todo. 1,000번 출력중 홀수번째에만 이름이 출력되게 만들기
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i<= 1000; i+=2){
        document.write(i + '. ' + userName + "<br>");
    }
}
// case.3 JS Engine처럼 생각하기
function thinkJS(){
    for(var i = 0; i < 10; i++){ //? i가 10보다 작을때 까지만 반복을 수행.
        document.write("i = " + i, "<br>"); //? 위 조건이 참일 경우 실행한다 = 0~9까지 출력.
    }//? i가 증가하다가 10이 되는 순간 break.
    document.write("종료 i = " + i ); //? for loop가 중지될 때 i의 값인 10이 출력.
}
// todo. 1-10까지 출력되는 단순 반복문을 여러개 만들어보기
function answer1(){
    for(var i = 1; i<=10; i+=2){ //?10보다 작거나 같을때 (1~10)까지만 반복 수행. 단, 반복이 끝난후 i에 2를 더함.
        document.write(i+"<br>"); //? 증감이 이루어 지지 않은 1,3,5,7,9
        document.write((i+1)+"<br>"); //? 증감이 이루어진 2,4,6,8,10
    }
}
function answer2(){
    for(var i = 10; i > 0; i--){
        document.write((11 - i) + "<br>");
        console.log(i);
        continue;
        document.write(i+"<br>");
    }
}
function answer3(){
    for(var i = 10; i >= 1; i--){
        document.write((11- i ) + "<br>");
    }
}
// case. 4 * 10개가 찍힌 결과를 출력하자.
function star10(){
    var star = "";
    for(var i = 0; i < 10; i++){
        star += "*";
    }
    document.write("result = " + star);
}
// case. 5 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력해라.
function favorFruit(){
    var array = ['메론','딸기','포도','키위','복숭아'];
    // ? 배열(array) - data들이 저장되는 방. -> ex) ['data'(0),'data1'(1),'data2'(2)......];
    // ! data는 입력 및 저장되는 순서대로 0 부터 증가되게 되어있다.
    for(var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}
// todo. 지금까지 배웠던 JS를 배열을 활용해 출력해보자.
function arrayTodo(){
    var data = ['변수','연산자','형변환','조건문if','조건문 switch','반복문 for'];
    var swapNumb = '';
    for(var i = 0; i < data.length; i++){
        // swapNumb = i;
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
                swapNumb = 'x';
                break;
        }
        document.write(swapNumb+'번째 내용 = ' + data[i] + '<br>');
    }
}
function arrayTodo2(){
    var data = ['변수','연산자','형변환','조건문if','조건문 switch','반복문 for'];
    var swapNumb = ["첫","두","세","네","다섯","여섯"];
    for(var i = 0; i < data.length; i++){
        document.write(swapNumb[i] + " 번째 내용 = " + data[i] + "<br>");
    }
}

// case.6 역반복배열
function reverseFavorFruit(){
    var fruitArr = ['메론','딸기','포도','키위','복숭아'];
    for(var i = fruitArr.length - 1; i >= 0; i--){
        document.write(fruitArr[i],'<br>');
    }
}
// case.7 continue 문
function forContinue(){
    for(var i = 0; i <= 10; i++){
        continue;
        document.write(i+"<br>");
    }
    document.write("최종 i = " + i + "<br>");
}
function continueEx(){
    var text = '';
    for(var i = 0; i < 10; i++){
        if(i == 3){
            continue;
        }
        text = text +i;
    }
    console.log(text);
}

// todo. continue활용 - 1~10까지 더하되 홀수는 걸러내고 짝수만 더하게 만들기
function runContinue(){
    var output = 0;
    for (var i = 1; i <= 10; i++) {
        //조건문
        if (i % 2 == 1) {
            /*
                i가 홀수일 경우 반복 중지 다음반복수행, 현재 다음 반복은 없다.
                (1 을 2로 나눈 나머지가 1과 일치 할경우  다음 반복을 수행하라.) 다시 반복문으로
                (2 를 2로 나눈 나머지가 1과 일치 할경우  다음 반복을 수행하라.) 이탈후 output += i; 실행
                (3 을 2로 나눈 나머지가 1과 일치 할경우  다음 반복을 수행하라.) 다시 반복문으로
                (4 를 2로 나눈 나머지가 1과 일치 할경우  다음 반복을 수행하라.) 이탈후 output += i; 실행
                ..
                이조건으로 i값이 10보다 작거나 같을때까지 수행하여 출력하라.
            */
            continue;                
        }
        output += i; //(2, 6, 12, 20, 30)
        //출력
        console.log(output);
    }
}
// case. 8 break
function forBreak(){
    for(var i = 1; i <= 10; i++){
        break;
        document.write(i+"<br>");
    }
    document.write("최종 i = " + i + "<br>");
}
function breakEx(){
    var i = 0;
    while(i < 6){
        if(i == 3){
            break;
        }
        i = i + 1;
    }
    console.log(i);
}
// case. 9 break활용
function runBreak(){
    for(var i = 0; true; i++){
        alert(i + "번째 반복문");
        if(!confirm('계속할거냐?')){
            break;
        }
    }
}
/* 
todo. 배열값을 변화시키면 자동으로 반응하는 경고창.
todo. console에 "n"번째 반복문이라는 메시지가 떠야하고
todo. 이 "n"번째라고 하는건 배열의 갯수로 규정된다.
todo. length를 사용하는 것이 아니라 무한루프 상태에서 (배열의 갯수만큼만 반복이 실행=조건) 된이후에 break.
todo.  "지정된 배열값 : 6개. 출력 완료" 라는 출력완료 메시지가 document 에 발생.
*/
function runBreak2(){
    var swapNumb = ['첫','두','세','네','다섯','여섯'];
    for(var i = 0; true; i++){
        console.log(swapNumb[i] + '번째 반복문');
        if(i == swapNumb.length-1){
            break;
        }
    }
    document.write('지정된 배열값:' + swapNumb.length + '개. 출력완료'+ '<br>');
}

// ! 다중 for
// case.1 반절피라미드
function halfPyramid(){
    var star = '';
    for(var i =1; i<=10; i++){
        for(var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
// todo. 역반절피라미드
function reverseHalfPyramid(){
    
}
// todo. 완성형피라미드
function pyramid(){

}