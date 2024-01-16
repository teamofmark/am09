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

// *case. 1 현재 시각이 오후인가 오전인가
function amORpm(){
    var date = new Date();
    var hour = date.getHours();
    if(hour < 12){
        alert('오전입니다.');
    }
    if(hour >= 12){
        alert('오후입니다.');
    }
}
// *case. 2 말일인가  아닌가
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    if(day<30){
        alert('아직 말일이 아닙니다.');
    }else{
        alert('말일입니다.');
    }
}
function lastDayEx(){
    const rootDiv = document.getElementById("root");
    
    const getLastDayFromMonth = (month = 1) =>{
        return new Date(2024,month,0).getDate();
    }
    for(let i = 1; i <= 12; i++){
        const p = document.createElement("p");
        const lastDay = getLastDayFromMonth(i);
        p.innerText = `2024년 ${i}월 ${lastDay}일 마지막 날은 ${lastDay}.`;
        rootDiv.appendChild(p);
    }
}