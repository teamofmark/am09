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