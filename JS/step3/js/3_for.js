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

// *case. 11 역반절피라미드
function reverseHalfPyramid(){
    var star = '';
    for(var i = 10; i>=1; i--){ //? 1. ifor = 10 ~ 1까지 수행.
        for(var j = 0; j < i; j++){ //? 2. jfor = j가 i보다 작을때 까지 반복수행 10,9,8,7,6,5...
            star += '*';  //? 변수 star에 생성된 *을 넣음.
        }
        star += '<br>'; //? ifor만큼 <br>을 변수 star에 넣음.
    }
    document.write(star);  //? ifor가 죽는 시점에 star에 담긴 정보들을 출력.
}
// todo. pyramid 완성형
function pyramid(){
    var star = '';
    for(var i = 1; i <= 10; i++){//? 1. ifor = 1~10 까지 수행
        for(var e = 10; e >= i; e--){ //? 2. efor = 10 ~ 1까지 수행
            star += '&nbsp;'; //?. 공백이 10개부터 1개까지 들어감.
        }
        for(var s = 0; s < 2*i-1; s++){ //? 3. sfor = i가 들어올때마다 홀수화 됨. (1,3,5,7,9,11,13,15,17,19)
            star += '*';//? 홀수화 된 s의 수치만큼 반복해서 *이 들어감.
        }
        star += '<br>';//? ifor 만큼 <br>을 변수 star에 넣음
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