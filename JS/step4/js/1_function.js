/*
    ? function = 함수
    * 기존 반복문으로만 모든 복수사용부분을 해결 할 수 없기 때문에 만들어진 것.
    * 중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 유지보수의 용이성을 확보.
*/

// *case.1 함수의 필요성
/*
document.write("안녕? 방가와","<br>");
document.write("안녕? 방가와","<br>");
document.write("안녕? 방가와","<br>");
*/
/*
for (var i = 0 ; i < 3; i++){
    document.write("안녕? 방가와","<br>");
}
*/
function hello(){
    var comment = "안녕? 방가와";
    document.write(comment,"<br>");
}

// *case.2 매개변수(Parameter)가 있는 함수 만들기.
// ? 함수내 정해진 변수의 value를 변경하여 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결.
// ! 함수 = 폐쇄적.

function sumParam(num1, num2, num3){
    // ? 인자 수가 무조건 지켜져야 하는 단점.(수가 넘치면 무시되고, 모자르면 error).
    var result = num1 + num2 - num3;
    alert("두 수의 합은 = " + result);
}

// *case.3 가변인자함수 (arguments). - 배열인듯 배열아닌 배열같은.
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.
*/

function sumAll(){
    var willReturn = 0;
    for(var i = 0; i < arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(typeof(arguments) + ' : ' + arguments.length + ' / ' + willReturn);
}

function sumAllEX(){
    var willReturn = 0;
    for (var i in arguments){ //? for in. -> i = 0; i < arguments.length; i++
        willReturn += arguments[i];
    }
    return willReturn;
}

// ? 결론 : arguments = 약속되지 않은 임의 매개변수들.

// * "자신의 이름"의 나이는 "자신의 나이"세 입니다. 를 arguments를 이용해 만들어보기.
// ! data의 입력순서를 arguments 내에서 조작 할 수 없다.
function showInfo(){
    alert(arguments[0] + "의 나이는" + arguments[1] + "세 입니다.");
}

/*
    ? return
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 매개변수(param,arguments)를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대되는 개념.
    * 즉, 매개변수 값이 외부에서 내부로 들어오는 입력 부라면, return value는 함수내부에서 처리한 결과를 외부로 전달하는 출력부.
*/

// *case.1 return?
function f(x){
    return x*x; //? 호출부로 리턴. 무엇을? x*x 한 결과를.
}
// ?호출부 console.log(f(3));

// *case.2 두 수를 매개변수로 받고 두 값을 더한 결과값을 리턴.
function sumReturn1(num1, num2){
    var result = num1 + num2;
    return result;
}
// document.write(sumReturn1(10,20));

// todo.1 구구단 출력을 함수로 만들기.
function printGugudan(){
    for (var i = 2; i <= 9; i++){
        document.write(i + '단 출력', "<br>");
        // ? 연산루프 (for)
        for(var m = 1; m <=9; m++){
            document.write(i + "x" + m + "=" + (i*m), "<br>");
        }
        document.write("<br>");
    }
}
// todo.2 다음실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수 만들기.
/*
    //* 실행구문
    document.write("1 결과 =" + calculator("+", 20, 10));
    document.write("2 결과 =" + calculator("-", 20, 10));
    document.write("3 결과 =" + calculator("*", 20, 10));
    document.write("4 결과 =" + calculator("/", 20, 10));
    document.write("5 결과 =" + calculator("%", 20, 10));
    //* 결과 
    결과 = 30
    결과 = 10
    결과 = 200
    결과 = 2
    결과 = 잘못된 연산자 입니다.
*/
function calculator(op, numb1, numb2){
    var result = '';
    switch(op){
        case "+": 
            result = numb1 + numb2;
            break;
        case "-": 
            result = numb1 - numb2;
            break;
        case "*": 
            result = numb1 * numb2;
            break;
        case "/": 
            result = numb1 / numb2;
            break;
        default:
            result = "잘못된 연산자 입니다.";
            break;
    }
    return result;
}

// todo.3 위의 예제를 응용하여 사칙연산부를 함수로 변환, 보다 편하게 사용 할 수 있게 만들기.
/* 
//* 실행구문
todo. document.write(calculator2("+", 20, 10) + "<br>");
! calculator 라는 계산기 함수에서도 구동되고, 개별적인 add(+),sub(-),mul(*),div(/) 함수로도 계산이 되어야함.
todo. document.write(add(20, 10) + "<br>");
todo. document.write(sub(20, 10) + "<br>");
todo. document.write(mul(20, 10) + "<br>");
todo. document.write(div(20, 10) + "<br>");
*/

function calculator2(op, numb1, numb2){
    var result = '';
    switch(op){
        case "+": 
            result = add(numb1,numb2);
            break;
        case "-": 
            result = sub(numb1,numb2);
            break;
        case "*": 
            result = mul(numb1,numb2);
            break;
        case "/": 
            result = div(numb1,numb2);
            break;
        default:
            result = "잘못된 연산자 입니다.";
            break;
    }
    return result;
}

function add(numb1,numb2){
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

// *case. 3 함수를 변수에 담는다.

function hello(name){
    console.log(name + " welcome!");
}

var func = hello;

// *case. 4 매개변수에 함수를 넣어보기.

function hi1(){
    console.log("Hi,");
}
function hi2(){
    console.log("안녕.");
}
function execute(func){
    func();
}
// *case. 5 익명함수 속 매개변수로 전달된 함수.
function welcome(){
    alert("환영. 반갑");
}
$(document).ready(function(){
    $("#runEx8").click(welcome);
});

// *case. 6 1초마다 매개변수 값으로 넘긴 익명 함수 호출.
function loopStart(){
    setInterval(function(){
        document.write("hi. hello!");
    }, 1000); //? libFunc / 고정인자 2개. (실행할 대상, 시간차).
}
// todo.4 함수를 매개변수로 전달받아 반복 호출하기.

function callFunctionTenTimes(otherFunction){
    for(var i = 0; i < 10; i++){
        otherFunction();
    }
}

// callFunctionTenTimes(function(){
//     document.write('hello');
// });

function justFunction(){
    document.write('hello');
}