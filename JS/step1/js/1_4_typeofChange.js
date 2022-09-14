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
// * case.1 자신의 나이를 입력받고 20을 더한 값 출력.
function agePlus(){
    var age = window.prompt();
    var result = parseInt(age) + 20; //? Number - 전역함수. 정,실수 무관 변환. 
    console.log(result);
}
// * case.2 강제 숫자 - 문자형 변환
function forcedString(){
    var a = '30';
    var result =  1 + a + 10;
    console.log(result);
}
// *case.3 강제 불린 - 숫자형 변환
function forcedNumber(){
    var result = 2 + true; //? true = 1, false = 0.
    console.log(result);
}
// *case.4 강제 불린 - 문자형 변환
function forcedString2(){
    var a  = '2' + true;
    console.log(a);
}
// *case.5 숫자 -> 문자로 명시적 형변환.
/*
    ? String
    * String(value) - 문자형으로 변환.

    ? .toString()
    * Number.toString(); - 문자형(진수)으로변환

    ? .toFixed()
    * Number.toFixed(); - 실수문자형 변환(소수점자리수(반올림발생))
*/
function stringNumb(){
    var test1 = 15;
    var result = String(test1);
    console.log(typeof(result) + ' = ' + result);
}
function stringtoNumb(){
    var test1 = 15;
    var result = test1.toString();
    console.log(typeof(result) + ' = ' + result);
}
// *ext. colorCode
function colorRandom(){
    setInterval(function(){
        var colorCode = Math.random()*0xfff;
        colorCode = parseInt(colorCode);
        colorCode = colorCode.toString(16);
        console.log("#" + colorCode);
    },1000);
}
// * case.6 문자 -> 숫자로 형변환.
/*
    ? Number
    * Number(value); - 정수, 실수 구분없이 형변환.

    ? parse
    * 1. parseInt(value); - 정수형 변환
    * 2. parseFloat(value); - 실수형 변환
*/
function numbString(){
    var test = '300.315';
    var result = parseFloat(test) + 10;
    console.log('result = ' + result);
}
// todo. 변수 test에 들어있는 숫자 100을 문자형으로 변환. 3가지방법.

function todo1(){
    var test = 100;
    var result = test; //todo. 암시적 형변환으로 해보기
    console.log(typeof(result) + ' = ' + result); // todo. 정상적으로 문자형태로 변환되었는지 check
}
function todo2(){
    var test = 100;
    var result = test; // todo. 전역함수 사용하여 해보기
    console.log(typeof(result) + ' = ' + result); // todo. 정상적으로 문자형태로 변환되었는지 check
}
function todo3(){
    var test = 100;
    var result = test; // todo. 꼬리함수 사용하여 해보기
    console.log(typeof(result) + ' = ' + result); // todo. 정상적으로 문자형태로 변환되었는지 check
}

// todo. 문자형을 숫자형으로 변환하여 연산이 가능하게 만들기

function todo4(){
    var test = "100.51";
    var result = test + 150 + "20" // todo. 형변환(parse) 하여 연산 가능하게 만들기
    console.log(typeof(result) + ' = ' + result);
}
function todo5(){
    var test = "100.51";
    var result = test + 150 + "20" // todo. 형변환(Number) 하여 연산 가능하게 만들기
    console.log(typeof(result) + ' = ' + result);
}