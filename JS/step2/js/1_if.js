/*
    조건문
    - 조건이 참일 경우 실행하고 거짓일 경우 실행하지 않는 분기문

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
// case. 1 현재 시각이 오후인가 오전인가 를 알 수 있는 조건문
function amORpm(){
    // 비교식을 세워야 하는데 .. 비교할 대상인 "현재시간을" 못불러옴.
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    // yyyy-mm-dd:hh-mm-ss
    // 제일 먼저 테스트해봐야 하는 것은? - 정상적으로 내가 예상한 값이 오는가-
    // console.log("현재 불러와진 값의 자료형은" + typeof(currentDate) + " 이고, 값은 " + currentDate);
    // ? 조건을 세워야 하는데... 오전의 조건은? 정오 - 12보다 작을 때 오후의 조건? 12보다 크거나 같을 때
    if(currentHour < 12){
        alert("오전입니다.");
    } else {
        alert("오후입니다.");
    }
    // conditionPart(조건부) 가 참이면 내부 logic을 실행하고 거짓이면 건너뜀.
    // 조건의 대상의 수가 곧 조건문의 수여야 함.
    // 연계 - else if(~이 아니라 만약에) / else(이 아닐때 = 외 나머지다)
}
// todo. 현재 일자가 말일 인가 말일이 아닌가
// ? 말일을 절대적으로 구하지는 못할테니 그냥 30과 비교 하였을때로 조건문 잡아서 처리
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    if(day<30){
        alert("아직말일아님");
    }else{
        alert("말일입니다.");
    }
}

// ! 나중에 알아보게 되면 사용할 말일 구하기
function lastDayEx(){
    function endOfMonth(date){
        return new Date(date.getFullYear(), date.getMonth() + 1 , 0);
    }
    dt = new Date();
    console.log(endOfMonth(dt).toString());
}
// todo. 현재 시각이 자신을 기준으로 아침 ? 점심 ? 저녁 ? 먹을 시간 판별해주는 조건식을 세워라
// ? ex> 11시 이전이면(if) 아침먹을 시간, 15시 이전이면(else if) 점심먹을 시간 외 나머지는(else) 저녁먹을시간
function mealTime(){
    var date = new Date();
    var hour = date.getHours();

    if(hour < 11){ //? 11시보다 현시각이 작으면 아침
        alert("아침머겅");
    }else if( hour < 15 ){ //? 위 조건을 제외한(그것이 아니고) 15시보다 현시각이 작으면 점심
        alert("점심머겅");
    }else{ //? 그것도 아닐 경우 저녁
        alert("그만머겅");
    }
}
// case.2 숫자판별식(양,음수판별)
function numbJudgment(){
    var numb = prompt("숫자를 입력하세요.");
    // prompt 함수를 통해서 입력된 값은.. 자료유형이.. 무엇이었을까 = string
    // ? 형변환 - js 비교식에서 문자인숫자 와 숫자를 비교하면 정상비교가 가능함.
    if(numb > 0){
        alert("양수입니다.");
    }else if(numb < 0){
        alert("음수입니다.");
    }else{
        alert("그거하나 똑바로 입력 못하냐?");
    }
    // ? 구해야 하는 상황이 두개 = 아니지! 세개지...
}
// todo. prompt를 통해 입력된 숫자가 홀수인지 짝수인지 판별하는 조건식을 짜봐라.
function oddOrEven(){
    var numb = prompt("숫자를 입력하면 홀,짝을 구분해드립니다.");
    // 짝수의 조건 - ? 짝수의 최소수인 2로 나눴을 때 나머지가 0 
    if(numb%2 == 0){
        alert("짝수입니다.");
    }
    // 홀수의 조건 - ? 짝수의 최소수인 2로 나눴을 때 나머지가 1
    else if(numb%2 == 1){
        alert("홀수입니다.");
    }
    // 예외처리
    else{
        alert("올바른 값을 입력하세요.");
    }
}
// case.3 사용자 id를 입력 받아 "Mark"(dataBase.call을 사용할 수 없으니까)와 일치 한다면 승인메시지 출력.
function userIDCheck(){
    var userID = prompt("사용자 아이디를 입력하세요");
    if(userID == "Mark"){
        alert("접속승인");
    }else{
        alert("잘못된ID입니다.");
    }
}
// case.4 사용자 id "Mark",password "1234"일 경우에만 승인메시지 출력
function userInfoCheck(){
    var userID = prompt("사용자 아이디를 입력하세요");
    var userPW = prompt("비밀번호를 입력하세요");
    // 아이디와 비밀번호가 모두 일치 되었을 때
    if(userID=="Mark"&&userPW=="1234"){
        alert("접속승인");
    }
    // 일치되지 않았을 때
    // else if(userID!="Mark" || userPW != "1234"){
    else{
        alert("꺼뎌");
    }
}
/*
const axios = require('axios');
axios.get('/user?ID=Mark')
    .then(function (response){
        console.log(response);
    })// 성공!
    .catch(function(error){
        console.log(error);
    })// 실패(오류)!
    .finally(function(){
        // 상시실행영역 - 보안방화벽, 대조판별식...기타등등..
    });
*/
//  !tune. 삼항처리
function uicTune(){
    var userID = prompt("사용자 아이디를 입력하세요");
    var userPW = prompt("비밀번호를 입력하세요");
    (userID=="Mark"&&userPW=="1234")?alert("접속승인"):alert("꺼뎌");
}
// case.5 사용자 ID "Mark"와 PASSWORD "1234"의 정보가 틀릴 경우 틀린 정보에 대한 오류 메시지 출력
function userInfoCheck2(){
    var userID = prompt("사용자 아이디를 입력하세요");
    var userPW = prompt("비밀번호를 입력하세요");
    if(userID == "Mark" && userPW =="1234"){
        console.log("Mark님으로 확인되었습니다.");
    }
    // 아이디만 틀릴 경우
    else if(userID != "Mark"){
        console.log("아이디가 틀리셨습니다. 각하");
    }
    // 패스워드만 틀릴 경우
    else if(userPW != "1234"){
        console.log("비밀번호가 틀리셨습니다. 각하");
    }
    // 모든 정보가 틀릴 경우
    else{
        console.log("에헤이 조졌네 이거");
    }
}
// todo. 1 각 수를 프롬프트를 통해 입력받아 해당하는 조건의 메시지를 출력하라.
// ? 1이 입력될 경우 "1등! 10억!", 2가 입력될 경우 "2등! 5천!", 3이 입력될 경우 "3등! 3백!", 외 나머지 "낙첨되었습니다."
function lotto(){
    var numbValue = prompt("입력하실 번호는?");
    if(numbValue == 1){
        alert("1등 10억!");
    }else if(numbValue ==2){
        alert("2등 5천만원!");
    }else if(numbValue == 3){
        alert("3등 3백만원!");
    }else{
        alert("낙첨되었습니다.");
    }
}
// todo. 2 다음 코드를 실행해보고 결과를 확인한 후 간소화 하시오. (? if x 1, else x 1로)
function btnMouseEx(){
    var clickBtn = window.prompt("누르실 마우스 버튼을 입력하세요 (왼쪽,오른쪽,가운데)");
    /*if(clickBtn=="오른쪽"){
        console.log("오른쪽!");
    }else if(clickBtn=="왼쪽"){
        console.log("왼쪽!");
    }else if(clickBtn=="가운데"){
        console.log("가운데!");
    }else{
        console.log("올바른값을 입력하세요.");
    }*/
   if( clickBtn=="오른쪽" || clickBtn=="왼쪽" || clickBtn=="가운데" ){
    console.log(clickBtn + "!");
   }else{
    console.log("올바른 값을 입력하세요");
   }
}
// todo. 3 다음 세 과목의 점수를 prompt로 입력 받고 평균을 구한 뒤(소수점은 두자리에끊어야함) 수,우,미,양,가 등급으로 나누어 출력해라.
function avgScore(){
    var koreanScore = Number(prompt(" 국어점수를 입력하세요."));
    var englishScore = Number(prompt(" 영어점수를 입력하세요."));
    var mathScore = Number(prompt(" 수학점수를 입력하세요."));

    var avg = ((koreanScore + englishScore + mathScore) / 3).toFixed(2); // 연산
    console.log(typeof(avg) + " : " + avg);
    if(avg >100 || avg < 0){
        alert("점수 똑바로 입력해라");
    }else if(avg >= 90){
        alert("평균" + avg + "점"+ " 등급은 수.");
    }else if(avg >= 80){
        alert("평균" + avg + "점"+ " 등급은 우.");
    }else if(avg >= 70){
        alert("평균" + avg + "점"+ " 등급은 미.");
    }else if(avg >= 60){
        alert("평균" + avg + "점"+ " 등급은 양.");
    }else{
        alert("평균" + avg + "점" + " 등급은 가.");
    }
    // 수 - 90점 이상
    // 우 - 89점 이하(min: 80)
    // 미 - 79점 이하(min: 70)
    // 양 - 69점 이하(min: 60)
    // 가 - 59점 이하(min: 0)
}