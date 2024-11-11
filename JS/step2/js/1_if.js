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
// case.1 현재시간이 오후인가 오전인가
function amORpm(){
    var date = new Date(); //? YYYY-MM-DD-HH-MM-SS
    // console.log(date);
    var hour = date.getHours();
    // console.log(hour);
    
    if(hour < 12){
        alert('오전입니다.');
    }else{
        alert('오후입니다.');
    }
}
// * case.2 말일인가 아닌가
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    console.log(day);
    if(day<30){
        alert('아직 말일이 아닙니다.');
    }else{
        alert('말일입니다.');
    }
}
function lastDayEx(){
    function endOfMonth(date){
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
    dt = new Date(); 
        
    console.log(endOfMonth(dt).toString());
}
// todo. 현재 시간이 본인 기준으로 아침? 점심? 저녁을 먹을 시간인지 알려주는 함수 만들기
function mealTime(){
    var date = new Date();
    var hour = date.getHours();
    if(hour < 11){
        alert('아침먹을시간');// 각 조건 상황에 따라 해당 구문이 출력 될 수 있도록 하기.
    }else if(hour < 15){
        alert('점심먹을시간');// 각 조건 상황에 따라 해당 구문이 출력 될 수 있도록 하기.
    }else{
        alert('저녁먹을시간');// 각 조건 상황에 따라 해당 구문이 출력 될 수 있도록 하기.
    }
}
// *case. 3 숫자판별
function numbJudgment(){
    var numb = prompt('숫자를 입력하세요. 양,음수를 구분합니다.');
    console.log(typeof(numb) + ' = ' + numb);
    numb = parseFloat(numb);
    console.log(typeof(numb) + ' = ' + numb);
    if(numb > 0){
        alert('양수입니다.');
    }else if(numb < 0){
        alert('음수입니다.');
    }else{
        alert('입력된 값이 0이거나 올바르지 않습니다.');
    }
}
// todo. 입력된 숫자가 홀수인지 짝수인지 판별하는 조건문 완성하기
function oddOrEven(){
    var numb = prompt('숫자를 입력하세요. 홀,짝수를 구분합니다.');
    
    if(numb%2==0){
        alert('짝수입니다.'); //? 짝수조건을 만들어서 출력
    }else if(numb%2==1){
        alert('홀수입니다.'); //? 홀수조건을 만들어서 출력
    }else{
        alert('올바른 값을 입력하세요.'); //? 오류상황에 따른 메시지 생각하여 기술하기.
    }
}
// case. 4 다음 세과목의 점수를 입력받고 평균을 구한 뒤 수,우,미,양,가 등급으로 출력하라.
function avgScore(){
    var koreanScore = prompt('국어 점수를 입력하시오.');
    var englishScore = prompt('영어 점수를 입력하시오.');
    var mathScore = prompt('수학 점수를 입력하시오.');
    var avg = (Number(koreanScore) + Number(englishScore) + Number(mathScore))/3;
    console.log(avg);
    // 조건문 완성 예정
}