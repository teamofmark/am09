/*
    ? 조건문
    
    * 실무사용의 예
    * 1. 로그인 시 아이디와 패스워드가 서버에 저장된 정보와 같은지 비교 후 같다면 승인, 아니라면 오류메세지를 띄운다.
    * 2. 게임같은 경우 자신이 공격을 했을 때 상대방을 타격 했는지 여부를 판별 할 수 있다.
    * 3. 경품추첨시 유저가 뽑은 번호에 따라 경품 당첨 여부를 따질 수 있다.
    * 4. 삭제작업 수행시 사용자가 yes를 눌렀을 때와 no 를 눌렀을 때 수행할지 말지를 결정 할 수있다.
    * 5. slide 같은 ui component 의 좌, 우 방향으로 최대치로 이동 하였는지 판별 할 수있다.

	if(273 < 100){
		//표현식 "273 < 100" 이 참일때 실행 = 거짓이기때문에 당연히 실행안함.
		 alert('273<100=>true');
	}
	alert('종료');
    
*/
// *case. 1 현재 시간이 오후인가 오전인가

function amORpm(){
    var date = new Date();
    var hour = date.getHours();

    if(hour < 12){
        alert("오전입니다.");
    }
    if(hour >= 12){
        alert("오후입니다.");
    }
}

// *case. 2 말일인가 아닌가
function lastDay(){
    var date = new Date();
    var day = date.getDate();

    if(day<30){
        alert("아직 말일이 아닙니다.");
    }else{
        alert("말일입니다.");
    }
}

// *case. 3 현재 어떤 식사를 할 시간인가?
function mealTime(){
    var date = new Date();
    var hour = date.getHours();

    if(hour < 11){
        alert("아침먹어라");
    }else if(hour < 15){
        alert("점심먹어");
    }else{
        alert("저녁도먹어");
    }
}
// *case. 4 양,음수 판별
function numbJudgment(){
    var numb = window.prompt('숫자를 입력하세요','양수음수상관없음');
    console.log(typeof(numb) + ' = ' + numb);

    if(numb > 0){
        alert('양수입니다.');
    }else if(numb < 0){
        alert('음수입니다.');
    }else{
        alert('입력된 값이 0이거나 잘못된 값입니다.');
    }
}

// todo. 홀,짝수 판별
function oddOrEven(){
    var numb = window.prompt('숫자를입력하세요','홀,짝 구분 합니다.');
    // todo. 짝수 = 짝수입니다. 홀수 = 홀수입니다. 외 나머지 = 올바른값을 입력하세요.
    if(numb%2 == 0){
        alert('짝수입니다.');
    }else if(numb%2 == 1){
        alert('홀수입니다.');
    }else{
        alert('올바른 값을 입력하세요.');
    }
}

// *case. 5 다음 세 과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가를 출력하라.
function avgScore(){
    var koreanScore = window.prompt('국어점수를 입력하시오.');
    var englishScore = window.prompt('영어점수를 입력하시오.');
    var mathScore = window.prompt('수학점수를 입력하시오.');
    // todo. if x 3 (korean,english,math 세개의 각 과목점수 100점이상 입력불가.)
    var avg = (Number(koreanScore) + Number(englishScore) + Number(mathScore)) / 3;

    if(avg > 100 || avg < 0){
        alert('점수 똑바로 입력하라');
    }else if(avg >= 90){
        alert('평균' + avg + '점 \n' + '수입니다.');
    }else if(avg >= 80){
        alert('평균' + avg + '점 \n' + '우입니다.');
    }else if(avg >= 70){
        alert('평균' + avg + '점 \n' + '미입니다.');
    }else if(avg >= 60){
        alert('평균' + avg + '점 \n' + '양입니다.');
    }else{
        alert('평균' + avg + '점 \n' + '가입니다.');
    }
}