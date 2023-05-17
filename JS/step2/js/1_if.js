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
// *case. 1 현재시간이 오후인가 오전인가
function amORpm(){
    var date = new Date();
    var hour = date.getHours();
    // ? 변수 - 선언부
    // console.log(hour);

    if(hour < 12){
        alert('오전입니다.');
    }
    if(hour >= 12){
        alert('오후입니다.');
    }
    // ? 조건문 - 처리부
}
// *case. 2 말일이냐? 아니냐?
function lastDay(){
    var date = new Date();
    var day = date.getDate();

    if(day<30){
        alert('아직 말일이 아닙니다.');
    }else{
        alert('말일입니다. 2월은 나도몰라');
    }
}
// todo. 아침 먹을시간? 점심 먹을시간? 저녁 먹을시간?
function mealTime(){
    var date = new Date();
    var hour = date.getHours();

    if(hour < 11){//? 아침먹을시간 - 11시 보다 작으면 아침
        alert('아침먹을시간 - 많이먹어');
    }else if(hour < 15){//? 점심먹을시간 - 그것이 아니고 15시보다 현시각이 작으면 점심.
        alert('점심먹을시간 - 적당히먹어');
    }else{ //? 그것도 아니라면 저녁.
        alert('저녁먹을시간 - 먹을거야?');
    }
}
// todo. 홀수 짝수 구분해주는 조건문
function oddOrEven(){
    var numb = window.prompt('숫자를 입력하세요.','홀,짝을 구분해드립니다.');

    // ? 홀수의 조건? 짝수의 조건? - 수의 시작이 홀,짝? 0,1 <- 2의 규칙을 갖는 수들은 나누었을때 나머지가 0. 그것의 1이 더해지는 수들은 나머지가 무조건 1이된다.  
    if(numb%2 == 0){
        alert('짝수입니다.');
    }else if(numb%2 == 1){
        alert('홀수입니다.');
    }else{
        alert('값 똑바로 넣어라.');
    }
}
// *case. 3 양,음수 판별식
function numbJudgment(){
    var numb = prompt('숫자를 입력하세요.','양,음수 상관없음.');
    console.log(typeof(numb) + ' = ' + numb);
    if(numb > 0){
        alert('양수입니다.');
    }else if(numb < 0){
        alert('음수입니다.');
    }else{
        alert('값 똑바로 넣어라. 응? 0이냐?');
    }
}
// todo. 다음 세 과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가를 출력하라.
function avgScore(){
    
    alert('점수똑바로 입력하라.');
    alert('평균' + avg + '점 \n' + '수 입니다. 특급이구먼');
    alert('평균' + avg + '점 \n' + '우 입니다. 우수하구먼');
    alert('평균' + avg + '점 \n'  + '미 입니다. 괜찮구먼');
    alert('평균' + avg + '점 \n'  + '양 입니다. 망했구먼');
    alert('평균' + avg + '점 \n'  + '가 입니다. 맞겠구먼');
}
