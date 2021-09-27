/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// *case.1 매개변수(Parameter)가 있는 함수

function sumParam(num1, num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result);
}

// *case.2 arguments(가변인자함수) = 매개변수의 자리가 없어도 있는것처럼..배열방식으로 받는다.
/*
    ? arguments 객체는 모든 함수안에서 사용하는 지역 변수.
    ? arguments를 이용해 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함.
    ? arguments는 array(배열)와 비슷해 보이지만 length를 구하는 것을 제외 하고 array와 다르다.
    ! 필요에따라 array로 변환하여 사용 가능.
*/
function sumAll(){
    alert(typeof(arguments) + ':' + arguments.length);
}

function sumAllExp(){
    var willReturn = 0;
    for (var i in arguments){
                //for in 반복문은 IE9 이상에서만 가능. vue.js 등의 프론트엔드 프레임워크에서 사용.
        willReturn += arguments[i];
        // willReturn 이라는 변수에 arguments(매개변수의 배열) 내의 값을 더해서 대입해라. 배열의 갯수만큼.
    }
    return willReturn;
    // 나온값을 리턴하라.
}

// *case.3 매개변수의 자리가 없는 곳에 입력된 매개변수를  arguments를 이용하여 출력.
function showInfo(){
    console.log("0 = " + arguments[0]);
    console.log("1 = " + arguments[1]);
    alert(arguments[0] + '의 나이는' + arguments[1] + '세 입니다.');
}
/*
    ? return (리턴)
    ? 함수는 함수내부라는 범위안에 갇히기 때문에, 한번 실행되면 함수 외부 접근 불가.
    ? 매개변수,가변인자를 활용하면 함수 내부로 데이터를 전달 할 수 있는데 return value는 그와 반대되는 개념.
    ? 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력값이라면, 리턴값은 함수 내부에서 처리한 결과값을 함수 외부로 전달하기 위해 사용하는 값.

    !ex
    function f(x){
        return x * x;
    }

    alert(f(3));
 */

// *case.4 두 수를 매개변수로 받고, 두 값을 더한 결과를 리턴하는 함수.

function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result; //? 지를 불러주는 위치에 return. = 호출부리턴.
}

// *case.5 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수.
// ! 단 입력값이 0이면 즉시 실행을 멈춘다.

function infiniteSum(){
    var sum = 0;
    var count = 1;

    while(true){
        var value = parseInt(window.prompt('숫자만 입력하라.'));
        if(value == 0){
            document.write('종료');
            return; // break;
        }

        sum += value;
        document.write(count + '. ' + sum + '<br>');
        count++;
    }
    document.write('총' + count + '번 실행함.');
}

// todo. 1 구구단출력 함수로 만들기.

function printGugudan(limitDan){
    for (var i = 2; i <= limitDan; i++){
        document.write(i + '단 출력', '<br>');
        for(var m = 1; m <= limitDan; m++){
            document.write(i + '*' + m + '=' + (i*m), '<br>');
        }
        document.write('<br>');
    }
}
// todo.2 다음실행구문으로 전달받은 매개변수로  계산하여 결과를 출력하는 함수.
// ! calculator("+", 20, 10); = 30
// ! calculator("-", 20, 10); = 10
// ! calculator("*", 20, 10); = 200
// ! calculator("/", 20, 10); = 2
// ! calculator("%", 20, 10); = 잘못된 연산자입니다.
function calculator(op,numb1,numb2){
    // ! 선언 > 처리 > 출력.
    var result = '';
    switch (op) {
        case "+":
            result = add(numb1,numb2); //? console.log(add(20,10));
            break;
        case "-":
            result = sub(numb1,numb2); //? console.log(sub(20,10));
            break;
        case "*":
            result = mul(numb1,numb2); //? console.log(mul(20,10));
            break;
        case "/":
            result = div(numb1,numb2); //? console.log(div(20,10));
            break;
        default:
            result = '잘못된 연산자 입니다.';
            break;
    }
    return result;
}
// todo.3 위의 예제에 추가로 사칙연산부를 함수로 변환하여 보다 편하게 사용 할 수 있게 변형하기.

function add(numb1, numb2){
    var addResult = numb1 + numb2; 
    return addResult;
}
function sub(numb1, numb2){
    return numb1 - numb2;
}
function mul(numb1, numb2){
    return numb1 * numb2;
}
function div(numb1, numb2){
    return numb1 / numb2;
}

// *case.6 함수를 변수에 담기

function hello(name){
    console.log(name + "환영합니다.");
}
var func = hello;

// *case.7 매개변수 값으로 함수 사용.

function hi1(){
    console.log('Hello?');
}
function hi2(){
    console.log('안녕하세요?');
}
function execute(func){
    func();
}
// *case. 8 button click 시에 매개변수 값으로 넘긴 함수 호출하기.
function welcome(){
    alert('환영? 감사! 반갑.');
}
$(document).ready(function(){
    $("#runEx8").click(welcome);
});

// *case. 9 1초마다 매개변수 값으로 넘긴 익명 함수 호출.
function loopStart(){
    setInterval(function(){
        document.write('hi, hello');
    });
}

// ?응용

function callFunctionTenTimes(otherFunction){
    for(var i = 0; i < 10; i++){
        otherFunction();
    }
}
function justFunction(){
    document.write('hello World', '<br>');
}
/*
    ? 익명함수로
callFunctionTenTimes(function(){
    document.write('hello world', '<br>');
});
*/
// *case. 10 return 값으로 함수를 사용하기.
function createHello(){
    function hello(user){
        document.write(user + 'welcome!');
    }
    return hello;
}
var result = createHello();