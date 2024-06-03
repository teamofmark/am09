/*
    조건문
    
    실무사용의 예
    1. 로그인 시 아이디와 패스워드가 서버에 저장된 정보와 같은지 비교 후 같다면 승인, 아니라면 오류메세지를 띄운다.
    2. 게임같은 경우 자신이 공격을 했을 때 상대방을 타격 했는지 여부를 판별 할 수 있다.
    3. 경품추첨시 유저가 뽑은 번호에 따라 경품 당첨 여부를 따질 수 있다.
    4. 삭제작업 수행시 사용자가 yes를 눌렀을 때와 no 를 눌렀을 때 수행할지 말지를 결정 할 수있다.
    5. slide 같은 ui component 의 좌, 우 방향으로 최대치로 이동 하였는지 판별 할 수있다.

	if(273 < 100){
		//표현식 "273 < 100" 이 참일때 실행 = 거짓이기때문에 당연히 실행안함.
		 alert('273<100=>true');
	}
	alert('종료');
    
*/
// *case.1 현재시간이 오후인가 오전인가
function amORpm(){
    // * 내가 할 줄 모르는 기능 -> 검색.. -> Refns(JS MDN) -> 영문 (핵심키워드) -> ex> js date call
    var date = new Date();
    var hour = date.getHours();
    // ? 선언
    if(hour<12){
        alert('오전입니다.');
    }
    if(hour>=12){
        alert('오후입니다.');
    }
}
// *case.2 말일인가 아닌가
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    // console.log(day);
    if(day<30){
        alert('아직 말일이 아닙니다.');
    }else{
        alert('말일입니다.');
    }
}
// ! 말일 쉽게 구하기
function lastDayEx(){
    function endOfMonth(date){
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
    dt = new Date();
    console.log(endOfMonth(dt).toString());
}
// todo. 현재 시각이 아침 / 점심 / 저녁 먹을 시간인지 알려주는 함수 만들어보기
function mealTime(){
    var date = new Date();
    var hour = date.getHours();
    // ? 시간정보 가져와 담기
    
    if(hour<11){
        alert('아침먹을시간');
    }else if(hour<15){
        alert('점심먹을시간');
    }else{
        alert('저녁먹을시간');
    }
    // ? 시간정보가 '??먹을 시간!' 이라는 메시지를 출력할 수 있게 만들기.
}

// *case. 3 양,음수 판별 함수
function numbJudgment(){
    var numb = window.prompt('숫자를입력하세요','양/음수 상관없음');
    console.log(typeof(numb) + ' = ' + numb);
    if(numb > 0){
        alert('양수입니다.');
    }else if(numb < 0){
        alert('음수입니다.');
    }else{
        alert('0이거나 입력값이 올바르지 않습니다.');
    }
}
// todo. prompt를 통해 입력받은 숫자가 홀수인지 짝수인지 판별하는 함수
function oddOrEven(){
    // ? 1. prompt를 통해 입력받기

    // ? 2. 조건문을 통해 짝수 조건 잡기 (짝수입니다.)
        // ? 2-1. 외 나머지 조건을 통해 홀수 조건 잡기(홀수입니다.)
        // ? 2-2. 외 전체 조건을 통해 예외처리하기(올바른 값을 입력하세요.)
}