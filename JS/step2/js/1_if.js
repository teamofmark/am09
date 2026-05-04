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
// case.1 현재시간이 오후인가? 오전인가?
function amORpm(){
    var date = new Date();
    // console.log(date);
    var hour = date.getHours();
    // console.log(typeof(hour));
    if(hour<12){
        alert("오전입니다.");
    }
    if(hour>=12){
        alert("오후입니다.");
    }
}
// case. 2 말일인가 아닌가
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    if(day<30){
        alert("아직 말일이 아닙니다.");
    }else{
        alert("말일입니다.");
    }
}
// !tune
function lastDayEx(){
    function endOfMonth(date){
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
    dt = new Date();
    console.log(endOfMonth(dt).toString());
}
// todo. 1 현재 시각이 본인 기준으로 아침?점심?저녁 먹을 시간인지 알려주는 알람함수
function mealTime(){
    var date = new Date();
    var hour = date.getHours();
    if(hour < 11){
        alert("아침머겅"); //? 아침먹을 시간대 조건에 들어가야하는 경고창.
    }else if(hour < 15){
        alert("점심머겅"); //? 점심먹을 시간대 조건에 들어가야하는 경고창.
    }else{
        alert("그만머겅"); //? 저녁먹을 시간대 조건에 들어가야하는 경고창.
    }
}
// case. 3 양음수판별식.
function numbJudgment(){
    var numb = prompt('숫자를 입력하세요','양,음수를 판별합니다.');
    if(numb > 0){
        alert('양수입니다.');
    }else if(numb < 0){
        alert("음수입니다.");
    }else if(numb==0){
        alert("양,음수가 아닌 0 입니다.");
    }else{
        alert("잘못된 입력값입니다.");
    }
}
// todo. 홀,짝수판별식
function oddOrEven(){
        var numb = prompt('숫자를 입력하세요','홀,짝을 구분해드립니다.');

        if(numb%2 == 0){
            alert('짝수입니다.');
        }else if(numb%2 == 1){
            alert('홀수입니다.');
        }else{
            alert('올바른 값을 입력하세요.');
        }
}
// case. 4 다음 세 과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가를 출력하라.
function avgScore(){
    var koreanScore = Number(prompt("국어점수를 입력하시오."));
    var englishScore = Number(prompt("영어점수를 입력하시오."));
    var mathScore = Number(prompt("수학점수를 입력하시오."));
    var avg = ((koreanScore+englishScore+mathScore) / 3).toFixed(2);
    console.log(typeof(avg) + " : " + avg);
    if(avg > 100 || avg < 0){
        alert("점수를 똑바로 입력하세요.");
    }else if (avg >= 90) {
        alert('평균' + avg + '점 \n' + '수 입니다. 특급이구먼');
    } else if (avg >= 80) {
        alert('평균' + avg + '점 \n' + '우 입니다. 우수하구먼');
    } else if (avg >= 70) {
        alert('평균' + avg + '점 \n'  + '미 입니다. 괜찮구먼');
    } else if (avg >= 60) {
        alert('평균' + avg + '점 \n'  + '양 입니다. 망했구먼');
    } else{
        alert('평균' + avg + '점 \n'  + '가 입니다. 맞겠구먼');
    }

    /* 
        todo
        1. 90~99 : 수, 80~89 : 우, 70~79 : 미, 60 ~69 : 양, 60미만 : 가. = alert으로 출력되게 만들기
    */
}