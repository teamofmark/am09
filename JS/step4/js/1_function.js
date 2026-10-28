/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.
*/
// case.1 다음 구문을 hello() 라는 함수를 만들어 유지보수 하기 쉽게 만들어보기
/* 1-1 수동으로 반복함
document.write("안녕. 방가와","<br>");
document.write("안녕. 방가와","<br>");
document.write("안녕. 방가와","<br>");
// 1-2. 반복을 쉽게하기 위해 반복문
var comment = "안녕. 방가와";
for(var i = 0; i < 3; i++){
    document.write(comment,"<br>");
}
// 1-3. 원할 때 실행하기 위해 함수화
function commentFunc(){
    var comment = "안녕. 방가와";
    for(var i = 0; i < 3; i++){
        document.write(comment,"<br>");
    }
}
*/
// case.2 매개변수(parameter)가 있는 함수 만들기
// ? 매개(가되어주는)변수, 인자, parameter, paramVal.....호칭 여러개.
function commentParam(count,comment){
    for(var i = 0; i < count; i++){
        document.write(comment,"<br>");
    }
}
// case.3 매개변수 복습
function sumParam(num1,num2){
    var result = num1 + num2;
    console.log("두 수의 합은 = " + result);
}
// case. 3 매개변수의 자리가 없어도 있는것처럼.. arguments(가변인자함수 - 배열은 아니지만 배열처럼 사용하면 된다.)
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.
*/
function sumAll(){
    console.log(typeof(arguments) + ' : ' + arguments.length);
    var willReturn = 0;
    for(var i = 0; i < arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}
// todo. "자신의 이름"의 나이는 "자신의 나이" 세 입니다. arguments를 이용해 만들어보기
function showInfo(){
    console.log(arguments[0] + "의 나이는" + arguments[1] + "세 입니다.");
}

/*
    ?return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를 함수 외부로 전달하기 위해 사용하는 출력 부.
*/
// case.4 Return의 기본 이해
function f(x){
    return x*x;
}
function sumAllEX(){
    var willReturn = 0;
    for(var i in arguments){
        // var i = 0; i < arguments.length; i++ IE9까지는 사용불가
        willReturn += arguments[i];
    }
    return willReturn;
}
// case.5 리턴되는 값(returnValue)을 변수에 저장하고 전달하기
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result;
}
var returnVal = sumReturn1(13,26);

// case.6 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수
// ! 단, 입력값이 0 이면 즉시 실행 중지.
function infiniteSum(){
    var sum = 0;
    var count = 1;
    while(true){
        var value = parseInt(prompt("숫자만 입력해라."));
        if(value == 0){
            document.write("종료. ");
            return; //? break는 속한로직(loop)을 빠져나오지만, return은 함수 자체를 빠져나옴
        }
        sum += value;
        document.write(count+". " + sum + "<br>");
        count++;
    }
    document.write("총" + count + "번 실행함.");
}
// todo.1 x단 출력을 함수로 만들기
function printGugudan(numb){
    var data = '';
    for(var i = 2; i<=numb; i++){
        data += i + "단 출력" + "<br>";
        for(var m = 1; m <= numb; m++){
            data += i + 'x' + m + " = " + (i*m) + "<br>";
        }
        data += '<br>';
    }
    return data;
}
// case.7 다음실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수.

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
    var result = 0;
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
//todo 2. 위의 예제에 추가로 사칙연산 부분을 함수로 변환하여 보다 편하게 사용 할 수 있게 만들기.
/* 
//* 실행구문
document.write(calculator2("+", 20, 10) + "<br>");
document.write(add(20, 10) + "<br>");
document.write(sub(20, 10) + "<br>");
document.write(mul(20, 10) + "<br>");
document.write(div(20, 10) + "<br>");
*/
function calculator2(op,num1,num2){ //? 종합 사칙연산기
    var result = 0;
    switch(op){
        case "+":
            result = add(num1,num2);//? 각 해당 함수 불러와 사용;
            break;
        case "-":
            result = sub(num1,num2);//? 각 해당 함수 불러와 사용;
            break;
        case "*":
            result = mul(num1,num2);//? 각 해당 함수 불러와 사용;
            break;
        case "/":
            result = div(num1,num2);//? 각 해당 함수 불러와 사용;
            break;
        default:
            result = "잘못된 연산자 입니다.";
            break;
    }
    return result;
}
function add(numb1,numb2){ //? 더하기
    var addResult = numb1 + numb2;
    return addResult;
    // return numb1+numb2;
}
function sub(numb1,numb2){ //? 빼기
    var subResult = numb1 - numb2;
    return subResult;
}
function mul(numb1,numb2){ //? 곱하기
    var mulResult = numb1 * numb2;
    return mulResult;
}
function div(numb1,numb2){ //? 나누기
    var divResult = numb1 / numb2;
    return divResult;
}

// case.8 함수를 변수에 담기
function hello(name){
    console.log(name + "환영합니다.");
}
var func = hello;
// case.9 함수를 매개변수에 담기
function hi1(){
    console.log('hello');
}
function hi2(){
    console.log('안녕');
}
function execute(func){
    func();
}
// case.10 버튼 클릭시 매개변수값으로 넘긴 함수 호출하기
function welcome(){
    alert("환영합니다. 반갑습니다.");
}
/* 10-1. 기명함수 사용*/
$(document).ready(function(){
    $("#runEX10").click(welcome);
});

/*10-2. 익명함수 사용
$(document).ready(function(){
    $("#runEX10").click(function(){
        alert("환영합니다. 반갑습니다.");
    });
});
*/
/* 10-3. 이벤트 객체사용
$(document).ready(function(){
    $("#runEX10").click(function(event){
        console.log(event);
        console.log(this);
    });
});
*/
/* 10-4. on 메서드 사용
$(document).ready(function(){
    $("#runEX10").on("click",function(){
        alert("환영합니다. 반갑습니다.");
    });
});
*/
/* 10-5. 순수 JS 처리 - defer 문제가 있기 때문에 테스트시 script 최하단 이동 필요
document.getElementById("runEX10").addEventListener("click", function(){
    alert("환영합니다. 반갑습니다.");
});
*/

// case.11 매개변수로 전달받은 함수를 반복호출하기
function callFunctionTenTimes(otherFunction){
    for(var i = 0; i < 10; i++){
        otherFunction();
    }
}
/* 11-1 익명함수 사용시
callFunctionTenTimes(function(){
    document.write("hello..!");
});*/
// 11-2 기명함수 사용시
function justFunction(){
    document.write("hello..!");
}
// case.12 return Value로 함수 사용
function createHello(){
    function hello(user){
        document.write(user+'welcome!');
    }
    return hello;
}
var result = createHello();