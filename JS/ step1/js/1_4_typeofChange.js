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
// *case.1 자신의 나이를 입력받고 20을 더한 값 출력.
function agePlus(){
    var age = window.prompt('나이입력');
    console.log(typeof(age) + ' = ' + age);
    var result = parseInt(age) + 20;
    console.log(typeof(result) + ' = ' + result);
    console.log(result);
}
// *case.2 강제 숫자 - 문자형 변환
function forcedString(){
    var a = '30';
    var result = 1 + a + 10;
    console.log("result의 자료유형은" + typeof(result) + "값은" + result);
}
// *case.3 강제 불린 - 숫자형 변환
function forcedNumber(){
    var result = 2 + true;
    console.log("result의 자료유형은" + typeof(result) + "값은" + result);
}
// *case.4 강제 불린 - 문자형 변환
function forcedString2(){
    var a = '2';
    var result = a + true;
    console.log("result의 자료유형은" + typeof(result) + "값은" + result);
}
// *case.5 test1에 들어있는 숫자를 문자로 명시적 형변환.
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
    console.log('변환 전 : ' + typeof(test1) + ' = ' + test1);
     //? var result = String(test1); 전역함수 String.
    var result = test1.toString();
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}
// *case.5-1 background-color / Random
function bgColorRandom(){
    setInterval(function(){
        var bgColor = Math.random()*0xfff; //? 0000 0000 0000 0000 0000 1111 1111 1111;
        console.log(bgColor);
        bgColor = parseInt(bgColor);
        console.log(bgColor);
        bgColor = bgColor.toString(16);
        console.log(bgColor);
        $("body").css("background-color", "#" + bgColor);
    },1000);
}
// *case. 6 test에 들어있는 문자를 숫자로 형변환.
/*
    ? Number
    * Number(value); - 정,실수 구분없이 형변환.

    ? parse
    * 1. parseInt(value); - 정수형변환.
    * 2. parseFloat(value); - 실수형변환.
*/
function numbString(){
    var test = '300.15625';
    console.log('변환 전 : ' + typeof(test) + ' = ' + test);
    var result = parseFloat(test) + 10;
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}
// todo. 1 변수 test에 들어있는 숫자 100을 문자형으로 변환. result변수로 출력 하고 typeof로 자료형 점검.
// todo. 1-1 암시적형변환
function todo1(){
    var test = 100;
    var result = test+""; //todo. 지시사항대로 형변환.
    console.log(typeof(result) + " = " + result); //todo. typeof로 검수 및 출력
}
// todo. String 사용
function todo2(){
    var test = 100;
    var result = String(test); //todo. 지시사항대로 형변환.
    console.log(typeof(result) + " = " + result); //todo. typeof로 검수 및 출력
}
// todo. toString 사용
function todo3(){
    var test = 100;
    var result = test.toString(); //todo. 지시사항대로 형변환.
    console.log(typeof(result) + " = " + result); //todo. typeof로 검수 및 출력
}
// todo.2 문자 형을 숫자 형으로 변환하여 연산이 가능하게 만들기.
// todo. 2-1 parse형변환
function todo4(){
    var test = "100.51";
    var result = test + 150 + "20";
    console.log(typeof(result) + " = " + result); //todo. typeof로 검수시 정상 연산 및 출력 되게하기
}

// todo. 2-2 Number형변환
function todo5(){
    var test = "100.51";
    var result = test + 150 + "20";
    console.log(typeof(result) + " = " + result); //todo. typeof로 검수시 정상 연산 및 출력 되게하기
}