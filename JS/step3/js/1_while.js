/*
    ? while
    * while 반복문은 조건이 참 일 경우 무한 반복.
    * 조건을 규정하여 for 처럼 사용도 가능하나 기본 상태가 무한반복.
*/

// *case.1 password "1234"가 입력되면 "접속승인", 아니면 계속 "잘못 입력하였습니다." 출력하기.
function pwCheck(){
    while(true){ //? 반복문 역시 안에 condition이 true일 때 내부 구문을 실행한다.
        var value = window.prompt("패스워드를 입력하세요.");
        if(value == 1234){
            alert('접속승인');
            break;
        }else{
            alert('잘못 입력하였습니다.');
        }
    }
}

//* case.2 while Continue
function whileContinue(){
    var i = 1;
    while(i<=10){
        i++;
        continue;

        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}

// *case.3 while Break
function whileBreak(){
    var i = 1;
    while(i<=10){
        i++;
        document.write(i + '<br>');
        break;
    }
    document.write('최종 i = ' + i + '<br>');
}

// todo. 구구단 숫자를 입력받아 출력하는 while문 작성하기.
// ? 1. 숫자를 입력받을 prompt 출력.
// ? 2. 숫자를 입력받으면 해당 구구단을 출력.
// * 9단 이내로만 입력받기. ex> 9단이 넘어갈 시 '9단 이하로 입력하세요.' alert 출력.
function gugudan(){
    var guguNumb = window.prompt('구구단 숫자를 입력하세요.(1~9까지만)');
    var i = 1;
    if(guguNumb <= 9){
        while(i <= 9){
            document.write(guguNumb + 'x' + i + '=' + guguNumb*i + '<br>');
            i++;
        }
    }else{
        alert('9단 이하로 입력하세요.');
    }
    /*
    while(i <= 9){
        if(guguNumb > 9){
            alert('9단 이하로 입력하세요.');
            break;
        }
        document.write(guguNumb + 'x' + i + '=' + guguNumb*i + '<br>');
        i++;
    }
    */
}
// todo. end가 입력될 때 까지 숫자를 계속해서 입력받아 합을 출력하고, prompt에는 몇번 수행했는가 'x번째 입력' 표시.
function sumNumb(){

}