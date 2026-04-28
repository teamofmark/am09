/*
    ? 형변환
    * JS - 10 + "10" = 1010 / 사람 - "10" + "10" = 20 - 이런 인식차를 해결하기위함.
    ! 암시적형변환 - js Engine이 자동으로 변환.  /  명시적 형변환 - 개발자가 직접 지정 변환.

    ? 암시적 형변환 CASE
    * 1. 숫자 + 문자 = 문자.
    * 2. 불린 + 숫자 = 숫자.
    * 3. 불린 + 문자 = 문자.
    
    ? 명시적 형변환
    * method 나 lib Core func를 이용하여 강제로 숫자 -> 문자 로 변환.
*/
// case.1 자신의 나이를 입력받고 20을 더한 값 출력.
function agePlus(){
    var age = window.prompt("나이입력하시오.");
    var result = parseInt(age) + 20;
    console.log("20년 뒤 나의 나이는? " + result + " 세 입니다.");
    console.log(typeof(age),typeof(result));
}
// case.2 강제 숫자 - 문자형 변환.
function forcedString(){
    var a = '30';
    var result = 1 + a + 10;
    console.log("result의 자료유형은 ? " + typeof(result) + " 값은 ? " + result);
}
// case.3 강제 불리언 - 숫자형 변환.
function forcedNumber(){
    var result = 2 + true; //? 불리언 형태를 숫자와 연산이 가능하다.
    console.log("result의 자료유형은 ? " + typeof(result) + " 값은 ? " + result);
}
// case.4 강제 불리언 - 문자형 변환.
function forcedString2(){
    var a = "2";
    var result = a + true;
    console.log("result의 자료유형은 ? " + typeof(result) + " 값은 ? " + result);
}
// case.5 test1에 들어있는 숫자를 문자로 명시적 형변환.
/*
    ? String
    * String(value); - 문자형으로 변환

    ? .toString()
    * Number.toString(); - 문자형(진수)변환

    ? .toFixed()
    * Number.toFixed(); - (소수점자리수(반올림발생))실수문자형 변환.
*/
function stringNumb(){
    var test1 = 15;
    console.log("변환 전 : " + typeof(test1) + " = " + test1);
    var result = String(test1);
    console.log("변환 후 : " + typeof(result) + " = " + result);
}
function stringtoNumb(){
    var test1 = 15;
    console.log("변환 전 : " + typeof(test1) + " = " + test1);
    var result = test1.toString();
    console.log("변환 후 : " + typeof(result) + " = " + result);
}
function bgColorRandom(){
    setInterval(()=>{
        var bgColor = Math.random()*0xfff;
        // ? 0x = 16진을 의미, = 15*16^3 +15*16^2 + 15*16^1 + 15*16^0 - 최대수치
        // ! 2진 표현시 0000 0000 0000 0000 1111 1111 1111 1111.......-> 실사용불가 ->변환.
        console.log("16진 랜덤 추출 : " + bgColor);
        bgColor = parseInt(bgColor);
        console.log("정수형변환 : " + bgColor);
        bgColor = bgColor.toString(16); //? 10이상 a ~15일 경우 f
        console.log("16진수 변환 : " + bgColor);
        document.querySelector("body").style.backgroundColor="#"+bgColor;
    },1000);
}
function fixtoNumb(){
    var pi = 3.14159265;
    console.log("변환 전 : " + typeof(pi) + " = " + pi);
    var result = pi.toFixed(2);
    console.log("변환 후 : " + typeof(result) + " = " + result);
}
// case.6 test에 들어있는 문자를 숫자로 형변환.
/*
    ? Number
    * Number(value); - 정수, 실수 구분없이 형변환.

    ? parse
    * 1. parseInt(value); - 정수형변환
    * 2. parseFloat(value); - 실수형변환
*/
function numbString(){
    var test = '300.15625';
    console.log('변환 전 : ' + typeof(test) + ' = ' + test);
    var result = Number(test) + 10;
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}
function numbString1(){
    var test = '300.95625';
    console.log('변환 전 : ' + typeof(test) + ' = ' + test);
    var result = parseInt(test) + 10;
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}
function numbString2(){
    var test = '300.15625';
    console.log('변환 전 : ' + typeof(test) + ' = ' + test);
    var result = parseFloat(test) + 10;
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}
// todo.1 변수 test에 들어있는 숫자 100을 문자형으로 변형. result 로 출력(typeof 검수필요).
// todo. 1-1 암시적형변환
function todo1(){
    var test = 100;
    var result = test + ""; // todo. 
    console.log(typeof(result) + " = " + result); //! string = 100
}
// todo. 1-2 String 형변환
function todo2(){
    var test = 100;
    var result = String(test); // todo. 
    console.log(typeof(result) + " = " + result); //! string = 100
}
// todo. 1-3 toString 형변환
function todo3(){
    var test = 100;
    var result = test.toString(); // todo. 
    console.log(typeof(result) + " = " + result); //! string = 100
}