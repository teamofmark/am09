/*
    조건문
    - 조건이 참일 경우 실행하고 거짓일 경우 실행하지 않는 분기문

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
// case. 1 현재 시각이 오후인가 오전인가 를 알 수 있는 조건문
function amORpm(){
    // 비교식을 세워야 하는데 .. 비교할 대상인 "현재시간을" 못불러옴.
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    // yyyy-mm-dd:hh-mm-ss
    // 제일 먼저 테스트해봐야 하는 것은? - 정상적으로 내가 예상한 값이 오는가-
    // console.log("현재 불러와진 값의 자료형은" + typeof(currentDate) + " 이고, 값은 " + currentDate);
    // ? 조건을 세워야 하는데... 오전의 조건은? 정오 - 12보다 작을 때 오후의 조건? 12보다 크거나 같을 때
    if(currentHour < 12){
        alert("오전입니다.");
    } else {
        alert("오후입니다.");
    }
    // conditionPart(조건부) 가 참이면 내부 logic을 실행하고 거짓이면 건너뜀.
    // 조건의 대상의 수가 곧 조건문의 수여야 함.
    // 연계 - else if(~이 아니라 만약에) / else(이 아닐때 = 외 나머지다)
}
// todo. 현재 일자가 말일 인가 말일이 아닌가
// ? 말일을 절대적으로 구하지는 못할테니 그냥 30과 비교 하였을때로 조건문 잡아서 처리

// ! 나중에 알아보게 되면 사용할 말일 구하기
function lastDayEx(){
    function endOfMonth(date){
        return new Date(date.getFullYear(), date.getMonth() + 1 , 0);
    }
    dt = new Date();
    console.log(endOfMonth(dt).toString());
}