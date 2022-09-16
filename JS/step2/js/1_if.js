/*
    ? 조건문
    
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
    var date = new Date();
    var hour = date.getHours(); //? 0 ~ 24시 로전달
    // ? 변수 선언부
    if(hour < 12){
        alert('오전입니다.');
    }
    if(hour >= 12){
        alert('오후입니다.');
    }
}
// *case.2 말일인가 아닌가
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    // ? 변수선언부
    if(day<30){
        alert("아직 말일이 아닙니다.");
    }else{ //? 위 조건외 나머지. / else if - 위 조건이 아니고 이 조건이라면
        alert("말일입니다.");
    }
}

// todo. 현재시각이 내가 조식 / 중식 / 석식중 어떤것을 먹어야할 시간인지 알려주는 조건문 짜기.
function mealTime(){
    var date = new Date();
    var hour = date.getHours();
    // ? 1. 시간가져오기

    if(hour < 11){
        alert('아침먹을시간');
    }else if(hour < 15){
        alert('점심먹을시간');
    }else{
        alert('저녁먹을시간');
    }
    // ? 2. 아침 조건, 점심 조건, 저녁조건 으로 나눠 alert 작성. 
}