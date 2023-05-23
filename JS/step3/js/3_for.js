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
*/
// !단일 for
// *case. 1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for(var i = 1; i <= 10; i++){
        document.write(i+'.'+userName+'<br>');
    }
}
var arr = ['first','second','third']; // ? Array arr[0]

// *case. 2 이름을 1,000번 출력해보자.
function namePrint1000(){
    var userName = "Mark";
    for (var i = 1; i <= 1000; i++){
        document.write(i+'.'+userName+'<br>');
    }
}
// TODO. 1,000번 출력 중 홀수번째만 나오게 해보자. 
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}
// *case. 3 JS Engine처럼 생각해보기
function thinkJS(){
    for(var i = 0; i < 10; i++){ //? i가 10보다 작을 때 (0~9)까지만 반복 수행.
        document.write('i =' + i, "<br>"); //? 0 ~ 9번 까지 출력.
    }//? i가 10이 되는 순간 break.
    document.write('종료 i = ' + i); //? 이미 변경된 10이 출력.
}
// todo. 1 - 10 까지 출력되는 반복문을 다른 형식으로 5개 작성해보기.
function answer1(){
    for(var i=0; i<10; i++){
        document.write((i+1)+'<br>');
    }
}
function answer2(){
    for(var i=1; i<=10; i++){
        document.write(i+'<br>');
    }
}
function answer3(){
    for(var i=100; i<110; i++){
        document.write((i-99)+"<br>");
    }
}
function answer4(){
    for(var i=1; i<=10; i+=2){
        document.write(i+'<br>');
        document.write((i+1)+'<br>');
    }
}
function answer5(){
    for(var i=10; i>=1; i--){
        document.write((11-i)+'<br>');
    }
}
// *case. 4 자신이 좋아하는 과일 4개를 배열로 배치하고 alert으로 출력하라.
function favorFruit(){
    var array = ['딸기','포도','오렌지','수박','메론'];
    /*
    alert(array[0]);
    alert(array[1]);
    alert(array[2]);
    alert(array[3]);
    */
   console.log(array.length);
   for (var i = 0; i < array.length; i++){
        alert(array[i]);
   }
}

// todo. 지금까지 배웠던 JS 단원들을 배열에 넣어 출력.
function arrFor(){
    var data = ['변수','연산자','형변환','조건문if','조건문switch','반복문for'];
    var swapNumb = '';
    for (var i = 0; i < data.length; i++){
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
        document.write(swapNumb + '번째 내용 = ' + data[i] + '<br>');
    }
}

//todo. 구구단 숫자를 입력받아 출력하는 for문.
function gugudan(){
    var guguNumb = prompt('구구단 숫자를 입력');
    for(var i = 1; i <= 9; i++){
        document.write(guguNumb + 'x' + i + '=' + guguNumb*i + '<br>');
    }
}

// todo. 배열의 총 합을 구하기. var data = [10,20,30,40,50];
function arraySum(){
    var data = [10,20,30,40,50];
    var result = 0;
    for (var i = 0; i < data.length; i++){
        result += data[i];
    }
    document.write('해당 배열의 총합은 = ' + result);
}
// *case. 5 역반복배열

function reverseFavorFruit(){
    var array = ['딸기','포도','오렌지','수박','메론'];
    for(var i = array.length - 1; i >= 0; i--){
        document.write(array[i]);
    }
}
// *case. 6 continue (break하고 형제..)
function forContinue(){
    for (var i = 0; i <= 10; i++){
        continue;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
function continueEx(){
    var text = '';
    for (var i = 0; i < 10; i++){
        if(i == 3){
            continue;
        }
        text = text + i;
    }
    console.log(text);
}
// todo. 10까지 짝수의 합을 순차적으로 출력하는 반복문.
function runContinue(){
    var output = 0;
    for(var i = 1; i<=10; i++){
        if(i%2==1){
            continue;
        }
        output += i;
        console.log(output);
    }
}
// *case. 7 break
function forBreak(){
    for (var i = 1; i <= 10; i++){
        break;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
function breakEx(){
    var i = 0;
    while(i < 6){
        if(i == 3){
            break;
        }
        i += 1;
    }
    console.log(i);
}
// todo. 반복수행중단 구현해보기.
function runBreak(){
    for(var i = 0; true; i++){
        // ? 물어보는 팝업 -> confirm('계속할래?'); -> 누르는 버튼에따라 boolean 반환.
        // * 초기실행 0번째 반복문 message Alert
        // * 확인을 누르면 -> 계속할래? message. 확인(true) / 취소(false)
        // * 확인을 누르면 -> n번째 반복문
        // * 취소를 누르면 -> 중단.
        alert(i + '번째 반복문');
        if(!confirm('계속할래?')){
            break;
        }
    }
}
// ! 다중 for (for inner for...)

// *case.1 반절 피라미드
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
// todo. 역반절 피라미드
function reverseHalfPyramid(){
    var star = '';
    for (var i = 10; i>=1; i--){
        for (var j = 0; j < i; j++){
            star+='*';
        }
        star += '<br>';
    }
    document.write(star);
}
// todo. 완성형피라미드 만들어오기
function pyramid(){
    var star = '';
    for(var i = 1; i <= 10; i++){ //? br loop
        for(var e = 10; e >= i; e--){ //? &nbsp; loop
            star += '&nbsp;';
        }
        for(var s = 0; s < 2*i-1; s++){ //? star loop / 홀수화.
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
/*
star 변수에 빈 공간이 마련된다.
        1. i 반복문이 실행된다.

        2. j 에서 초기값 11이 i보다 클때까지만 루프당 e값을 1씩 빼주면서 실행한다.
        ('10''9''8''7''6''5''4''3''2''1') 10 > 0
        ('10''9''8''7''6''5''4''3''2') 10 > 1
        ('10''9''8''7''6''5''4''3') 10 > 2
        ('10''9''8''7''6''5''4') 10 > 3
        ('10''9''8''7''6''5') 10 > 4
        ('10''9''8''7''6') 10 > 5
        ('10''9''8''7') 10 > 6
        ('10''9''8') 10 > 7
        ('10''9') 10 > 8
        ('10') 10 > 9 

        3. k 에서 k값이 2*i -1보다 작을 때 루프당 s값을 1씩 더하면서 실행한다.
         (*) 0 < 1 (2*1-1) // 한번 실행          * why? 첫번째 i 루프가 끝나면 k나 j는 다시 0부터 시작.
        (***) 0 < 3 (2*2-1) // 세번 실행
       (*****) 0 < 5 (2*3-1) // 다섯번 실행
      (*******) 0 < 7 (2*4-1) // 일곱번 실행
     (*********) 0 < 9 (2*5-1) // 아홉번 실행
    (***********) 0 < 11 (2*6-1) // 열한번 실행
   (*************) 0 < 13 (2*7-1) // 열세번 실행
  (***************) 0 < 15 (2*8-1) // 열다섯번 실행
 (*****************) 0 < 17 (2*9-1) // 열일곱번 실행
(*******************) 0 < 19 (2*10-1) // 열아홉번 실행      *why ? i 값이10보다 작거나 같을때 까지만 실행

        4. 줄바꿈(br)이 i 값이 10보다 작거나 같을때 까지만 루프당 i값을 1씩 더하면서 실행된다.
*/
function pyramidEx(){
    for(var i = 0; i < 10; i++){ //? br loop
        for(var j = 9; j > i; j--){
            document.write('&nbsp;');
        }
        for(var j=0; j <= i; j++){
            document.write('*');
        }
        for(var j=1; j <= i; j++){
            document.write('*');
        }
        document.write('<br>');
    }
}
function pyramidCustom(n){
    for (var i = 1; i <= n; i++){
        var s = '';
        for(var j = 1; j <= (2 * n - 1); j++){
            (j>=n + 1 - i && j <= n - 1 +i) ? s+= '*' : s += '';
            // (j >= n + 1 - i && j <= n - 1 + i) ? s += '*' : s += '&nbsp;';
        }
        console.log(s);
        // document.write(s + '<br>');
    }
}