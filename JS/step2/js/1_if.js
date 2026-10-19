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
    var date = new Date();
    var hour = date.getHours();
    // console.log(typeof(hour) + ":" + hour);

    if(hour < 12){
        alert('오전입니다.');
    }
    if(hour >= 12){
        alert('오후입니다.');
    }
}
// ?case.2 말일인가 아닌가
function lastDay(){
    var date =  new Date();
    var day = date.getDate();
    // console.log(typeof(day) + ":" + day);
    if(day < 30){
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
// todo. 현재 내가 아침?점심?저녁? 먹을 시간인지 판단해주기
function mealTime(){
    var date = new Date();
    // 1. 시간객체 불러오기
    var hour = date.getHours();
    // 2. 시간추출하기
    if(hour < 11){
        alert('아침먹을시간');
    }else if(hour < 15){
        alert('점심먹을시간');
    }else{
        alert('저녁먹을시간');
    }
    // 3. 조건문작성 (아침먹을조건,점심먹을조건,저녁먹을조건- 메시지 = alert으로출력)
}
// ? case.3  양,음수 판별
function numbJudgment(){
    var numb = prompt('숫자를 입력하세요.');
    if(numb > 0){
        alert('양수입니다.');
    }else if(numb < 0){
        alert('음수입니다.');
    }else if(numb==0){
        alert('0입니다.');
    }else{
        alert('잘못된 입력값 입니다.');
    }
}
// ?case.4 홀,짝수 판별
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
// todo. 다음 세 과목의 점수를 입력받아 평균을 구한 후 수~가 까지 성적 산출하기
function avgScore(){
// 1. 국어,영어,수학 점수를 입력 받을수 있게 만들기
    var koreanScore = Number(prompt('국어점수를 입력하세요.'));
    var englishScore = Number(prompt('영어점수를 입력하세요.'));
    var mathScore = Number(prompt('수학점수를 입력하세요.'));
// 2. 입력받은 세 숫자의 평균을 구하기.
    var avg = ((koreanScore + englishScore + mathScore) / 3).toFixed(2);
    console.log(typeof(avg) + " : " + avg);
// 3. 조건판별 시작(~90: 수 / ~80: 우 / ~70: 미 / ~60: 양 / ~이하: 가 / 예외 : 음수이거나 100을 초과할때)
    if(avg > 100 || avg < 0){
        console.log('점수 똑바로 입력하라.');
    }else if(avg >= 90){
        console.log('평균' + '점 \n' + '수 입니다.');
    }else if (avg >= 80) {
            console.log('평균' + avg + '점 \n' + '우 입니다. 우수하구먼');
    }else if (avg >= 70) {
        console.log('평균' + avg + '점 \n'  + '미 입니다. 괜찮구먼');
    } else if (avg >= 60) {
        console.log('평균' + avg + '점 \n'  + '양 입니다. 망했구먼');
    } else{
        console.log('평균' + avg + '점 \n'  + '가 입니다. 맞겠구먼');
    }
}

// ?case.5 사용자 id를 입력받아 맞다면 승인 메시지 출력
function userIDCheck(){
    var userID = prompt('사용자의 아이디');
    if(userID == "Mark"){
        alert('접속을 승인합니다.');
    }else if(userID != "Mark"){
        alert("잘못된 ID입니다.");
    }
}
function userInfoCheck(){
    var userID = prompt('사용자의 아이디');
    var userPW = prompt('사용자의 패스워드');
    if(userID=="Mark"&&userPW=="1234"){
        alert("Mark님으로 확인되었습니다.");
    }else{
        //  if(userID!="Mark"||userPW!="1234")
        alert("ID 혹은 password가 틀렸습니다.");
    }
}
/*
const axios = require('axios');
axios.get('/user?ID=12345')
    .than(function(response)){
        // 성공핸들링
        console.log(response);
    })
    .catch(function(error)){
        // 오류핸들링
        console.log(error);
    })
    .finally(function(){
        // 항상돌수있는부분
    });
*/
// ! tune. 간소화
function userInfoCheck1(){
    var userID = prompt('사용자의 아이디');
    var userPW = prompt('사용자의 패스워드');
    (userID=="Mark"&&userPW=="1234")? alert("Mark님으로 확인되었습니다.") : alert("ID 혹은 Password가 틀렸습니다.");
}
// ? case. 6 사용자 id "Mark", password "1234"의 정보가 틀린 경우 틀린 정보에 대한 오류 메시지 출력.
function userInfoCheck2(){
    var userID = window.prompt('사용자의 아이디');
    var userPW = window.prompot('사용자의 패스워드');
    if(userID == "Mark" && userPW == "1234"){
        console.log("Mark님으로 확인되었습니다.");
    }else if(userID != "Mark" && userPW !="1234"){
        console.log("모든 정보가 맞지 않습니다.");
    }else if(userID!="Mark"){
        console.log("ID가 존재하지 않습니다.");
    }else if(userPW!="1234"){
        console.log("Password가 틀렸습니다.");
    }
}