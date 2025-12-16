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
// case.1 현재시각이 오후인가 오전인가
function amORpm(){
    var date = new Date();
    console.log(date);
    // 전역함수 Date를 가져와 생성한다.
    var hour = date.getHours();

    if(hour < 12){
        // 조건이 참이면 실행하고 거짓이면 실행하지 않는다 = 최종값이 무조건 boolean type.
        alert('오전입니다.');
    }
    if(hour>=12){
        alert('오후입니다.');
    }
}
    //?case_2 말일인가 아닌가
	function lastDay(){
        var date=new Date();
        var day=date.getDate();
        //변수선언
        
        if(day<30){
            alert('아직 말일이 아닙니다.');
        }else if(day>=30){
            alert('말일입니다.');
        }
        else{
            alert('2월입니다. 현재는 판단이 불가합니다.');
        }
    }
function lastDayEx(){
    function endOfMonth(date){
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
    dt = new Date();
    console.log(endOfMonth(dt).toString());
}
// todo. 현재시각이 자신을 기준으로 하였을 때 아침 or 점심 or 저녁 먹을 시간인지 알려주는 함수
function mealTime(){
    var date = new Date();
    var hour = date.getHours();

    if(hour<11){   
        // 아침먹을시간
        alert("아침먹어");
    }else if(hour < 15){
        // 점심먹을시간
        alert("많이먹어");
    }else{
        // 저녁먹을시간
        alert("그만먹어");
    }
}

// ? case. 3 숫자판별(양,음수판별)
function numbJudgment(){
    var numb = prompt('숫자를 입력하세요', '양음수를 판별합니다.');
    if(numb > 0){
        alert('양수!');
    }else if(numb < 0 ){
        alert('음수!');
        // todo 현재는 문자입력차단을 못함- 문자입력차단이 가능하게 바꿔보기
    }else if(numb == 0){
        alert('0입니다.');
    }else{
        alert("잘못된 입력값입니다.");
    }
}
// todo. 숫자판별(홀수,짝수판별)
function oddOrEven(){
    var numb = prompt('숫자를 입력하세요', '짝,홀수를 판별합니다.');
    // 짝수일경우
    if(numb%2 == 0){
        alert("짝수입니다.");
    }else if(numb%2 == 1){
        // 홀수일경우
        alert("홀수입니다.");
    }else{
        // 둘다 아닐경우
        alert("올바른 값을 입력하시오.");
    }
}
// todo. 다음 세과목의 점수를 입력받고 평균을 구하되 소수점은 2자리까지만 출력하게 하고 이 결과를 토대로 수,우,미,양,가 등급을 출력해라.
function avgScore(){
    var koreanScore = Number(prompt('국어점수를 입력하시오'));
    var englishScore = Number(prompt('영어점수를 입력하시오'));
    var mathScore = Number(prompt('수학점수를 입력하시오'));
    // todo 평균구하기 -> 소수점절삭
    var avg = ((koreanScore + englishScore + mathScore) / 3).toFixed(2);
    console.log(typeof(avg) + " : " + avg);

    // todo 조건판별해서 점수범위에 따른 수( ~ 90), 우( 89~ 80), 미(79 ~70), 양( 69 ~ 60), 가(59~ )
    if(avg > 100 || avg < 0){
        alert('점수를 똑바로 입력하라.');
    }else if(avg >= 90){
        alert ('평균' + avg +'점 \n' + '수 입니다.');
    }else if(avg >= 80){
        alert ('평균' + avg +'점 \n' + '우 입니다.');
    }else if(avg >= 70){
        alert ('평균' + avg +'점 \n' + '미 입니다.');
    }else if(avg >= 60){
        alert ('평균' + avg +'점 \n' + '양 입니다.');
    }else{
        alert ('평균' + avg +'점 \n' + '가 입니다.');
    }
    // todo 단, 기본 오류 검수는 가능해야함 (성적이 비정상적으로 나옴 ex> 평균이 100을 넘거나 음수가나오는등)
}
// case.4 사용자 id("Mark")를 입력받아 맞다면 승인메시지출력
function userIDCheck(){
    var userID = window.prompt("사용자의 아이디");
    if(userID=="Mark"){
        alert("접속승인");
    }else{
        alert("잘못된 ID입니다.");
    }
}
/*
const axios = require('axios');

axios.get('/user?ID=12345')
    .than(function (response)){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(function(){
        // 항상실행되는 영역
    })
*/
// case.5 사용자 id "Mark"와 password "1234"를 입력받고 둘다 맞을 경우에만 승인메시지 출력
function userInfoCheck(){
    var userID = window.prompt('사용자의 아이디');
    var userPW = window.prompt('사용자의 패스워드');
    if(userID == "Mark"&&userPW == "1234"){
        alert("Mark 님으로 확인되었습니다.");
    }else{
        alert("ID 혹은 Password가 틀렸습니다.")
    }
}
// !
function userInfoTune(){
    var userID = window.prompt('사용자의 아이디');
    var userPW = window.prompt('사용자의 패스워드');

    (userID == "Mark" && userPW == "1234")? alert("Mark 님으로 확인되었습니다.") : alert("ID 혹은 Password가 틀렸습니다.");
}
// todo. 사용자 id "Mark"와 password "1234"의 정보가 틀릴경우 - 틀린정보에 대한 오류메시지 출력.
function userInfoCheck2(){
    var userID = window.prompt('사용자의 아이디');
    var userPW = window.prompt('사용자의 패스워드');
    // todo.1 정상 일때 (승인) - Mark님으로 확인되었습니다.
    if(userID == "Mark"&&userPW == "1234"){
        console.log("Mark님으로 확인되었습니다.");
    }
    // todo.2 모두 비정상일때(비승인) - 모든 정보가 맞지않습니다.
    else if(userID != "Mark"&& userPW != "1234"){
        console.log("모든 정보가 맞지않습니다.");
    }
    // todo.3 아이디가 비정상일때(비승인) - 아이디가 존재하지않습니다.
    else if(userID != "Mark"){
        console.log("아이디가 존재하지않습니다.");
    }
    // todo.4 비밀번호가 비정상일때(비승인) - 비밀번호가 틀렸습니다.
    else if(userPW != "1234"){
        console.log("비밀번호가 틀렸습니다.");
    }
}