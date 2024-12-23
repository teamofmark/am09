/*
    ? function (함수) = (기능) / lib,method,handler..

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// case.1 함수의 필요성
/* -1. 초기모델
document.write("안녕? 방가와." + "<br>");
document.write("안녕? 방가와." + "<br>");
document.write("안녕? 방가와." + "<br>");
*/
/* -2. 변수사용
var comment = "안녕? 방가와.";
document.write(comment + "<br>");
document.write(comment + "<br>");
document.write(comment + "<br>");
*/
/* -3. 반복사용
var comment = "안녕? 방가와.";
for(var i = 0; i < 3; i++){
    document.write(comment,"<br>");
}
*/
function commentFunc(count){
    var comment = "안녕? 방가와.";
    for(var i = 0; i < count; i++){
        document.write(comment,"<br>");
    }
}
// case.2 매개변수(parameter)가 있는 함수 만들기
function commentParam(count,comment){
    for(var i = 0; i < count; i++){
        document.write(comment,"<br>");
    }
}
// case.3 특정 숫자의 연산.
function sumParam(num1,num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result);
}
// case. 4 매개변수의 자리가 없어도 있는 것처럼...arguments(가변인자함수)
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.
*/
function sumAll(){
    console.log(typeof(arguments) + ' :' + arguments.length);
    var willReturn = 0;
    for(var i = 0; i < arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}
// case.5 "자신의 이름"의 나이는 "자신의 나이"세 입니다. 를 arguments를 이용해 만들어보기.
function showInfo(){
    alert(arguments[0] + "의 나이는" + arguments[1] + "세 입니다.");
    // todo ???? 공간을 완성하여 ex> Mark의 나이는 44세 입니다.
}
/*
    ?return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를 함수 외부로
    * 전달하기 위해 사용하는 출력 부.
*/
function sumAllEX(){
    // alert(typeof(arguments) + ' : ' + arguments.length);
    // ? arguments - 약속되지 않은 임의 매개변수들.
    var willReturn = 0;
    for (var i in arguments){ //for in 반복문은 IE9 이상에서만 가능. vue.js (v-for) 등의 프론트엔드 프레임워크에서 사용.
        // const i = 0;
        // var i = 0; i<arguments.length; i++
        willReturn += arguments[i];
        // willReturn 이라는 변수에 arguments(매개변수의 배열) 내의 값을 더해서 대입해라. 배열의 갯수만큼.
    }
    return willReturn;
    // 나온값을 리턴하라.

}
// document.write(sumAllEX(1,2,3,4,5,6,7,8,9,10));
function f(x){
    return x*x;
}

// case.6 returnValue를 변수에 저장하고 전달하기
function sumReturn1(num1,num2){ //? 이 함수에는 고정형인자 2개. (num1,num2) 존재
    var result = num1+num2; //? 위 인자를 통해 전달된 값 2개의 연산은 result 변수에 담김
    return result; //? 담긴 값은 위 함수가 실행된 위치로 반환.
}
var returnVal = sumReturn1(10,20); //? 위 함수가 실행된 위치.
// ! 즉 returnVal변수가 실행된 위치가 곧 sumReturn1함수가 실행된 위치가 됨으로 return값을 전달 받을수 있다.

// todo. 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수
// ! 단, 입력값이 0이라면 즉시 실행중지

function infiniteSum(){
    var sum = 0; 
    var count = 1;

    while(true){
        var value = parseInt(window.prompt("숫자만 입력해라."));
        if(value == 0){
            document.write("종료","<br>");
            return; //  return; return 은 함수를 빠져나오지만, break는 루프를 빠져나오기 때문에 "총 x 번 실행함 구문이 출력"
        }
        
        sum += value;
        document.write(count+". "+sum+"<br>");
        count++;
    }
    document.write("총 "+count+"번 실행함.");
}
// case.7 무한곱셈공식 생성 - 어느 곳에서나 출력이 가능한.
function printGugudan(numb){
    var data = '';
    for(var i = 2; i<=numb; i++){
        data += i + "단 출력"+"<br>";
        for(var m = 1; m <= numb; m++){
            data += i + "x" + m + " = " + (i*m)+"<br>";
        }
        data += "<br>";
    }
    return data;
}


// todo. 다음실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수 만들기.
/*
    //* 실행구문
    document.write("1 결과 =" + calculator("+", 20, 10) + "<br>");
    document.write("2 결과 =" + calculator("-", 20, 10) + "<br>");
    document.write("3 결과 =" + calculator("*", 20, 10) + "<br>");
    document.write("4 결과 =" + calculator("/", 20, 10) + "<br>");
    document.write("5 결과 =" + calculator("%", 20, 10) + "<br>");
    //* 결과 
    결과 = 30
    결과 = 10
    결과 = 200
    결과 = 2
    결과 = 잘못된 연산자 입니다.
*/
function calculator(op,numb1,numb2){
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
            result = "잘못된 연산자입니다.";
            break;
    }
    return result;
}
// todo 위의 예제에 추가로 사칙연산 부분을 함수로 변환하여 보다 편하게 사용 할 수 있게 만들기.
/* 
//* 실행구문
document.write(calculator2("+", 20, 10) + "<br>");
document.write(add(20, 10) + "<br>");
document.write(sub(20, 10) + "<br>");
document.write(mul(20, 10) + "<br>");
document.write(div(20, 10) + "<br>");
*/
function calculator2(op,numb1,numb2){
    // 이 함수에서 가져다 쓸 수있게
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
            result = "잘못된 연산자입니다.";
            break;
    }
    return result;
}
function add(numb1,numb2){
    // 더하기기능
    var addResult = numb1+numb2;
    return addResult;
}
function sub(numb1,numb2){
    // 빼기기능
    var subResult = numb1-numb2;
    return subResult;
}
function mul(numb1,numb2){
    // 곱하기기능
    var mulResult = numb1*numb2;
    return mulResult;
}
function div(numb1,numb2){
    // 나누기기능
    var divResult = numb1/numb2;
    return divResult;
}
// case.8 함수를 변수에 담기
function hello(name){
    console.log(name + "welcome!");
}
var func = hello;

// case.9 함수를 매개변수에 담기
function hi1(){
    console.log("Hello?");
}
function hi2(){
    console.log("안녕?");
}
function execute(func){
    func();
}
// case.10 버튼을 클릭했을 때 매개변수값으로 전달받은 함수 실행하기
function welcome(){
    alert("환영합니다. 반갑습니다.");
}
$(document).ready(function(){
    $("#runEx10").click(welcome); 
});
// case.11 1초마다 매개변수 값으로 넘긴 익명 함수 호출
function loopStart(){
    setInterval(function(){
        document.write("hi, hello");
    },1000);
}

// case.12 함수를 매개변수로 전달받아 반복호출 하기
function callFunctionTenTimes(otherFunction){
    for(var i = 0; i < 10; i++){
        otherFunction();
    }
}
function justFunction(){
    document.write('hello?','<br>');
}

// lastCase. returnValue로 함수를 사용하기
function createHello(){
    function hello(user){
        document.write(user+'welcome!');
    }
    return hello;
}
var result = createHello();


/*
? 리터럴
    * 현재까지 변수를 만들 때 사용하던 방식

    *ex 리터럴방식
    var age = 10, var name = "mark"
    
    *ex 객체방식
    var age = new Number(10);
    var name = new String("Mark");

    * ex.1 함수만드는 방법의 4가지
    var hello = function(name){ //? 리터럴방식
        alert(name + "hello");
    }
    hello("mark");

    function hello(name){ //? 일반함수방식
        alert(name + "hello");
    }
    hello("mark");

    var hello2 = new Function("name", "alert(name+'hello');"); //? 객체방식 (실용도없음)
    hello2("mark");

    (function(name){ //? 익명함수확장 (재사용이 목적이 아닌 다른 함수간의 충돌을 막기위함.)
        document.write(name + "님 환영합니다.");
    })("mark");
*/