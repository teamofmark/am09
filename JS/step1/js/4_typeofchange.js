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
function fixtoNumb(){
    var pi = 3.14159265359;
    console.log("변환 전 : " + typeof(pi) + ' = ' + pi);
    var result = pi.toFixed(2);
    console.log("변환 후 : " + typeof(result) + ' = ' + result);
}

// *case.6 test에 들어있는 문자를 숫자로 형변환. (문자인 상태의 숫자를 - 알파벳, 한글 (x))
/*
    ? Number
    * Number(value); - 정수, 실수 구분없이 형변환.

    ? parse
    * 1. parseInt(value); - 정수형변환
    * 2. parseFloat(value); - 실수형변환
*/
function numbString(){
    var test = '300.15625';
    console.log("변환 전 : " + typeof(test) + ' = ' + test);
    // var result = Number(test) + 20;
    // var result = parseInt(test);
    var result = parseFloat(test);
    console.log("변환 후 : " + typeof(result) + ' = ' + result);
}
// todo. 변수 test에 들어있는 숫자 100을 문자형으로 변형. result로 출력(typeof 검수 필요)
// todo.1 - String 을 이용한 문자형변환
function todo1(){
    var test = 100;
    var result = String(test);
    console.log(typeof(result) + " = " + result);
}
// todo.2 - toString 을 이용한 문자형변환
function todo2(){
    var test = 100;
    var result = test.toString();
    console.log(typeof(result) + " = " + result);

}
// todo.3 - 암시적형변환을 이용한 문자형변환 (??? libFunc 사용하면 안됨. js의 암시적형변환을 이용해야함)
function todo3(){
    var test = 100;
    var result = test + '';
    console.log(typeof(result) + " = " + result);
}
// todo.4 이번엔 반대로 문자형을 숫자로 변환 할 것인데 마찬가지로 typeof 검수 필요 (parse)
function todo4(){
    var test = "100.51";
    var result = parseInt(test) + 150 + parseInt("20");
    console.log(typeof(result) + " = " + result);
}
// todo.5 위 상황을 Number 전역함수로 대체한다면?
function todo5(){
    var test = "100.51";
    var result = Number(test) + 150 + Number("20");
    console.log(typeof(result) + " = " + result);
}