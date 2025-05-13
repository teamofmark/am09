/*
    ? 자료형
    * 1. 숫자형 (Number)
    * 정수형 10진수(일상생활 사용 숫자 소수점x) ex > 33, 44
    * 정수형 16진수(0x ~ 로 시작하여 0~9, A~F 로 모든 숫자 표현) ex> #f00 색상코드
    * 실수형 (소수점을 갖는 숫자) ex > 60.6 

    * 2. 문자형 (String)
    * 일상생활 사용 글자
    
    * 3. 논리형 (Boolean)
    * true(참-1) or false(거짓-0)
    * true : 맞음, 1, 같음, 진실, 성공
    * false : 틀림, 0, 같지않음, 거짓, 실패
    
    * 4. undefined
    * 미정의된(초기화 되지 않은, 기본초기값), 들어오지 않은 자료형.
    * ex.1 > var data1; alert('data1 =' + data1);
    * ex.2 >
    function exFunc(data1){
        alert("data1 = " + data1);
    }
    exFunc();

    * 5. null
    * 아무것도 참조하지 않은 자료형. (객체를 담기위한 변수를 초기화 하는 상태)
    * ex > var data = null;

    ! 이외 함수(function), 객체(object) 등이 존재.
*/
// case.1 자신이 가장 좋아하는 숫자를 favorNumber변수에 담아 자료형을 check해보자.
function testTypeof(){
    var favorNumber = 1;
    console.log("favorNumberDataTypeof = " + typeof(favorNumber));
}
// case.2 자신의 영어이름을 engName변수에 담아 자료형을 check.
function textTypeof(){
    var engName = "Mark";
    console.log("내 영문 이름의 자료 형은? " + typeof(engName));
}
// case.3 현재 자신의 상태가 추운지(true) 아닌지(false)를 cold 변수에 담아 자료형을 check.
function check1(){
    var cold = false;
    console.log("추위를 느끼고 있나?" + cold + "(" + typeof(cold) + ")");
}
// case.4 로그인 상태를 loginStatus 변수에 담아 자료형을 출력 및 점검
function check2(){
    var loginStatus;
    console.log("로그인 된 상태인가?" + loginStatus + "(" + typeof(loginStatus) + ")");
    loginStatus = false;
    console.log("로그인 된 상태인가?" + loginStatus + "(" + typeof(loginStatus) + ")");
    loginStatus = true;
    console.log("로그인 된 상태인가?" + loginStatus + "(" + typeof(loginStatus) + ")");
}
// todo.5 test 변수를 선언하고 초기화 하지 않은 상태에서 자료형을 check 해보자.
function check3(){
    var test;
    // ex > 초기화 하지 않은 변수의 자료유형은? = 자료유형 입니다.
    console.log("초기화 하지 않은 변수의 자료유형은 " + typeof(test) + "입니다.");
}
// todo.6 obj 변수에 객체를 담을 예정이니 null로 초기화해서 자료형을 check 해보자.
function check4(){
    var obj = null;
    // ex > obj의 자료유형은? = 자료유형 입니다.
    console.log("obj에 담긴 값의 자료유형은 " + typeof(obj) + "입니다.");
}