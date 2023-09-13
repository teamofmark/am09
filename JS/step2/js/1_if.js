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
    // ?선언부
    console.log("시간왔냐?" + hour + "자료형은?" + typeof(hour));

    if(hour < 12){
        alert("오전이다.");
    }
    // ! 서로 연관 없는 조건문.
    if(hour >= 12){
        alert("오후다.");
    }
}
// *case. 2 말일이냐 아니냐
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    // ?선언부
    console.log("시간왔냐?" + day + "자료형은?" + typeof(day));

    if(day<30){ //? 처리부
        alert('아직 말일이 아닙니다.');
        // ?출력부
    }else{ //? 2차 처리부
        alert('말일입니다.'); //? 2차 출력부
    }
}
// *case. 3 아침?점심?저녁?
function mealTime(){
    var date = new Date();
    var hour = date.getHours();

    if(hour < 11){ //? 아침
        alert('아침먹을시간');
    }else if(hour < 15){ //? 점심
        alert('점심먹을시간');
    }else{ //? 저녁
        alert('저녁먹을시간');
    }
}
// todo. 입력받은 수의 홀수 짝수 판별
function oddOrEven(){
    var numb = window.prompt('숫자를 입력하세요.','홀,짝을 구분합니다.');
    if(numb%2 == 0){ //? 짝수일 때 - 짝수의 최소수를 나눈 나머지가 0일때.
        alert('짝수!');
    }else if(numb%2 == 1){ //? 홀수일 때 - 짝수의 최소수를 나눈 나머지가 1일때.
        alert('홀수!');
    }else{ //? 예외처리
        alert('올바른 값을 입력하세요.');
    }
}
// *case. 4 다음 세과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가를 출력하라.
// ! ~ 90 수 / ~ 80 우 / ~ 70 미 / ~ 60 양 / 59~ 가
function avgScore(){
    var koreanScore = prompt('국어점수를 입력하시오.');
    var englishScore = prompt('영어점수를 입력하시오.');
    var mathScore = prompt('수학점수를 입력하시오.');
    var avg = (Number(koreanScore) + Number(englishScore) + Number(mathScore)) / 3;
    
    if(avg > 100 || avg < 0){
        alert('점수똑바로 입력하라');
    }else if(avg >= 90){
        alert('평균' + avg + '점\n' + '수입니다.');
    }else if(avg >= 80){
        alert('평균' + avg + '점\n' + '우입니다.');
    }else if(avg >= 70){
        alert('평균' + avg + '점\n' + '미입니다.');
    }else if(avg >= 60){
        alert('평균' + avg + '점\n' + '양입니다.');
    }else{
        alert('평균' + avg + '점\n' + '가입니다.');
    }
}