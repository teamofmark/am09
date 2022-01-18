/*
    ? 조건문

    * 1. login 후 id, password가 server에 저장된 정보와 같은지 비교 후 승인 혹은 거부.
    * 2. 게임에서 자신이 공격을 했을 때 상대방에게 타격이 되었는지 여부 판단.
    * 3. 경품추첨시 사용자가 뽑은 번호에 따라 당첨여부를 따질 수 있다.
    * 4. 삭제작업 수행시 사용자가 yes를 눌렀을 때 , no를 눌렀을 때 수행 여부 판단.
    * 5. slide같은 ui component의 좌,우 방향으로 최대치로 이동 하였는지 여부 판단.
*/
// *case.1 현재시각이 오후인가 오전인가
function amORpm(){
    var date = new Date();
    var hour = date.getHours();
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
    // ? 변수선언

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

    if(hour < 11){
        alert('아침먹을시간');
    }else if(hour < 15){
        alert('점심먹을시간');
    }else{
        alert('저녁먹을시간');
    }
}

// todo. 홀수, 짝수를 판별하는 함수.
function oddOrEven(){
    var numb = prompt('숫자를 입력하세요.', '홀,수를 구분해줍니다.');

    // ? 홀수,짝수 구분식
    if(numb%2 == 0){
        alert('짝수입니다.');
    }else{
        alert('홀수입니다.');
    }
}
// *case.4 다음 세과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가로 출력.
function avgScore(){
    var koreanScore = prompt('국어점수를 입력하시오.');
    var englishScore = prompt('영어점수를 입력하시오.');
    var mathScore = prompt('수학점수를 입력하시오.');
    var avg = (Number(koreanScore) + Number(englishScore) + Number(mathScore)) / 3;
    if(avg > 100 || avg < 0){
        alert('점수 똑바로 입력하라.');
    }else if(avg >= 90){
        alert('평균' + avg + '점 \n' + '수 입니다. 특급이구만!');
    }else if(avg >= 80){
        alert('평균' + avg + '점 \n' + '우 입니다. 우수하구만!');
    }else if(avg >= 70){
        alert('평균' + avg + '점 \n' + '미 입니다. 괜찮구만!');
    }else if(avg >= 60){
        alert('평균' + avg + '점 \n' + '양 입니다. 망했구만!');
    }else{
        alert('평균' + avg + '점 \n' + '가 입니다. 맞겠구만!');
    }
}
// *case.5 사용자 id를 입력받아 맞다면 승인 메시지 출력.
function userIDCheck(){
    var userID = prompt('사용자의 아이디를 입력하시오.');
    if(userID=='Mark'){
        alert('접속을 승인합니다!');
    }else{
        alert('잘못된 ID입니다.');
    }
}
// todo. 사용자 id "Mark"와 password "1234"를 입력받고 둘다 맞을 경우에만 승인 메시지 출력.
function userInfoCheck(){
    
    // ?변수선언부 2개

    // ? 조건판별(승인 / 거부)
}