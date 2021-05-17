/*
    ? 형변환
    * JS - "10" + "10" = 1010. 사람 - "10" + "10" = 20. 이러한 문제를 해결하기 위함.
    ! 암시적 형변환 - js 엔진이 자동으로 변환. 명시적 형변환 - 개발자가 직접 지정 변환.

    ? 암시적 형변환 CASE
    * 1. 숫자 형 + 문자 형 = 문자형. case.2
    * 2. 불린 형 + 문자 형 = 문자형. case.3
    * 3. 불린 형 + 숫자 형 = 숫자형. case.4
    
    ? 명시적 형변환 CASE
    * 1. 숫자 -> 문자. 
*/

// *case. 1 자신의 나이를 입력받고 20을 더한 값을 출력.
function agePlus(){
    var age = window.prompt('나이입력.');
    var result = Number(age) + 20;
    console.log(result);
}

// *case. 2 강제 숫자 - 문자형 변환

function forcedString(){
    var a = '30';
    var result = 1 + a + 10;
    console.log(result);
}

// *case. 3 강제 불리언 - 숫자형 변환

function forcedNumber(){
    var a = true;
    var result = 2 + a;
    console.log(result);
}

// *todo. 1 다음 식을 jsEngine처럼 생각해보기.
function compareOperater4(){
    console.log(30 > 20 > 10); //? false
}

// *todo. 2 정상 결과가 나올수 있도록 해결.
function compareOperater5(){
    console.log(30 > 20 && 20 > 10); //? true?
}

// *case. 4 강제 불리언 - 문자형 변환

function forcedString2(){
    var a = true;
    var result = '2' + a;
    console.log(result);
}

// *case. 5 test1에 들어있는 숫자를 문자로 형변환.

/*
    ? String
    * String(value); - 문자형으로 변환.
    
    ? .toString()
    * Number.toString(16); - (16진수) 문자형으로 변환.

    ? .toFixed()
    * Number.toFixed(); - (소수점자리수(반올림발생))실수문자형
*/
function stringNumb(){
    var test1 = 15;
    console.log(typeof(test1) + '=' + test1);
    var result = String(test1); //? 전역함수 string
    console.log(typeof(result) + '=' + result);
}
function stringtoNumb(){
    var test1 = 15;
    var result = test1.toString();
    console.log(typeof(result) + '=' + result);
}

// *case.6 test에 들어있는 문자를 숫자로 형변환.
/*
    ? Number
    * Number(value); - 정수 형,실수 형
    
    ? parse
    * 1. parseInt(value); - 정수 형
    * 2. parseFloat(value); - 실수 형

    ? typeof
    * typeof(value); 자료형 판별
*/
function numbString(){
    var test = '300';
    var result = parseInt(test) + 10;
    console.log('result = ' + result);
}
function numbString2(){
    var test = "100.50";
    var result = parseFloat(test) + 20;
    console.log('result = ' + result);
}
function numbStringTodo(){
    var test = "100.50";
    var result = Number(test) + 20;
    console.log('result = ' + result);
}