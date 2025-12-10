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
    var age = window.prompt("나이를 입력하세요.");
    // console.log(typeof(age));
    var result = Number(age) + 20;
    console.log(result);
}
// case.2 강제 숫자 - 문자형 변환.
function forcedString(){
    var a = '30';
    var result = 1+ a +10; // 기존 언어 방식들에선 대부분 err, 반면 js는 암시적형변환 개념으로 인해. 강제변환.
    console.log(result);
}
// case.3 강제 불린 - 숫자형 변환.
function forcedNumber(){
    var result =  2 + true;
    console.log("result의 자료유형은" + typeof(result) + "값은" + result);
}
// case.4 강제 불린 - 문자형 변환.
function forcedString2(){
    var a  = '2';
    var result = a + true;
    console.log("result의 자료유형은" + typeof(result) + "값은" + result);
}
// *case.5 test1에 들어있는 숫자를 문자로 명시적 형변환.
/*
    ? String
    * String(value); - 전역함수. 모든 문자형 변환 가능 =? 편한데, 내의도된 문자형태가 아닐수도 있음.

    ? .toString()
    * Number.toString(); - 꼬리함수.(tailingFunction). 문자형(진수)변환

    ?.toFixed()
    * Number.toFixed(); - 실수문자형변환(소수점자리수를정함)
*/
// * case. 5-1
function stringNumb(){
    var test1 = 15;
    console.log('변환 전 : ' + typeof(test1) + ' = ' + test1);
    var result = String(test1);
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}
// * case. 5-2
function stringtoNumb(){
    var test1 = 15;
    console.log('변환 전 : ' + typeof(test1) + ' = ' + test1);
    var result = test1.toString();
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}
//  etc background-color (random)
function bgColorRandom(){
    setInterval(()=>{
        var bgColor = Math.random()*0xfff;
        console.log(bgColor);
        bgColor = parseInt(bgColor);
        console.log(bgColor);
        bgColor = bgColor.toString(16);
        console.log(bgColor);
        document.querySelector("body").style.backgroundColor = "#" + bgColor;
    },1000);
}
// * case. 5-3
function fixtoNumb(){
    var pi  = 3.14159265;
    console.log('변환 전 : ' + typeof(pi) + ' = ' + pi);
    var result = pi.toFixed(2);
    console.log("변환 후 : " + typeof(result) + ' = ' + result);
}
// *case. 6 test에 들어있는 문자를 숫자로 형변환.
/*
    ? Number
    * Number(value); - 정수, 실수 구분없이 형변환

    ? parse
    * 1. parseInt(value); - 정수형변환 (올림처리없음)
    * 2. parseFloat(value); - 실수형변환
*/
// *case. 6-1
function numbString(){
    var test = '300.15625';
    console.log('변환 전 : ' + typeof(test) + ' = ' + test);
    var result = parseInt(test) + 10;
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}
// todo.1 변수 test에 들어있는 숫자 100을 문자형으로 변형.(각기다른) 출력문(typeof검수-위 예제들처럼)
// todo. 1-1 암시적형변환 방식
function todo1(){
    var test = 100;
    console.log('변환 전 : ' + typeof(test) + ' = ' + test);
        //todo 암시적형변환 - 숫자와 문자가 더해졌을 때 -> 문자가됨
    var result = test + "";
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}
// todo. 1-2 String 형변환
function todo2(){
    var test = 100;
    console.log('변환 전 : ' + typeof(test) + ' = ' + test);
        //todo 전역함수형변환
    var result = String(test);
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}
// todo. 1-3 toString 형변환
function todo3(){
    var test = 100;
    console.log('변환 전 : ' + typeof(test) + ' = ' + test);
        //todo 꼬리함수형변환
    var result = test.toString();
    console.log('변환 후 : ' + typeof(result) + ' = ' + result);
}
// todo. 2 문자 형을 숫자 형으로 변환하여 연산이 가능하게 만들기
// todo. -1 parse형변환
function todo4(){
    var test = '100.51';
    // todo. 아래 식을 연산이 가능하게
    var result = parseInt(test) + 150 + parseInt("20");
    console.log('test + 150 + 20의 연산 후 : ' + typeof(result) + ' = ' + result); //! 답이 270이 나와야함
}
function todo5(){
    var test = '100.51';
    // todo. 아래 식을 연산이 가능하게
    var result = parseFloat(test) + 150 + Number("20");
    console.log('test + 150 + 20의 연산 후 : ' + typeof(result) + ' = ' + result); //! 답이 270.51이 나와야함
}