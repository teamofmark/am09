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