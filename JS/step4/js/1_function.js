/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// case.1 다음 구문을 hello() 라는 함수를 만들어 유지보수 하기 쉽게 만들어보기
// 1-1 수동으로 반복함
/*
document.write("안녕. 방가와","<br>");
document.write("안녕. 방가와","<br>");
document.write("안녕. 방가와","<br>");
*/
// 1-2. 반복을 쉽게하기 위해 반복문
/*
var comment = "안녕. 방가와";
for(var i = 0; i < 3; i++){
    document.write(comment,"<br>");
}
*/
// 1-3. 원할 때 실행하기 위해 함수화
function commentFunc(){
    var comment = "안녕. 방가와";
    for(var i = 0; i < 3; i++){
        document.write(comment,"<br>");
    }
}
// case.2 매개변수=인자=parameter(paramVal)가 있는 함수 만들기
function commentParam(count,comment){
    for(var i = 0; i < count; i++){
        document.write(comment,"<br>");
    }
}
// case.2 다시한번사용해보기
function sumParam(num1, num2){
    var result = num1 + num2;
    console.log("두 수의 합은 = " + result);
};
// case.3 매개변수의 자리가 없어도 있는것처럼.. arguments(가변인자함수 - 배열인듯 배열아닌 배열같은)
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.
*/
// case. 3-1
function showInfo(){
    // ! data의 입력순서를 arguments내에서 조작할 수 없다.
    console.log("index:0 = " + arguments[0]);
    console.log("index:1 = " + arguments[1]);
    console.log("index:2 = " + arguments[2]);
    console.log(arguments[0] + "의 나이는" + arguments[1] + "세입니다." + "혈액형은" + arguments[2]);
}
// case. 3-2
function sumAll(){
    // console.log(typeof(arguments) + ":" + arguments.length);
    var willReturn = 0;
    for(var i = 0; i<arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}
/*
    ?return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를 함수 외부로 전달하기 위해 사용하는 출력 부.    
*/
function f(x){
    return x*x;
}
function sumAllEX(){
    var willReturn = 0;
    for(var i in arguments){
        willReturn += arguments[i];
    }
    return willReturn;
}
// case.4 return value를 변수에 저장하고 전달하기
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result;
}
var sumReturnVal = sumReturn1(13,26);

// case.5 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수를 만들어보자.
// ! 단 입력값이 0이면 즉시 실행을 멈추게 한다.
function infiniteSum(){
    var sum = 0;
    var count = 1;
    while(true){
        var value = parseInt(prompt('숫자만 입력해라.'));
        if(value == 0){
            document.write("종료");
            break;
        }
        sum += value;
        document.write(count +". " + sum +"<br>");
        count++;
    }
    document.write("총 " + count + "번 실행함.");
}
// todo. x단 출력을 어디에서든 출력할수있게 만들기
function printGugudan(numb){
    var data = "";
    for(var i = 2; i <= numb; i++){
        data += i + "단 출력"+ "<br>";
        for(var m = 1; m <= numb; m++){
            data += i + "x" + m + " = " + (i*m)+"<br>";
        }
        data += "<br>";
    }
    return data;
}
// todo. 실행구문;
// document.write(printGugudan(12));
// console.log(printGugudan(12));
// todo.2 다음실행구문으로 전달받은 매개변수로 계산하여 결과를 출력(어디든)하는 함수 만들기.
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
    var result = "";
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
// todo.3 위 계산기 예제에 추가로 사칙연산 부분을 함수로 분리해서 보다 편하게 사용 할 수 있게 만들기.
/* 
//* 실행구문
document.write(calculator2("+", 20, 10) + "<br>");
document.write(add(20, 10) + "<br>");
document.write(sub(20, 10) + "<br>");
document.write(mul(20, 10) + "<br>");
document.write(div(20, 10) + "<br>");
*/
function calculator2(op,numb1,numb2){
    var result = "";
    switch(op){
        case "+" :
            result = add(numb1,numb2);
            break;
        case "-" :
            result = sub(numb1,numb2);
            break;
        case "*" :
            result = mul(numb1,numb2);
            break;
        case "/" :
            result = div(numb1,numb2);
            break;
        default:
            result = "잘못된 연산자 입니다.";
            break;
    }
    return result;
}
function add(numb1,numb2){ 
   return numb1 + numb2;
   /*
   var addResult = numb1 + numb2;
   return addResult;
   */
}
function sub(numb1,numb2){
    // 빼기
    return numb1 - numb2;
}
function mul(numb1,numb2){
    //  곱하기
    return numb1 * numb2;
}
function div(numb1,numb2){
    // 나누기
    return numb1 / numb2;
}
// case.6 함수를 변수에 담을수 있는가?
function hello(name){
    console.log(name + "환영합니다.");
}
hello("Mark");

var func = hello;
func("Stark");
// case.7 매개변수 값으로 함수를 담을수 있는가?
function hi1(){
    console.log("Hello.");
}
function hi2(){
    console.log("안녕하세요.");
}
function execute(func){
    func();
}
//  todo.4 함수를 매개변수로 전달받아 반복호출하기

function callFunctionTenTimes(otherFunction) { // callFunctionTenTimes라는 함수의 매개변수로 otherFunction 지정
    for (var i = 0; i < 10; i++) {
        otherFunction(); // otherFunction 함수를 10번 출력하라.
    }
}
callFunctionTenTimes(function(){
   document.write('hello..!');
});
// todo.5 위 예제를 기명함수로 변경해서 풀어보기 

function callFunctionTenTimes2(otherFunction) { // callFunctionTenTimes라는 함수의 매개변수로 otherFunction 지정
    for (var i = 0; i < 10; i++) {
        otherFunction(); // otherFunction 함수를 10번 출력하라.
    }
}
function justFunction(){
   document.write('hello..!',"<br>");
}
callFunctionTenTimes2(justFunction);