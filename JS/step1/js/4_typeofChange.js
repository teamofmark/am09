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
// * case. 1 자신의 나이를 입력받고 20을 더한 값 출력.
function agePlus(){
    var age = window.prompt("나이를 입력하시오");
    // * Javascript -> ECMAScript -> type,coffee....
    // ? 입력 - input tag's 의 value(값)을 가져와 넣는 것.
    console.log(typeof(age));
    var result = Number(age) + 20;
    console.log(result);
}
// * case. 2 강제 숫자 - 문자형 변환.
function forcedString(){
    var a = '30';
    var result = 1 + a + 10;
    console.log("result의 자료유형은 " + typeof(result) + " 값은 " + result);
}
// * case. 3 강제 불린 - 숫자형 변환.
function forcedNumber(){
    var result = 2 + true; //? true = 1, false = 0.
    console.log("result의 자료유형은 " + typeof(result) + " 값은 " + result);
}
// * case. 4 강제 불린 - 문자형 변환.
function forcedString2(){
    var a = '2';
    var result = a + true;
    console.log("result의 자료유형은 " + typeof(result) + " 값은 " + result);
}

// * case. 5 test1에 들어가있는 숫자를 문자로 명시적 형변환 처리.
/*
    ? String
    * String(value); - 괄호안 대상을 문자형변환.

    ? .toString
    * value.toString(); - 점 앞 대상을 문자형(진수)변환.

    ? .toFixed()
    * value.toFixed(); - 점 앞 대상을 문자형(실수)변환. 괄호안에 숫자를 넣으면 해당 자리수 만큼 소수점 반올림 가능.
*/
function stringNumb(){
    var test1 = 15;
    console.log('변환 전 : ' + typeof(test1) + ' = ' + test1);
    var result = String(test1);
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}
function stringtoNumb(){
    var test1 = 15;
    console.log('변환 전 : ' + typeof(test1) + ' = ' + test1);
    var result = test1.toString();
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}