/*
    ? for
    * 특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    * ex>
    * 게시글 목록 불러올 때
    * map api(naver, google, daum)에서 map 정보를 출력.
    * gallery 안에서 img list 출력할 때
    * O/S 등의 파일탐색기의 파일 목록 출력할 때.
    
    ! loop
    ! 1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 !> 3. 참일경우 문장 실행 > 4. 종결식 실행.
*/
// * case.1 자신의 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for (var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo. 이름을 1000번중에 홀수 번째만 나오게 해보자.
function namePrint500(){
    var userName = "Mark";
    for (var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}

// *case. 2 1 - 10 까지 출력되는 반복문을 jsEngine처럼 생각하고 적기.
function answer1(){
    for (var i = 0; i < 10; i ++){ //? 10보다 작을 때 (0 ~ 9)까지만 반복수행
        document.write((i + 1) + "<br>"); //? 1 ~ 10 번 까지 출력.
    }
}
function answer2(){
    for (var i = 1; i <= 10; i++){ //? 10보다 작거나 같을 때 (1 ~ 10) 까지만 반복 수행.
        document.write(i + '<br>'); //? 1 ~ 10 번 까지 출력.
    }
}
function answer3(){
    for (var i = 100; i < 110; i++){ //? 110보다 작거나 같을 때 (100 ~ 109) 까지만 반복 수행
        document.write((i - 99) + '<br>'); //? 1 ~ 10번 까지 출력.
    }
}
function answer4(){
    for (var i = 1; i <= 10; i+=2){ //? 10보다 작거나 같을 때 (1 ~ 10) 까지만 반복 수행. 단 루프당 i 에 2를 더함
        document.write(i + '<br>'); //? 홀수 출력부 : 1, 3, 5, 7, 9
        document.write((i + 1) + '<br>'); //? 짝수 출력부 : 2, 4, 6, 8, 10
    }
}
function answer5(){
    for (var i = 10; i >= 1; i--){ //? 1보다 크거나 같을 때 (10 ~ 1) 까지만 반복 수행. i는 1씩 감소.
        document.write((11 - i) + '<br>'); //? 1 ~ 10번 까지 출력.
    }
}

// *case.3 자신이 좋아하는 과일 4개를 배열로 배치하고 alert으로 출력.
function favorFluit(){
    var array = ['메론','포도','딸기','파인애플','귤','복숭아','용과'];
    for (var i = 0; i < array.length; i++){
        alert(array[i]);
    }
    console.log(array.length);
}
// todo. 지금까지 배웠던 JS 단원을 배열을 활용해 출력.
function arrayFor(){
    var data = ['변수','연산자','형변환','조건문 if','조건문 switch', '반복문 while', '반복문 for'];
    for (var i = 0; i < data.length; i++){
        document.write((i + 1) + '번째 내용 = ' + data[i] + '<br>');
    }
}
function arrayForES6(){
    var data = ['변수','연산자','형변환','조건문 if','조건문 switch', '반복문 while', '반복문 for'];
    for (let i = 0; i < data.length; i++){
        const element = data[i];
        document.write(i + '번째 내용 = ' + element + '<br>');
    }
}

// *case.4 역반복 배열
function reverseFavorFluit(){
    var array = ['메론','포도','딸기','파인애플','귤','복숭아','용과'];
    for (var i = array.length - 1; i >= 0; i--){
        document.write(array[i]);
    }
}

// *case.5 continue
function forContinue(){
    for (var i = 0; i <= 10; i++){
        continue; //? 위 조건이 참일 지라도 continue가 존재하면, continue이하 구문은 실행불가.
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
// *case.6 continue 활용해보기
function runContinue(){
    var output = 0;
    for (var i = 1; i <= 10; i++){
        if(i % 2 == 1){
            continue;
        }
        output += i;
        alert(output);
    }
}
// *case.7 break
function forBreak(){
    for (var i = 1; i <= 10; i++){
        break; //? 위 조건이 참일 지라도 break가 존재 하면, 속한 루프(꼭 루프만은 아님) 에서 강제로 빠져나오게 된다.
        document.write(i + '<br>'); 
    }
    document.write('최종 i = ' + i + '<br>'); //? 1
}
// *case.8 break활용
function runBreak(){
    for (var i = 0; true; i++){
        alert(i + '번째 반복문');
        if(!confirm('계속할래?')){
            break;
        }
    }
}


// ! 다중 for

// *case.9 반절 피라미드
function halfPyramid(){
    var star = '';
    for (var i = 1; i <= 10; i++){ //? 1.
        for(var j = 0; j < i; j++){ //? 2.
            star += '*'; //? 3.
        }
        star += '<br>'; //? 4.
    }
    document.write(star); //? 5.
}

// * case.10 역반절 피라미드
function reverseHalfPyramid(){
    var star = '';
    for(var i = 10; i >= 1; i--){ //? 1.
        for (var j = 0; j < i; j++){ //? 2.
            star += '*'; //? 3.
        }
        star += '<br>'; //? 4.
    }
    document.write(star); //? 5.
}
//  todo. pyramid 만들기
function pyramid(){

}
/*
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
*/