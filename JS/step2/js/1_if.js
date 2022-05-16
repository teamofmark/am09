/*
    ? 조건문
    * : 현재 조건(condition)이 맞으면 실행하고 틀리면 실행하지 않는다.(다음 조건문으로 승계)
    * 각 언어마다 문법이 다를 뿐, 개념은 일치.
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

// *case.1 현재시각이 오후인가 오전인가
// todo. 현재시각을 내가 불러올 줄 아는가?
function amORpm(){
    var date = new Date();
    var hour = date.getHours();
    // ? 변수선언

    // ? 조건
    if(hour < 12){
        alert('오전입니다.');
    }
    if(hour >= 12){
        alert('오후입니다.');
    }
}
// *case. 2 말일인가 아닌가.
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    // ? 변수선언

    if(day < 30){ //? 처리
        alert('아직 말일 아님.'); //? 출력
    }else{ //? 2차처리
        alert('말일'); //? 2차 출력.
    }
}
// *case. 3 아침? 점심? 저녁?
function mealTime(){
    var date = new Date();
    var hour = date.getHours();

    if(hour < 11){
        alert('아침먹을시간');
    }else if(hour < 15){
        alert('점심먹을시간');
    }else{
        alert('저녁먹을시간');
    }
}
// *case. 4 양,음수 판별
function numbJudgment(){
    var numb = window.prompt('숫자를 입력해봐','양,음수를 판별해주지');
    // console.log(typeof(numb) + '=' + (numb > 0));
    // var typeNumb = parseInt(numb);
    // ? 선언

    if(numb > 0){ //? 처리
        alert('양수!'); //? 출력
    }else if(numb < 0){
        alert('음수!');
    }else{
        alert('0이 아니면 올바른 값을 좀 넣어.');
    }
}
// todo. 숫자를 입력받고 그 숫자가 홀수인지 짝수인지 판별하기.
function oddOrEven(){
    var numb = window.prompt('숫자를 입력해라.','홀,짝을 구분해주지');
    if(numb%2 == 0){
        alert('짝수입니다.');
    }else if(numb%2 == 1){
        alert('홀수입니다.');
    }else{
        alert('올바른 값을 입력하세요.');
    }
    // ?조건문
}

// *case.5 다음 세 과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가 의 등급으로 출력하기.
