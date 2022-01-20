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

// *case. 1 - 10 까지 출력되는 반복문을 jsEngine처럼 생각하고 적기.
function answer1(){
    for (var i = 0; i < 10; i ++){ //? 
        document.write((i + 1) + "<br>"); //?
    }
}
function answer2(){
    for (var i = 1; i <= 10; i++){ //?
        document.write(i + '<br>'); //?
    }
}
function answer3(){
    for (var i = 100; i < 110; i++){ //?
        document.write((i - 99) + '<br>'); //?
    }
}
function answer4(){
    for (var i = 1; i <= 10; i+=2){ //?
        document.write(i + '<br>'); //?
        document.write((i + 1) + '<br>'); //?
    }
}
function answer5(){
    for (var i = 10; i >= 1; i--){ //?
        document.write((11 - i) + '<br>'); //?
    }
}