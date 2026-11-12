/*
    ? DateClass
    * 날짜 와 시간과 관련된 기능
*/

/*
    ? 시간, 분, 초, m/s 알아내기
    * 1. Date인스턴스.getHours() :
    * 매개변수 = 없음. 리턴값 = 0 - 23까지 정수.
    * 2. Date인스턴스.getMinutes() :
    *  매개변수 = 없음. 리턴값 = 0 - 59 까지 정수.
    * 3. Date인스턴스.getSeconds() :
    * 매개변수 = 없음. 리턴값 = 0 - 59 까지 정수.
    * 4. Date인스턴스.getMilliseconds() : 
    * 매개변수 = 없음. 리턴값 = 0 - 999 까지 정수.
*/

// *ex.1 현재 시간 (시간, 분, 초, m/s) 출력
function nowTime(){
    var nowTime = new Date();
    //? Date 인스턴스 객체 우선 생성.
    //! 시간을 구할 때 마다 new Date(); = 생성하는 시점의 시간 정보를 가져옴. 딜레이 걸리면 잘못된 시간정보 전달.
    var hour = nowTime.getHours();
    var minutes = nowTime.getMinutes();
    var seconds = nowTime.getSeconds();
    var mSeconds = nowTime.getMilliseconds();

    var whatTime = hour+ ":" + minutes + ":" + seconds + ":" + mSeconds;

    console.log(whatTime);
}

/*
    ? 년, 월, 일, 요일 알아내기
    * 1. Date인스턴스.getFullYear() :
    * 매개변수 = 없음. 리턴값 = 네 자리 숫자로 된 연도.
    * 2. Date인스턴스.getMonth() :
    * 매개변수 = 없음. 리턴값 = 0(1월) - 11(12월)까지 정수.
    * 3. Date인스턴스.getDate() :
    * 매개변수 = 없음. 리턴값 = 날짜(일)를 나타내는 1 - 31 까지 정수.
    * 4. Date인스턴스.getDay() :
    * 매개변수 = 없음. 리턴값 = 0(일요일) - 6(토요일) 까지 정수.
*/

// *ex. 2 오늘날짜 출력하기.

function nowDay(){
    var nowDay = new Date();
    var year = nowDay.getFullYear();
    var month = nowDay.getMonth()+1;
    var date = nowDay.getDate();
    var day = nowDay.getDay();
    var dayList = ['일','월','화','수','목','금','토'] //? 반환정수로 사용할 요일 배열

    console.log(year + "년" + month + "월" + date + "일" + dayList[day] + "요일");
}

// todo.1 시계 만들기 (시간 출력, gap 문제 방지)
// todo.2 십의 자리 수가 아닐 때(2,3,4...) 앞에 0 찍어주기 

var $clock = null;

$(document).ready(function(){
    init();
    clock(); //? setInterval 에서 처리하기전에 미리 출력.(0.5초 gap 방지)
    setInterval(clock, 500); //? setInterval에서 약간의 오차 발생 사유로 한번에 2초씩 출력되는 경우발생. 그래서 0.5초.
});

function init(){
    $clock = $("#clock");
}

function clock(){
    var nowTime = new Date();
    var hour = addZero(nowTime.getHours()); //? addZero 매개변수로 값 전달.
    var minutes = addZero(nowTime.getMinutes());
    var seconds = addZero(nowTime.getSeconds());

    var whatTime = hour + " : " + minutes + " : " + seconds; //? addZero 이후 리턴된 값 조합.

    $clock.text(whatTime); //? 출력.
}

function addZero(numb){
    if(numb < 10){ //? 값 판별 0 추가.
        numb = "0" + numb;
    }
    return numb; //? 리턴
}