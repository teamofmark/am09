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

// *case. 1 현재 시각이 오후인가 오전인가
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
// *case. 2 말일인가  아닌가
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    if(day<30){
        alert('아직 말일이 아닙니다.');
    }else{
        alert('말일입니다.');
    }
}
function lastDayEx(){
    const rootDiv = document.getElementById("root");
    
    const getLastDayFromMonth = (month = 1) =>{
        return new Date(2024,month,0).getDate();
    }
    for(let i = 1; i <= 12; i++){
        const p = document.createElement("p");
        const lastDay = getLastDayFromMonth(i);
        p.innerText = `2024년 ${i}월 ${lastDay}일 마지막 날은 ${lastDay}.`;
        rootDiv.appendChild(p);
    }
}
// todo. 현재 시각이 본인에게 아침 / 점심 / 저녁 먹을 시간? 알려주는 조건문 짜기
function mealTime(){
    var date = new Date();
    var hour = date.getHours();
    // ?선언부 - 시간정보가져와서 시간추출하기
    
    // ? 세끼 시간을 if문으로 짜기 / alert(xx먹을시간!);
    if(hour < 10){
        alert("아침먹을시간!");
    }
    else if(hour < 15){
        alert("점심먹을시간!");
    }
    else{
        alert("저녁먹을시간!");
    }
}
// *case. 3 양,음수 판별해보기
function numbJudgment(){
    var numb = prompt('숫자를 입력하세요','양,음수상관없음');
    console.log(typeof(numb) + ' = ' + numb);
    if(numb > 0){
        alert('양수입니다.');
    }else if(numb < 0){
        alert('음수입니다.');
    }else{
        alert('입력된 데이터가 0이거나 올바르지 않습니다.');
    }
}
// todo. 홀수 짝수 판별
function oddOrEven(){
    var numb = prompt('숫자를 입력하세요','홀,짝을 구분해드립니다.');// ? prompt를 이용하여 숫자 입력받기

    if(numb%2==0){
        alert('짝수!');
    }// ? alert('짝수!'); 출력하기
    else if(numb%2==1){
        alert('홀수!');
    }// ? alert('홀수!'); 출력하기
    else{
        alert('올바른 값을 입력하세요.');
    }// ? alert('문구작성'); 예외처리 문구 출력하기
}
// *case. 4 다음 세 과목의 점수를 입력받고 평균을 구한후 수,우,미,양,가를 출력하라.
function avgScore(){
    var koreanScore = prompt('국어점수를 입력하시오');
    var englishScore = prompt('영어점수를 입력하시오');
    var mathScore = prompt('수학점수를 입력하시오');
    var avg = (Number(koreanScore)+Number(englishScore)+Number(mathScore)) / 3;
    if(avg > 100 || avg < 0){
        alert('점수똑바로입력하라');
    }else if(avg >= 90){
        alert('평균' + avg + '점 \n' + '수 입니다. 훌륭한데?');
    }else if(avg >= 80){
        alert('평균' + avg + '점 \n' + '우 입니다. 우수한데?');
    }else if(avg >= 70){
        alert('평균' + avg + '점 \n' + '미 입니다. 괜찮은데?');
    }else if(avg >= 60){
        alert('평균' + avg + '점 \n' + '양 입니다. 잘못됐는데?');
    }else{
        alert('평균' + avg + '점 \n' + '가 입니다. 맞겠는데?');
    }
}
// *case. 5 사용자 id를 입력받아 맞다면 승인 메시지 출력.
function userIDCheck(){
    var userID = window.prompt('사용자의 아이디');
    if(userID == "Mark"){
        alert("접속을 승인합니다.");
    }else{
        alert("잘못된 ID 입니다.");
    }
}
/*
axios.get('/user?ID=12345')
    .then(function(response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error);
    })
    .finally(function(){
        
    });
*/
// todo. 사용자 id "mark"와 password "1234"를 입력받고 "둘 다 맞을 경우"에만 승인메시지("Mark님으로 확인되었습니다.") 출력. 거부메시지 ("ID 혹은 PASSWORD가 틀렸습니다.") 출력.
function userInfoCheck(){
    var userID = window.prompt("사용자의 아이디");
    var userPW = window.prompt("사용자의 비밀번호");
    if(userID=="Mark"&&userPW=="1234"){
        alert("Mark님으로 확인되었습니다.");
    }else{ // if(userID!="Mark"||userPW!="1234") 
        alert("ID 혹은 Password가 틀렸습니다.");
    }
}
function userInfoCheck1(){
    var userID = window.prompt("사용자의 아이디");
    var userPW = window.prompt("사용자의 비밀번호");
    (userID=="Mark"&&userPW=="1234")? alert("Mark님으로 확인되었습니다.") : alert("ID 혹은 Password가 틀렸습니다.");
}