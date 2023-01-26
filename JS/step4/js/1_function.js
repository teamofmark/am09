/*
    ? function (함수)

    * 기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    * 중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/

// *case. 1 다음 구문을 hello()라는 함수를 만들어서 유지보수가 쉽게 만들기.
function helloExp(loopCount,comment){
    for(var i = 0; i < loopCount; i++){
        document.write(comment,"<br>");
    }
}
// *case. 2 매개변수(Parameter)가 있는 함수 만들기.
// ? 인자 / Parameter(매개변수) - param
// * 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결.
function sumParam(num1,num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result + ' 입니다.');
}
// *case. 3 매개변수의 자리가 없어도 있는것처럼..
// ? arguments(가변인자함수 - 배열은 아니지만 배열처럼 사용되는 매개변수들)
/*
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.
*/
function sumAll(){
    //? arguments는 배열같은 매개변수
    var willReturn = 0;
    for(var i = 0; i<arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}
function sumAllEx(){
    var willReturn = 0;
    for(var i in arguments){ //? for in looop는 IE9이상에서만 가능. vue.js등의 framework에서 주로 사용.
        willReturn += arguments[i];
    }
    return willReturn; //? 호출부로 내보내기
}

// alert(sumAllEx(1,2,3,4,5,6,7,8,9,10));

// *case. 4 "자신의 이름"의 나이는 "자신의 나이"세 입니다. 를 arguments를 이용해 만들어보기.
// ! data의 입력순서를 arguments내에서 조작 할 수 없다.
function showInfo(){
    console.log("이름 = " + arguments[0]);
    console.log("나이 = " + arguments[1]);
    alert(arguments[0] + "의 나이는" + arguments[1] + "세 입니다.");
}
/*
    ?return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를
    * 함수 외부로 전달하기 위해 사용하는 출력 부.


    !ex.1 함수f(x)안에 넣는 값이 매개변수, 결과로 나오는 x*x 가 리턴값.
        function f(x) { return x * x; }
        alert(f(3));

    !ex.2 alert에서 매개변수를 두개를 선언하면 추가된 매개변수를 무시한다.
    //*(매개변수가 초과 됐을 시) 또한 원래 함수의 매개변수보다 적게 입력하면 undefined를 출력한다.
        alert('기존매개변수', '추가매개변수');
        prompt('기존매개변수');
*/
// *case.5 두 수를 매개변수로 받고, 두 값을 더한 결과값을 return하는 함수로 만들어보자.
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result; //? 호출부 리턴.
}
// var value = sumReturn1(13,26);
// alert(value);

// *case.6 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수를 만들어보자.
// !단, 입력값이 0이면 즉시 실행을 멈춰야 한다.
function infiniteSum(){
    var sum = 0;
    var count = 1;
    while(true){
        var value = parseInt(window.prompt("숫자만 입력해라."));
        if(value == 0){
            document.write("종료");
            return;//break;
        }
        sum += value;
        document.write(count + ". " + sum + "<br>");
        count++;
    }
    document.write("총" + count + "번 실행함.");
}

// todo.1 다음실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수 만들기.
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
    결과 = 잘못된 입력값이 있습니다.
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
            result = "잘못된 입력값이 있습니다.";
            break;
    }
    return result;
}
// todo.2 위의 예제에 추가로 사칙연산부를 함수로 변환하여 보다 편하게 사용할 수 있게 만들기.
/* 
//* 실행구문
document.write(calculator2("+", 20, 10) + "<br>");
document.write(add(20, 10) + "<br>");
document.write(sub(20, 10) + "<br>");
document.write(mul(20, 10) + "<br>");
document.write(div(20, 10) + "<br>");
*/
// ! 위 예제에서 직접연산식이 아닌 각 연산함수인 add(+),sub(-),mul(*),div(/)를 이용하여 해결.
function calculator2(op,numb1,numb2){
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
            result = "잘못된 입력값이 있습니다.";
            break;
    }
    return result;
}
function add(numb1,numb2){
    // 더하기를 완성하고 값을 어떻게 calculator2에 전달할것인가?
    var addResult = numb1 + numb2;
    return addResult;
}
function sub(numb1,numb2){
    var subResult = numb1 - numb2;
    return subResult;
}
function mul(numb1,numb2){
    var mulResult = numb1 * numb2;
    return mulResult;
}
function div(numb1,numb2){
    var divResult = numb1 / numb2;
    return divResult;
}

// *case. 7 함수를 변수에 담기.
function hello(name){
    console.log(name + "환영합니다.");
}
var func = hello; //? func라는 변수안에 hello라는 함수"자체"를 담았다.

// *case. 8 매개변수 값으로 함수 사용하기.
function hi1(){
    console.log("Hello.");
}
function hi2(){
    console.log("안녕하세요.");
}
function execute(func){
    func();
}

// *case. 9 button click시 매개변수값으로 넘긴 함수 실행하기.

function welcome(){
    alert("환영합니다. 반갑습니다.");
}
$(document).ready(function(){
    $("#runEx9").click(welcome);
});
// *case. 10 1초마다 매개변수 값으로 넘긴 익명 함수 호출.
function loopStart(){
    setInterval(function(){
        document.write("hi.hello.");
    },1000);
}
// todo. 함수(justFunction)를 매개변수로 전달받아(callFunctionTenTimes) 10회반복호출하기.
function justFunction(){
    document.write('hello JS world.','<br>');
}
function callFunctionTenTimes(otherFunction){
    for(var i = 0; i < 10; i++){
        otherFunction();
    }
}
// *case.11 returnValue로 함수를 사용하기.
function createHello(){
    function hello(user){ //? user 매개변수 생성하는 hello 함수 생성 (createHello실행시)
        document.write(user + 'welcome!');
    }
    return hello; //? createHello가 실행된 위치로 생성된 hello 함수 return.
}
var result = createHello(); //? createHello 실행위치 기 때문에 hello 함수가 들어옴.
// * result = hello 함수. -> 고로 매개변수를 입력받을수있다.