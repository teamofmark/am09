/*
    조건문
    
    * 실무사용의 예
    * 1. 로그인 후 아이디와 패스워드가 서버에 저장된 정보와 같은지 비교 후 같다면 승인, 아니라면 오류메세지를 띄운다.
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
// *case.1 현재시간이 오후인가 오전인가
function amORpm(){
    var date = new Date();
    var hour = date.getHours();

    if(hour < 12){
        alert('오전입니다.');
    }
    if(hour >= 12){
        alert('오후입니다.');
    }
}
// *case.2 말일인가 아닌가?
function lastDay(){
    var date = new Date();
    var day = date.getDate();

    if(day < 30){
        alert('아직 말일이 아닙니다.');
    }else{
        alert('말일입니다.');
    }
}
// *case.3 아침? 점심? 저녁?
function mealTime(){
    var date = new Date();
    var hour = date.getHours();

    if(hour < 11){ //? 11시보다 현시각이 작을경우 아침.
        alert('아침먹을시간');
    }else if(hour < 16){//? 그게 아니고 16시보다 현시각이 작을경우 점심.
        alert('점심먹을시간');
    }else{ //? 그것도 아닐경우 저녁.
        alert('저녁먹을시간');
    }
}
// *case.4 숫자판별
function numbJudgment(){
    var numb = prompt('숫자를 입력하세요', '양,음수상관없음');
    console.log(typeof(numb) + '=' + numb);
    
    if(numb > 0){
        alert('양수입니다.');
    }else if(numb < 0){
        alert('음수입니다.');
    }else{
        alert('0 이거나 잘못된 값입니다.');
    }
}
// *todo.1 홀수, 짝수 판별.
function oddOrEven(){
    var numb = prompt('숫자입력','홀수,짝수구분해주마');

    // ? if 작성
    if(numb%2 == 0){
        alert('짝수입니다.');
    }else{
        alert('홀수입니다.');
    }
}
// *case.5 다음 세과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가를 출력하라.
function avgScore(){
    var koreanScore = prompt('국어점수를 입력하시오.');
    var englishScore = prompt('영어점수를 입력하시오.');
    var mathScore = prompt('수학점수를 입력하시오.');
    var avg = (Number(koreanScore) + Number(englishScore) + Number(mathScore)) / 3;

    if(avg > 100 || avg < 0){
        alert('점수 똑바로 입력하라...-_-');
    }else if(avg >= 90){
        alert('평균' + avg + '점 \n' + '수 입니다. 똘똘하구만');
    }else if(avg >= 80){
        alert('평균' + avg + '점 \n' + '우 입니다. 우수하구만');
    }else if(avg >= 70){
        alert('평균' + avg + '점 \n' + '미 입니다. 괜찮구만');
    }else if(avg >= 60){
        alert('평균' + avg + '점 \n' + '양 입니다. 망했구만');
    }else{
        alert('평균' + avg + '점 \n' + '가 입니다. 맞겠구만');
    }
}

// *todo.2 사용자 id(Mark)를 입력받아 맞다면 승인메시지(접속승인), 틀리면 거부메시지(잘못된ID) 출력.
function userIDCheck(){
    var userID = prompt('사용자의 아이디를 입력하세요.');// ? 입력(선언부)
    if(userID == "Mark"){
        alert('접속승인');
    }else{
        alert('잘못된ID입니다.');
    }//? 조건(처리부)
        //? 안에는 출력부(alert);
} 
// todo.3 사용자 id "Mark"와 password "1234"를 입력받고 둘다 맞을 경우에만 승인 메시지 출력.
function userInfoCheck(){
    var userID = window.prompt('사용자의 ID를 입력하세요.');
    var userPW = window.prompt('사용자의 PASSWORD를 입력하세요.');
    if(userID == "Mark" && userPW=="1234"){
        alert("Mark님으로 확인되었습니다.");
    }else if(userID != "Mark" || userPW != "1234"){
        alert("ID 혹은 Password가 틀렸습니다.");
    }
} 
// !tune
function userInfoCheck1(){
    var userID = window.prompt('사용자의 ID를 입력하세요.');
    var userPW = window.prompt('사용자의 PASSWORD를 입력하세요.');

    (userID =="Mark" && userPW == '1234')? alert('Mark님으로 확인되었습니다.') : alert("ID 혹은 password가 틀렸습니다.");
    //? (조건식) ? (true실행) : (false실행);
}
// todo. HW 사용자 ID "Mark"와 PASSWORD "1234"의 정보가 틀릴경우. 틀린 것에 대한 오류메시지출력.
function userInfoCheck2(){
    var userID = window.prompt('사용자의 ID를 입력하세요.');
    var userPW = window.prompt('사용자의 PASSWORD를 입력하세요.');
    // ? 성공한경우 .
    if(userID == "Mark" && userPW=="1234"){
        alert("Mark님으로 확인되었습니다.");
    }else if(userID != "Mark"){//? id가 틀린경우. (ID가존재하지않습니다.);
        alert("ID가 존재하지 않습니다.");
    }else{
        alert("PASSWORD가 틀렸습니다.");
    }//? password가 틀린경우.(PASSWORD가 틀렸습니다.);


}