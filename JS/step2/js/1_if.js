/*
    조건문
    
    실무사용의 예
    1. 로그인 후 아이디와 패스워드가 서버에 저장된 정보와 같은지 비교 후 같다면 승인, 아니라면 오류메세지를 띄운다.
    2. 게임같은 경우 자신이 공격을 했을 때 상대방을 타격 했는지 여부를 판별 할 수 있다.
    3. 경품추첨시 유저가 뽑은 번호에 따라 경품 당첨 여부를 따질 수 있다.
    4. 삭제작업 수행시 사용자가 yes를 눌렀을 때와 no 를 눌렀을 때 수행할지 말지를 결정 할 수있다.
    5. slide 같은 ui component 의 좌, 우 방향으로 최대치로 이동 하였는지 판별 할 수있다.

	* if(273 < 100){
	* 	//표현식 "273 < 100" 이 참일때 실행 = 거짓이기때문에 당연히 실행안함.
	* 	 alert('273<100=>true');
	* }
	* alert('종료');
    
*/

// * case. 1 현재시각이 오후인지 오전인지
function amORpm(){
    var date = new Date();
    var hour = date.getHours();
    // ? 변수 선언

    // ?조건문 - 조건처리부(식) or 판별부(식)
    if(hour < 12){
        alert('오전입니다.');
    }
    if(hour >= 12){
        alert('오후입니다.');
    }
}
// * case. 2 말일인지 아닌지.
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    // ?변수선언

    if(day < 30){
        alert('아직 말일이 아닙니다.');
    }else{
        alert('말일입니다.');
    }
}
// todo. 1 아침 먹을 시간? 점심? 저녁?
function mealTime(){
    var date = new Date();
    var hour = date.getHours();
    // ? 시간 변수선언

    if(hour < 10){
        alert('아침먹을시간');
        //? ? 시보다 현시각이 작으면 아침 - A
    }else if(hour < 15){
        alert('점심먹을시간');
        //? ? (A시이후) 시보다 현시각이 작으면 점심 - B
    }else{
        alert('저녁먹을시간');
        //? ? 그것도(B시) 아닐경우에는 저녁.
    }
    // ? 조건 처리부
}
// *case. 3 양,음수 판별
function numbJudgment(){
    var numb = Number(prompt('숫자를 입력', '양,음수 상관없음'));
    if(numb > 0){
        console.log(typeof(numb));
        alert('양수');
    }else if(numb < 0){
        console.log(typeof(numb));
        alert('음수');
    }else{
        alert('0이거나 올바르지 못한 입력값 입니다.');
    }
}
// todo. 2 홀수, 짝수 판별식

function oddOrEven(){
    var numb = Number(prompt('숫자를 입력하세요','홀,짝을 구분해주마.'));
    // ? 변수선언 - prompt로 숫자를 입력받아야됨.

    if(numb%2 == 0){
        alert('짝수!');
    }else{
        alert('홀수!');
    }
    // ? 조건처리부 2case(짝수 / 홀수) 에 맞는 alert을 띄워주기. A(홀or짝) or B(그외나머지것)

}
// *case. 4 사용자 id를 입력받아 맞다면 승인 메시지 출력.
function userIDCheck(){
    var userID = window.prompt('사용자의 아이디를 입력하세요.');
    if(userID == "Mark"){
        alert('접속승인!');
    }else if(userID != "Mark"){
        alert("잘못된 ID입니다.");
    }
}
// *case. 5 사용자 id "Mark", password "1234"를 입력받고 둘다 맞을 경우에만 승인 메시지 출력.
function userInfoCheck(){
    var userID = window.prompt('사용자의 아이디');
    var userPW = window.prompt('사용자의 비밀번호');
    if(userID == "Mark" && userPW == "1234"){
        alert('Mark님으로 확인되었습니다.');
    }else if(userID != "Mark" || userPW != "1234"){
        alert('ID 혹은 Password가 틀렸습니다.');
    }
    // (userID == "Mark" && userPW == "1234")? alert("Mark님으로 확인되었습니다.") : alert("ID 혹은 Password가 틀렸습니다.");
    // ? condition? true : false;
}

// todo. 3 다음 세과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가를 출력해라.
function avgScore(){
    var koreanScore = ;
    var englishScore = ;
    var mathScore = ;
    // ? 변수선언 - 점수 입력받기.
    var avg = ;
    // ? 2차변수 처리 - 평균구하기 (prompt = string > number);

    /*
        ? 100점 이상 0점 이하 일경우 경고 - 점수 똑바로 입력해라.
        ? 평균 90 이상 (위 예외처리) - 수
        ? 평균 80 이상 (위 예외처리) - 우
        ? 평균 70 이상 (위 예외처리) - 미
        ? 평균 60 이상 (위 예외처리) - 양
        ? 평균 60 미만 (위 예외처리) - 가
    */

}