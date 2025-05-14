/*
    ? 형변환
    * JS - "10" + "10" = 1010 / 사람 - "10" + "10" = 20 - 이런 인식차를 해결하기위함.
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
    var age = Number(prompt("현재 나이를 입력하시오.")); //? 전역함수 Number - 정,실수 무관 변환.
    var result = age + 20;
    console.log(typeof(age));
    console.log(result);
}
// case.2 강제 숫자 - 문자 형변환
function forcedString(){
    var a = '30';
    var result = 1 + a + 20;
    console.log('result 변수의 최종 자료형은 ' + typeof(result) + " 담긴 값은 " + result + " 입니다.");
}
// case.3 강제 불린 - 숫자 형변환
function forcedNumber(){
    var result = 2 + true;
    console.log('result 변수의 최종 자료형은 ' + typeof(result) + " 담긴 값은 " + result + " 입니다.");
}
// *case.4 강제 불린 - 문자형 변환
function forcedString2(){
    var a = '2';
    var result = a + true;
    console.log('result 변수의 최종 자료형은 ' + typeof(result) + " 담긴 값은 " + result + " 입니다.");
}
// *case.5 test1에 들어있는 숫자를 문자로 명시적 형변환.
/*
    ? String()
    * String(value); - 문자형으로 변환

    ? .toString()
    * Number.toString(); - 문자형(진수)변환

    ? .toFixed()
    * Number.toFixed(); - (소수점자리수(반올림발생))실수문자형 변환.
*/
function stringNumb(){
    var test = 15;
    console.log("변환 전 : " + typeof(test) + ' = ' + test);
    var result = String(test);
    console.log("변환 후 : " + typeof(result) + ' = ' + result);
}
function stringtoNumb(){
    var test = 15;
    console.log("변환 전 : " + typeof(test) + ' = ' + test);
    var result = test.toString();
    console.log("변환 후 : " + typeof(result) + ' = ' + result);
}
// case.5 - 1 randomBackgroundColor
function bgColorRandom(){
    setInterval(() =>{
        var bgColor = Math.random()*0xfff;
        // ? 0x = 16진을 의미 = 15*16^3 + 15*16^2 +  15*16^1 + 15*16^0 - 최대수치를 입력한것
        // ! 2진 표현시 0000 0000 0000 0000 1111 1111 1111 1111 -> 실사용불가 -> 변환.
        console.log(bgColor);
        bgColor = parseInt(bgColor);
        console.log(bgColor);
        bgColor = bgColor.toString(16);
        console.log(bgColor);
        document.querySelector("body").style.backgroundColor="#"+bgColor;
    },1000);
}