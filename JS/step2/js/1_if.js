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

// *case.3 양,음수 판별
function numbJudgment(){
    var numb = window.prompt('숫자를 입력하세요','양,음수 상관없음');
    console.log(typeof(numb) + ' = ' + numb);
    if(numb > 0){
        alert('양수!');
    }else if(numb < 0){
        alert('음수!');
    }else{
        alert('0 이거나 잘못된 입력값입니다.');
    }
}

// todo. 홀수, 짝수를 판별
function oddOrEven(){
    var numb = window.prompt('숫자를 입력하세요.','홀,짝을 구분해드립니다.');
    if(numb%2 == 0){
        alert('짝수');
    }else if(numb%2 == 1){
        alert('홀수');
    }else{
        alert('올바른 값을 입력하세요');
    }
    // ? 홀수와 짝수를 판별 (예외처리 - '올바른 값을 입력하세요').
}
// * case.4 다음 세 과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가를 출력하라.
function avgScore(){
    var koreanScore = window.prompt('국어점수를 입력하시오.','');
    var englishScore = window.prompt('영어점수를 입력하시오.','');
    var mathScore = window.prompt('수학점수를 입력하시오.','');
    var avg = (Number(koreanScore) + Number(englishScore) + Number(mathScore)) / 3;
    
    if(avg > 100 || avg < 0){
        alert('점수 똑바로 입력하라.');
    }else if(avg >= 90){
        alert('평균' + avg + '점 \n' + '수 입니다. 특급이구먼');
    }else if(avg >= 80){
        alert('평균' + avg + '점 \n' + '우 입니다. 우수하구먼');
    }else if(avg >= 70){
        alert('평균' + avg + '점 \n' + '미 입니다. 괜찮구먼');
    }else if(avg >= 60){
        alert('평균' + avg + '점 \n' + '양 입니다. 망했구먼');
    }else{
        alert('평균' + avg + '점 \n' + '가 입니다. 맞겠구먼');
    }
}
// todo. 사용자 id(Mark)를 입력받아 맞다면 승인 메시지 출력.
function userIDCheck(){
    var userID = window.prompt("사용자의 아이디");
    if(userID=="Mark"){
        alert('접속을 승인합니다.');
    }else{
        alert('잘못된 ID입니다.');
    } //? 승인 되는 조건 - '접속승인' 과 예외 조건 - '잘못된 ID입니다.' 을 처리하시오.
}

// todo. 사용자 id(Mark)와 pasword(1234)를 입력받고 둘다 맞을 경우에만 승인 메시지 출력.
function userInfoCheck(){
    var userID = window.prompt('사용자의 아이디');
    var userPW = window.prompt('사용자의 패스워드');
    //? 승인 되는 조건 - '접속승인' 과 예외 조건 - 'ID 혹은 Password가 틀렸습니다.' 을 처리하시오.
    if(userID == "Mark" && userPW == "1234"){
        alert("접속승인");
    }else{ //? else if(userID != "Mark" || userPW != "1234")
        alert("ID 혹은 Password가 틀렸습니다.");
    }
}